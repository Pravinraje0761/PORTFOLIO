import { useEffect, useRef, useState } from 'react';

// Sequence 1 Configurations (Laptop: 180 frames)
const SEQ1_CONFIG = {
  frameCount: 180,
  directory: 'ezgif-1d2df9a98f77c9f0-jpg',
  prefix: 'ezgif-frame-',
  ext: '.jpg'
};

// Sequence 2 Configurations (Desktop: 120 frames)
const SEQ2_CONFIG = {
  frameCount: 120,
  directory: 'ezgif-11f8b1f3e2b1e199-jpg',
  prefix: 'ezgif-frame-',
  ext: '.jpg'
};

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const laptopImages: HTMLImageElement[] = [];
    const desktopImages: HTMLImageElement[] = [];
    const totalFrames = SEQ1_CONFIG.frameCount + SEQ2_CONFIG.frameCount;
    let totalLoaded = 0;

    let scrollPercent = 0;      // Target timeline position (0.0 to 1.0)
    let currentProgress = 0;    // Interpolated timeline position (0.0 to 1.0)

    let lastDrawnSeq = -1;      // 0: Black/Clear, 1: Laptop, 2: Desktop
    let lastDrawnIdx = -1;
    let lastDrawnOpacity = -1;
    let animationFrameId = 0;

    // Helper to format frame path
    const getFramePath = (config: typeof SEQ1_CONFIG, index: number) => {
      const paddedIndex = String(index).padStart(3, '0');
      return `/${config.directory}/${config.prefix}${paddedIndex}${config.ext}`;
    };

    // Preload both image sequences in parallel
    const preloadAllImages = () => {
      return new Promise<void>((resolve) => {
        const handleImageLoad = () => {
          totalLoaded++;
          const progressPercent = Math.floor((totalLoaded / totalFrames) * 100);
          setLoadProgress(progressPercent);
          
          if (totalLoaded === totalFrames) {
            resolve();
          }
        };

        const handleImageError = (src: string) => {
          console.error(`Failed to load asset: ${src}`);
          totalLoaded++;
          const progressPercent = Math.floor((totalLoaded / totalFrames) * 100);
          setLoadProgress(progressPercent);
          
          if (totalLoaded === totalFrames) {
            resolve();
          }
        };

        // 1. Preload Laptop Frames
        for (let i = 1; i <= SEQ1_CONFIG.frameCount; i++) {
          const img = new Image();
          const src = getFramePath(SEQ1_CONFIG, i);
          img.src = src;
          img.onload = handleImageLoad;
          img.onerror = () => handleImageError(src);
          laptopImages.push(img);
        }

        // 2. Preload Desktop Frames
        for (let i = 1; i <= SEQ2_CONFIG.frameCount; i++) {
          const img = new Image();
          const src = getFramePath(SEQ2_CONFIG, i);
          img.src = src;
          img.onload = handleImageLoad;
          img.onerror = () => handleImageError(src);
          desktopImages.push(img);
        }
      });
    };

    // Canvas viewport coverage draw (cover aspect ratio, no zooms)
    const drawImageCover = (img: HTMLImageElement, opacity = 1) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      // Scale ratio to fill viewport bounds edge-to-edge
      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);

      // Position perfectly centered on canvas
      const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
      const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      ctx.globalAlpha = opacity;
      ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
      ctx.globalAlpha = 1.0; // Reset alpha
    };

    // Draw/Update wrapper to cache render states and optimize CPU/GPU cycles
    const updateRenderState = (seq: number, idx: number, opacity: number) => {
      if (
        seq === lastDrawnSeq &&
        idx === lastDrawnIdx &&
        Math.abs(opacity - lastDrawnOpacity) < 0.01
      ) {
        return;
      }

      if (seq === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else if (seq === 1) {
        drawImageCover(laptopImages[idx], opacity);
      } else if (seq === 2) {
        drawImageCover(desktopImages[idx], opacity);
      }

      lastDrawnSeq = seq;
      lastDrawnIdx = idx;
      lastDrawnOpacity = opacity;
    };

    // Handle window resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Force a redraw by invalidating cache
      lastDrawnSeq = -1;
      lastDrawnIdx = -1;
      lastDrawnOpacity = -1;
    };

    // Track overall page scroll percentage dynamically aligned to DOM elements
    const updateScrollTarget = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight <= 0) {
        scrollPercent = 0;
        return;
      }

      const skillsElement = document.getElementById('skills');
      
      const skillsTop = skillsElement ? skillsElement.offsetTop : docHeight * 0.4;
      const skillsHeight = skillsElement ? skillsElement.offsetHeight : docHeight * 0.15;
      const skillsBottom = skillsTop + skillsHeight;

      // Define transition thresholds relative to skills section scroll position
      const fadeOutStart = skillsTop;
      const fadeOutEnd = skillsTop + skillsHeight * 0.25;
      const fadeInStart = skillsTop + skillsHeight * 0.75;
      const fadeInEnd = skillsBottom;

      if (scrollTop < fadeOutStart) {
        // Laptop Animation: 0.0 to 0.4 (scales linearly until top of Skills)
        const progress = scrollTop / fadeOutStart;
        scrollPercent = progress * 0.4;
      } 
      else if (scrollTop >= fadeOutStart && scrollTop < fadeOutEnd) {
        // Laptop Fade Out: 0.4 to 0.45 (fades final frame)
        const progress = (scrollTop - fadeOutStart) / (fadeOutEnd - fadeOutStart);
        scrollPercent = 0.4 + progress * 0.05;
      } 
      else if (scrollTop >= fadeOutEnd && scrollTop < fadeInStart) {
        // Solid Plain Black: 0.45 to 0.55 (holds black screen)
        scrollPercent = 0.5;
      } 
      else if (scrollTop >= fadeInStart && scrollTop < fadeInEnd) {
        // Desktop Fade In: 0.55 to 0.6 (fades in first frame of desktop)
        const progress = (scrollTop - fadeInStart) / (fadeInEnd - fadeInStart);
        scrollPercent = 0.55 + progress * 0.05;
      } 
      else {
        // Desktop Animation: 0.6 to 1.0 (scales from bottom of Skills to bottom of page)
        const maxScrollDesktop = docHeight - fadeInEnd;
        const progress = maxScrollDesktop > 0 ? (scrollTop - fadeInEnd) / maxScrollDesktop : 1.0;
        scrollPercent = 0.6 + Math.min(1.0, progress) * 0.4;
      }
    };

    // The smooth linear-interpolated render loop mapping scroll states
    const renderLoop = () => {
      const diff = scrollPercent - currentProgress;
      
      if (Math.abs(diff) < 0.0001) {
        currentProgress = scrollPercent;
      } else {
        currentProgress += diff * 0.08;
      }

      // --- Scroll Range Mapping Timeline ---
      if (currentProgress <= 0.4) {
        const localProgress = currentProgress / 0.4;
        let idx = Math.floor(localProgress * (SEQ1_CONFIG.frameCount - 1));
        idx = Math.max(0, Math.min(SEQ1_CONFIG.frameCount - 1, idx));
        updateRenderState(1, idx, 1.0);
      }
      else if (currentProgress > 0.4 && currentProgress <= 0.45) {
        const opacity = 1.0 - (currentProgress - 0.4) / 0.05;
        const finalLaptopIndex = SEQ1_CONFIG.frameCount - 1;
        updateRenderState(1, finalLaptopIndex, opacity);
      }
      else if (currentProgress > 0.45 && currentProgress <= 0.55) {
        updateRenderState(0, 0, 0.0);
      }
      else if (currentProgress > 0.55 && currentProgress <= 0.6) {
        const opacity = (currentProgress - 0.55) / 0.05;
        updateRenderState(2, 0, opacity);
      }
      else if (currentProgress > 0.6) {
        const localProgress = (currentProgress - 0.6) / 0.4;
        let idx = Math.floor(localProgress * (SEQ2_CONFIG.frameCount - 1));
        idx = Math.max(0, Math.min(SEQ2_CONFIG.frameCount - 1, idx));
        updateRenderState(2, idx, 1.0);
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Start boot caching sequence
    const init = async () => {
      await preloadAllImages();
      
      // Delay preloader close for boot-up transition feel
      setTimeout(() => {
        setFade(true);
        setTimeout(() => setLoading(false), 700);
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('scroll', updateScrollTarget);
        
        updateScrollTarget();
        renderLoop();
      }, 500);
    };

    init();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateScrollTarget);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center font-mono transition-opacity duration-700 ease-out ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-[300px] border border-white/10 p-6 bg-[#0a0a0b] text-center space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/80">BOOT_SYS: NOMINAL</h3>
            <div className="h-1 w-full bg-white/5 overflow-hidden border border-white/10">
              <div
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <div className="text-[10px] text-white/40 tracking-wider">
              LOADING PORTFOLIO CORES... {loadProgress}%
            </div>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen z-[-10] pointer-events-none bg-[#000]"
        style={{
          imageRendering: 'pixelated',
          display: 'block'
        }}
      />
      {/* Background radial soft darkening overlay to make text pop out perfectly */}
      <div className="fixed inset-0 z-[-9] pointer-events-none bg-gradient-to-tr from-[#020203]/90 via-[#07070a]/75 to-[#020203]/95" />
    </>
  );
}
