import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroFloatingSceneProps {
  className?: string;
  intensity?: 'subtle' | 'full' | 'off';
}

export const HeroFloatingScene: React.FC<HeroFloatingSceneProps> = ({
  className = '',
  intensity = 'subtle',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (intensity === 'off') return;

    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // ==============================================================
    // Procedural Textures for Ethereal Luxury Ambiance
    // (Zero clunky leaves or flowers — only delicate light bokeh & mist)
    // ==============================================================

    // 1. Soft Golden Glow Bokeh Particle (Evening Firefly / Pool Sparkle)
    const bokehCanvas = document.createElement('canvas');
    bokehCanvas.width = 64;
    bokehCanvas.height = 64;
    const bCtx = bokehCanvas.getContext('2d')!;
    const bGrad = bCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    bGrad.addColorStop(0, 'rgba(255, 235, 175, 1)');
    bGrad.addColorStop(0.2, 'rgba(212, 175, 55, 0.85)');
    bGrad.addColorStop(0.5, 'rgba(197, 160, 89, 0.35)');
    bGrad.addColorStop(0.85, 'rgba(197, 160, 89, 0.08)');
    bGrad.addColorStop(1, 'rgba(197, 160, 89, 0)');
    bCtx.fillStyle = bGrad;
    bCtx.fillRect(0, 0, 64, 64);
    const bokehTexture = new THREE.CanvasTexture(bokehCanvas);
    bokehTexture.colorSpace = THREE.SRGBColorSpace;

    // 2. Delicate Starlight / Champagne Shimmer Particle
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 32;
    starCanvas.height = 32;
    const sCtx = starCanvas.getContext('2d')!;
    const sGrad = sCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    sGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    sGrad.addColorStop(0.3, 'rgba(223, 202, 155, 0.8)');
    sGrad.addColorStop(0.7, 'rgba(197, 160, 89, 0.2)');
    sGrad.addColorStop(1, 'rgba(197, 160, 89, 0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 32, 32);
    const starTexture = new THREE.CanvasTexture(starCanvas);
    starTexture.colorSpace = THREE.SRGBColorSpace;

    // 3. Ethereal Soft Twilight Mist
    const mistCanvas = document.createElement('canvas');
    mistCanvas.width = 128;
    mistCanvas.height = 128;
    const mCtx = mistCanvas.getContext('2d')!;
    const mGrad = mCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    mGrad.addColorStop(0, 'rgba(212, 175, 55, 0.12)');
    mGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
    mGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    mCtx.fillStyle = mGrad;
    mCtx.fillRect(0, 0, 128, 128);
    const mistTexture = new THREE.CanvasTexture(mistCanvas);

    // ==============================================================
    // Atmospheric Particle Groups (Golden Twilight Fireflies & Stardust)
    // ==============================================================

    // Layer A: Golden Evening Fireflies (Floating slowly upward from pool)
    const fireflyCount = intensity === 'full' ? 55 : 35;
    const fireflyGeom = new THREE.BufferGeometry();
    const fireflyPositions = new Float32Array(fireflyCount * 3);
    const fireflyPhases = new Float32Array(fireflyCount);
    const fireflySpeeds = new Float32Array(fireflyCount);

    for (let i = 0; i < fireflyCount; i++) {
      fireflyPositions[i * 3] = (Math.random() - 0.5) * 18;
      fireflyPositions[i * 3 + 1] = (Math.random() - 0.5) * 10 - 1;
      fireflyPositions[i * 3 + 2] = (Math.random() - 0.5) * 6 + 1; // spread in depth
      fireflyPhases[i] = Math.random() * Math.PI * 2;
      fireflySpeeds[i] = 0.4 + Math.random() * 0.6;
    }
    fireflyGeom.setAttribute('position', new THREE.BufferAttribute(fireflyPositions, 3));

    const fireflyMat = new THREE.PointsMaterial({
      size: 0.32,
      map: bokehTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.75,
    });
    const fireflySystem = new THREE.Points(fireflyGeom, fireflyMat);
    scene.add(fireflySystem);

    // Layer B: Subtle Champagne Stardust (Distant & Middle depth)
    const stardustCount = intensity === 'full' ? 90 : 50;
    const stardustGeom = new THREE.BufferGeometry();
    const stardustPositions = new Float32Array(stardustCount * 3);

    for (let i = 0; i < stardustCount; i++) {
      stardustPositions[i * 3] = (Math.random() - 0.5) * 20;
      stardustPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      stardustPositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    stardustGeom.setAttribute('position', new THREE.BufferAttribute(stardustPositions, 3));

    const stardustMat = new THREE.PointsMaterial({
      size: 0.14,
      map: starTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.6,
    });
    const stardustSystem = new THREE.Points(stardustGeom, stardustMat);
    scene.add(stardustSystem);

    // Layer C: Low Translucent Evening Mist Sprites (Ground/Pool level)
    const mistSprites: THREE.Sprite[] = [];
    const mistMat = new THREE.SpriteMaterial({
      map: mistTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const mistCoords = [
      { x: -5, y: -3.5, z: 0, s: 7 },
      { x: 4, y: -3.0, z: -1, s: 8 },
      { x: 0, y: -4.0, z: 1, s: 9 },
    ];

    mistCoords.forEach((mc) => {
      const sprite = new THREE.Sprite(mistMat);
      sprite.position.set(mc.x, mc.y, mc.z);
      sprite.scale.set(mc.s, mc.s * 0.45, 1);
      scene.add(sprite);
      mistSprites.push(sprite);
    });

    // ==============================================================
    // Mouse Parallax Reaction
    // ==============================================================
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let mouseCurrentX = 0;
    let mouseCurrentY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTargetX = x;
      mouseTargetY = y;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // ==============================================================
    // Animation Loop with Gentle Drift & Parallax
    // ==============================================================
    let frameId = 0;
    const clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    const tick = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Exponential damping for silky mouse parallax
      mouseCurrentX = THREE.MathUtils.damp(mouseCurrentX, mouseTargetX, 3.0, delta);
      mouseCurrentY = THREE.MathUtils.damp(mouseCurrentY, mouseTargetY, 3.0, delta);

      camera.position.x = mouseCurrentX * 0.6;
      camera.position.y = mouseCurrentY * 0.4;
      camera.lookAt(0, 0, 0);

      // Animate fireflies rising with gentle sine wave wobble
      const pos = fireflyGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < fireflyCount; i++) {
        const i3 = i * 3;
        const speed = fireflySpeeds[i];
        const phase = fireflyPhases[i];

        // Rise gently
        pos[i3 + 1] += 0.006 * speed;
        // Horizontal breeze wobble
        pos[i3] += Math.sin(time * 0.8 + phase) * 0.003;

        // Reset if drifted too high
        if (pos[i3 + 1] > 6) {
          pos[i3 + 1] = -5;
          pos[i3] = (Math.random() - 0.5) * 18;
        }
      }
      fireflyGeom.attributes.position.needsUpdate = true;

      // Animate subtle stardust shimmer
      stardustSystem.rotation.y = time * 0.015;
      stardustSystem.position.x = mouseCurrentX * 0.4;
      stardustSystem.position.y = mouseCurrentY * 0.3;

      // Animate gentle ground mist
      mistSprites.forEach((m, idx) => {
        m.position.x += Math.sin(time * 0.3 + idx) * 0.002;
        m.material.opacity = 0.28 + Math.sin(time * 0.5 + idx) * 0.08;
      });

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    tick();

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [intensity]);

  if (intensity === 'off') return null;

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
