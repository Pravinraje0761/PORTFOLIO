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

// DOM Elements
const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');

// Image Caches
const laptopImages = [];
const desktopImages = [];

// Scrolling Target and Progress Values (for Lerp)
let scrollPercent = 0;      // Overall page scroll target (0.0 to 1.0)
let currentProgress = 0;    // Damped/Interpolated scroll progress (0.0 to 1.0)

// Rendering cache states to avoid redundant redraws
let lastDrawnSeq = -1;      // 0: Black/Clear, 1: Laptop, 2: Desktop
let lastDrawnIdx = -1;      // Frame array index
let lastDrawnOpacity = -1;  // Drawn opacity value

// Preload both image sequences in parallel
function preloadAllImages() {
  const totalFrames = SEQ1_CONFIG.frameCount + SEQ2_CONFIG.frameCount;
  let totalLoaded = 0;

  return new Promise((resolve) => {
    // 1. Preload Laptop Frames
    for (let i = 1; i <= SEQ1_CONFIG.frameCount; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/${SEQ1_CONFIG.directory}/${SEQ1_CONFIG.prefix}${paddedIndex}${SEQ1_CONFIG.ext}`;
      
      img.onload = () => {
        totalLoaded++;
        if (totalLoaded === totalFrames) resolve();
      };
      
      img.onerror = () => {
        console.error(`Failed to load laptop frame: ${img.src}`);
        totalLoaded++;
        if (totalLoaded === totalFrames) resolve();
      };
      
      laptopImages.push(img);
    }

    // 2. Preload Desktop Frames
    for (let i = 1; i <= SEQ2_CONFIG.frameCount; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/${SEQ2_CONFIG.directory}/${SEQ2_CONFIG.prefix}${paddedIndex}${SEQ2_CONFIG.ext}`;
      
      img.onload = () => {
        totalLoaded++;
        if (totalLoaded === totalFrames) resolve();
      };
      
      img.onerror = () => {
        console.error(`Failed to load desktop frame: ${img.src}`);
        totalLoaded++;
        if (totalLoaded === totalFrames) resolve();
      };
      
      desktopImages.push(img);
    }
  });
}

// Canvas viewport coverage draw (cover aspect ratio, no zooms)
function drawImageCover(img, opacity = 1) {
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
}

// Draw/Update wrapper to cache render states and optimize CPU/GPU cycles
function updateRenderState(seq, idx, opacity) {
  // If state matches current drawn state closely, skip redraw
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
}

// Handle window resizing
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Force a redraw on the next frame by invalidating caches
  lastDrawnSeq = -1;
  lastDrawnIdx = -1;
  lastDrawnOpacity = -1;
}

// Track overall page scroll percentage (0.0 to 1.0)
function updateScrollTarget() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
}

// The smooth linear-interpolated render loop mapping scroll states
function renderLoop() {
  // Linear Interpolation: current = current + (target - current) * factor
  const diff = scrollPercent - currentProgress;
  
  if (Math.abs(diff) < 0.0001) {
    currentProgress = scrollPercent;
  } else {
    currentProgress += diff * 0.08;
  }

  // --- Scroll Range Mapping Timeline ---
  
  // 1. Laptop Scroll Phase: 0.0 to 0.4 (Plays full laptop sequence)
  if (currentProgress <= 0.4) {
    const localProgress = currentProgress / 0.4;
    let idx = Math.floor(localProgress * (SEQ1_CONFIG.frameCount - 1));
    idx = Math.max(0, Math.min(SEQ1_CONFIG.frameCount - 1, idx));
    updateRenderState(1, idx, 1.0);
  }
  
  // 2. Laptop Fade to Black Phase: 0.4 to 0.45 (Fades out final frame)
  else if (currentProgress > 0.4 && currentProgress <= 0.45) {
    const opacity = 1.0 - (currentProgress - 0.4) / 0.05;
    const finalLaptopIndex = SEQ1_CONFIG.frameCount - 1;
    updateRenderState(1, finalLaptopIndex, opacity);
  }
  
  // 3. Solid Plain Black Phase: 0.45 to 0.55 (Canvas remains black)
  else if (currentProgress > 0.45 && currentProgress <= 0.55) {
    updateRenderState(0, 0, 0.0);
  }
  
  // 4. Desktop Fade in Phase: 0.55 to 0.6 (Fades in first frame of desktop)
  else if (currentProgress > 0.55 && currentProgress <= 0.6) {
    const opacity = (currentProgress - 0.55) / 0.05;
    updateRenderState(2, 0, opacity);
  }
  
  // 5. Desktop Scroll Phase: 0.6 to 1.0 (Plays full desktop sequence)
  else if (currentProgress > 0.6) {
    const localProgress = (currentProgress - 0.6) / 0.4;
    let idx = Math.floor(localProgress * (SEQ2_CONFIG.frameCount - 1));
    idx = Math.max(0, Math.min(SEQ2_CONFIG.frameCount - 1, idx));
    updateRenderState(2, idx, 1.0);
  }

  requestAnimationFrame(renderLoop);
}

// Initialize system sequence
async function init() {
  // 1. Preload laptop and desktop sequences in parallel
  await preloadAllImages();
  
  // 2. Hide loader and start listeners
  loader.classList.add('loaded');
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('scroll', updateScrollTarget);
  
  // Set initial scroll mapping state
  updateScrollTarget();
  
  // 3. Start render loop
  requestAnimationFrame(renderLoop);
}

window.addEventListener('DOMContentLoaded', init);
