import { useState, useRef, useEffect } from 'react';
import { Upload, Download, RotateCcw } from 'lucide-react';
import { CustomSlider } from './components/CustomSlider';
import { BayerLogo } from './components/BayerLogo';
import { MobileControls } from './components/MobileControls';
import { ColorPicker } from './components/ColorPicker';

const MAX_PROCESS_SIZE = 2000;

export default function App() {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [isDefaultImage, setIsDefaultImage] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [method, setMethod] = useState<'halftone' | 'ordered' | 'ascii'>('halftone');
  const [dotSize, setDotSize] = useState(2);
  const [spacing, setSpacing] = useState(3);
  const [contrast, setContrast] = useState(1.2);
  const [brightness, setBrightness] = useState(0);
  const [angle, setAngle] = useState(0);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [shape, setShape] = useState<'circle' | 'square'>('circle');
  const [dotColor, setDotColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#0a0a0a');
  const [transparentBg, setTransparentBg] = useState(false);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<'upload' | 'edit'>('upload');
  const [canvasSize, setCanvasSize] = useState(600);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, size: 0 });
  const [resizeCorner, setResizeCorner] = useState<'nw' | 'ne' | 'sw' | 'se'>('se');
  const [canvasDimensions, setCanvasDimensions] = useState<{ width: number; height: number } | null>(null);
  const [displayedDimensions, setDisplayedDimensions] = useState<{ width: number; height: number } | null>(null);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // Load default cloud image on mount
  useEffect(() => {
    const defaultImageUrl = 'https://images.unsplash.com/photo-1701486485362-2590bbfc7e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXBpdGVyJTIwcGxhbmV0JTIwZnVsbHxlbnwxfHx8fDE3NjQ0MTg2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImage(img);
    };
    img.src = defaultImageUrl;
  }, []);

  // Apply mode-specific defaults when method changes, but ONLY for the default image
  useEffect(() => {
    if (isDefaultImage) {
      if (method === 'halftone') {
        setDotSize(2);
        setSpacing(3);
      } else if (method === 'ordered') {
        setDotSize(1.5);
        setSpacing(2);
      } else if (method === 'ascii') {
        setDotSize(1.5);
        setSpacing(2.5);
      }
    }
  }, [method, isDefaultImage]);

  useEffect(() => {
    if (image && canvasRef.current) {
      if (method === 'halftone') {
        processHalftone();
      } else if (method === 'ascii') {
        processAscii();
      } else {
        processDithering();
      }
    }
  }, [image, dotSize, spacing, contrast, brightness, angle, shape, dotColor, bgColor, transparentBg, method, skewX, skewY, canvasSize]);

  // Track displayed canvas dimensions for mobile resize handles
  useEffect(() => {
    const updateDisplayedDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setDisplayedDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDisplayedDimensions();
    window.addEventListener('resize', updateDisplayedDimensions);

    return () => {
      window.removeEventListener('resize', updateDisplayedDimensions);
    };
  }, [canvasDimensions]);

  // Handle resize mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      
      // Calculate scale factor for mobile
      const scaleFactor = canvasDimensions && displayedDimensions 
        ? canvasDimensions.width / displayedDimensions.width 
        : 1;
      
      let delta = 0;
      if (resizeCorner === 'se' || resizeCorner === 'nw') {
        delta = Math.max(deltaX, deltaY) * scaleFactor;
      } else if (resizeCorner === 'ne' || resizeCorner === 'sw') {
        delta = Math.max(deltaX, -deltaY) * scaleFactor;
      }
      
      const newSize = Math.max(200, Math.min(800, resizeStart.size + delta));
      setCanvasSize(newSize);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isResizing) return;
      e.preventDefault();

      const deltaX = e.touches[0].clientX - resizeStart.x;
      const deltaY = e.touches[0].clientY - resizeStart.y;
      
      // Calculate scale factor for mobile
      const scaleFactor = canvasDimensions && displayedDimensions 
        ? canvasDimensions.width / displayedDimensions.width 
        : 1;
      
      let delta = 0;
      if (resizeCorner === 'se' || resizeCorner === 'nw') {
        delta = Math.max(deltaX, deltaY) * scaleFactor;
      } else if (resizeCorner === 'ne' || resizeCorner === 'sw') {
        delta = Math.max(deltaX, -deltaY) * scaleFactor;
      }
      
      const newSize = Math.max(200, Math.min(800, resizeStart.size + delta));
      setCanvasSize(newSize);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    const handleTouchEnd = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isResizing, resizeStart, resizeCorner, canvasDimensions, displayedDimensions]);

  const processHalftone = () => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // For default image, crop to square. For user uploads, maintain aspect ratio
    let sourceWidth, sourceHeight, cropX, cropY, cropWidth, cropHeight;
    
    if (isDefaultImage) {
      // Crop to square
      const size = Math.min(image.width, image.height);
      sourceWidth = size;
      sourceHeight = size;
      cropX = (image.width - size) / 2;
      cropY = (image.height - size) / 2;
      cropWidth = size;
      cropHeight = size;
    } else {
      // Maintain aspect ratio
      sourceWidth = image.width;
      sourceHeight = image.height;
      cropX = 0;
      cropY = 0;
      cropWidth = image.width;
      cropHeight = image.height;
    }

    // Scale to fit within canvasSize while maintaining aspect ratio
    const aspectRatio = sourceWidth / sourceHeight;
    let finalWidth, finalHeight;
    
    if (aspectRatio > 1) {
      // Landscape
      finalWidth = canvasSize;
      finalHeight = canvasSize / aspectRatio;
    } else {
      // Portrait or square
      finalHeight = canvasSize;
      finalWidth = canvasSize * aspectRatio;
    }

    canvas.width = finalWidth;
    canvas.height = finalHeight;

    if (transparentBg) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCanvas.width = finalWidth;
    tempCanvas.height = finalHeight;

    tempCtx.filter = `contrast(${contrast}) brightness(${1 + brightness})`;
    tempCtx.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, finalWidth, finalHeight);

    const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.transform(1, skewY, skewX, 1, 0, 0);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.fillStyle = dotColor;
    
    for (let y = 0; y < canvas.height; y += spacing) {
      for (let x = 0; x < canvas.width; x += spacing) {
        const index = (Math.floor(y) * canvas.width + Math.floor(x)) * 4;
        
        const r = data[index];
        const g = data[index + 1];
        const b = data[index + 2];
        const gray = (r + g + b) / 3;
        
        const normalizedGray = gray / 255;
        const size = normalizedGray * dotSize;
        
        if (size > 0.2) {
          if (shape === 'circle') {
            const radius = size / 2;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Square
            const halfSize = size / 2;
            ctx.fillRect(x - halfSize, y - halfSize, size, size);
          }
        }
      }
    }

    ctx.restore();
    
    // Update canvas dimensions state for resize handles
    setCanvasDimensions({ width: canvas.width, height: canvas.height });
    setDisplayedDimensions({ width: canvas.width, height: canvas.height });
  };

  const processAscii = () => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    if (!ctx) return;

    // For default image, crop to square. For user uploads, maintain aspect ratio
    let sourceWidth, sourceHeight, cropX, cropY, cropWidth, cropHeight;
    
    if (isDefaultImage) {
      // Crop to square
      const size = Math.min(image.width, image.height);
      sourceWidth = size;
      sourceHeight = size;
      cropX = (image.width - size) / 2;
      cropY = (image.height - size) / 2;
      cropWidth = size;
      cropHeight = size;
    } else {
      // Maintain aspect ratio
      sourceWidth = image.width;
      sourceHeight = image.height;
      cropX = 0;
      cropY = 0;
      cropWidth = image.width;
      cropHeight = image.height;
    }

    // Scale to fit within canvasSize while maintaining aspect ratio
    const aspectRatio = sourceWidth / sourceHeight;
    let finalWidth, finalHeight;
    
    if (aspectRatio > 1) {
      // Landscape
      finalWidth = canvasSize;
      finalHeight = canvasSize / aspectRatio;
    } else {
      // Portrait or square
      finalHeight = canvasSize;
      finalWidth = canvasSize * aspectRatio;
    }

    canvas.width = finalWidth;
    canvas.height = finalHeight;

    if (transparentBg) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCanvas.width = finalWidth;
    tempCanvas.height = finalHeight;

    tempCtx.filter = `contrast(${contrast}) brightness(${1 + brightness})`;
    tempCtx.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, finalWidth, finalHeight);

    const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // ASCII density characters from light to dark
    const ascii = ' .:-=+*#%@';

    // Apply transform
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.transform(1, skewY, skewX, 1, 0, 0);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    // Set font and text properties for continuous ASCII art
    // Dot size controls the character size, spacing controls density
    // Use smaller multiplier for more gradual scaling
    const fontSize = Math.max(Math.floor(dotSize * 1.5), 6);
    ctx.font = `${fontSize}px monospace`;
    ctx.fillStyle = dotColor;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    // Character dimensions for monospace font
    const charWidth = fontSize * 0.6;
    const charHeight = fontSize;

    // Use spacing to control how densely characters are sampled
    const spacingMultiplier = spacing * 0.5;

    // Draw ASCII art in continuous lines
    for (let y = 0; y < canvas.height; y += charHeight * spacingMultiplier) {
      for (let x = 0; x < canvas.width; x += charWidth * spacingMultiplier) {
        const pixelX = Math.floor(x);
        const pixelY = Math.floor(y);
        
        if (pixelX < canvas.width && pixelY < canvas.height) {
          const index = (pixelY * canvas.width + pixelX) * 4;
          
          const r = data[index] || 0;
          const g = data[index + 1] || 0;
          const b = data[index + 2] || 0;
          const gray = (r + g + b) / 3;
          
          // Map brightness to ASCII character
          const charIndex = Math.floor((gray / 255) * (ascii.length - 1));
          const char = ascii[charIndex];
          
          ctx.fillText(char, x, y);
        }
      }
    }

    ctx.restore();
    
    // Update canvas dimensions state for resize handles
    setCanvasDimensions({ width: canvas.width, height: canvas.height });
    setDisplayedDimensions({ width: canvas.width, height: canvas.height });
  };

  const processDithering = () => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    if (!ctx) return;

    // For default image, crop to square. For user uploads, maintain aspect ratio
    let sourceWidth, sourceHeight, cropX, cropY, cropWidth, cropHeight;
    
    if (isDefaultImage) {
      // Crop to square
      const size = Math.min(image.width, image.height);
      sourceWidth = size;
      sourceHeight = size;
      cropX = (image.width - size) / 2;
      cropY = (image.height - size) / 2;
      cropWidth = size;
      cropHeight = size;
    } else {
      // Maintain aspect ratio
      sourceWidth = image.width;
      sourceHeight = image.height;
      cropX = 0;
      cropY = 0;
      cropWidth = image.width;
      cropHeight = image.height;
    }

    // Scale to fit within canvasSize while maintaining aspect ratio
    const aspectRatio = sourceWidth / sourceHeight;
    let finalWidth, finalHeight;
    
    if (aspectRatio > 1) {
      // Landscape
      finalWidth = canvasSize;
      finalHeight = canvasSize / aspectRatio;
    } else {
      // Portrait or square
      finalHeight = canvasSize;
      finalWidth = canvasSize * aspectRatio;
    }

    canvas.width = finalWidth;
    canvas.height = finalHeight;

    if (transparentBg) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCanvas.width = finalWidth;
    tempCanvas.height = finalHeight;

    tempCtx.filter = `contrast(${contrast}) brightness(${1 + brightness})`;
    tempCtx.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, finalWidth, finalHeight);

    const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Create a copy for error diffusion
    const grayData = new Float32Array(canvas.width * canvas.height);
    for (let i = 0; i < data.length; i += 4) {
      const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
      grayData[i / 4] = gray;
    }

    if (method === 'ordered') {
      // Ordered (Bayer) dithering with 8x8 matrix for better quality
      const bayerMatrix = [
        [ 0, 32,  8, 40,  2, 34, 10, 42],
        [48, 16, 56, 24, 50, 18, 58, 26],
        [12, 44,  4, 36, 14, 46,  6, 38],
        [60, 28, 52, 20, 62, 30, 54, 22],
        [ 3, 35, 11, 43,  1, 33,  9, 41],
        [51, 19, 59, 27, 49, 17, 57, 25],
        [15, 47,  7, 39, 13, 45,  5, 37],
        [63, 31, 55, 23, 61, 29, 53, 21]
      ];
      
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const idx = y * canvas.width + x;
          const oldPixel = grayData[idx];
          const threshold = (bayerMatrix[y % 8][x % 8] / 64) * 255;
          grayData[idx] = oldPixel > threshold ? 255 : 0;
        }
      }
    }

    // Draw dithered result
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.transform(1, skewY, skewX, 1, 0, 0);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.fillStyle = dotColor;
    
    for (let y = 0; y < canvas.height; y += spacing) {
      for (let x = 0; x < canvas.width; x += spacing) {
        const idx = Math.floor(y) * canvas.width + Math.floor(x);
        const pixel = grayData[idx];
        
        if (pixel > 128) {
          if (shape === 'circle') {
            const radius = dotSize / 2;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          } else {
            const halfSize = dotSize / 2;
            ctx.fillRect(x - halfSize, y - halfSize, dotSize, dotSize);
          }
        }
      }
    }

    ctx.restore();
    
    // Update canvas dimensions state for resize handles
    setCanvasDimensions({ width: canvas.width, height: canvas.height });
    setDisplayedDimensions({ width: canvas.width, height: canvas.height });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          // Downscale large images to prevent performance issues
          if (img.width > MAX_PROCESS_SIZE || img.height > MAX_PROCESS_SIZE) {
            const scale = Math.min(MAX_PROCESS_SIZE / img.width, MAX_PROCESS_SIZE / img.height);
            const scaledCanvas = document.createElement('canvas');
            scaledCanvas.width = img.width * scale;
            scaledCanvas.height = img.height * scale;
            const ctx = scaledCanvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(img, 0, 0, scaledCanvas.width, scaledCanvas.height);
              const scaledImg = new Image();
              scaledImg.onload = () => {
                setImage(scaledImg);
                setIsDefaultImage(false);
              };
              scaledImg.src = scaledCanvas.toDataURL();
            }
          } else {
            setImage(img);
            setIsDefaultImage(false);
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          // Downscale large images to prevent performance issues
          if (img.width > MAX_PROCESS_SIZE || img.height > MAX_PROCESS_SIZE) {
            const scale = Math.min(MAX_PROCESS_SIZE / img.width, MAX_PROCESS_SIZE / img.height);
            const scaledCanvas = document.createElement('canvas');
            scaledCanvas.width = img.width * scale;
            scaledCanvas.height = img.height * scale;
            const ctx = scaledCanvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(img, 0, 0, scaledCanvas.width, scaledCanvas.height);
              const scaledImg = new Image();
              scaledImg.onload = () => {
                setImage(scaledImg);
                setIsDefaultImage(false);
              };
              scaledImg.src = scaledCanvas.toDataURL();
            }
          } else {
            setImage(img);
            setIsDefaultImage(false);
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'halftone-image.png';
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  const handleDownloadSVG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">`;
    
    if (!transparentBg) {
      svgContent += `<rect width="${canvas.width}" height="${canvas.height}" fill="${bgColor}"/>`;
    }
    
    svgContent += `<g transform="translate(${canvas.width / 2}, ${canvas.height / 2}) rotate(${angle}) matrix(1, ${skewY}, ${skewX}, 1, 0, 0) translate(${-canvas.width / 2}, ${-canvas.height / 2})">`;

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx || !image) return;

    let canvasWidth, canvasHeight, cropX, cropY, cropWidth, cropHeight;
    
    if (isDefaultImage) {
      const size = Math.min(image.width, image.height);
      canvasWidth = size;
      canvasHeight = size;
      cropX = (image.width - size) / 2;
      cropY = (image.height - size) / 2;
      cropWidth = size;
      cropHeight = size;
    } else {
      canvasWidth = image.width;
      canvasHeight = image.height;
      cropX = 0;
      cropY = 0;
      cropWidth = image.width;
      cropHeight = image.height;
    }

    tempCanvas.width = canvasWidth;
    tempCanvas.height = canvasHeight;
    tempCtx.filter = `contrast(${contrast}) brightness(${1 + brightness})`;
    tempCtx.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, canvasWidth, canvasHeight);

    const imageData = tempCtx.getImageData(0, 0, canvasWidth, canvasHeight);
    const data = imageData.data;

    if (method === 'halftone') {
      for (let y = 0; y < canvasHeight; y += spacing) {
        for (let x = 0; x < canvasWidth; x += spacing) {
          const index = (Math.floor(y) * canvasWidth + Math.floor(x)) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const gray = (r + g + b) / 3;
          const normalizedGray = gray / 255;
          const size = normalizedGray * dotSize;
          
          if (size > 0.2) {
            if (shape === 'circle') {
              const radius = size / 2;
              svgContent += `<circle cx="${x}" cy="${y}" r="${radius}" fill="${dotColor}"/>`;
            } else {
              const halfSize = size / 2;
              svgContent += `<rect x="${x - halfSize}" y="${y - halfSize}" width="${size}" height="${size}" fill="${dotColor}"/>`;
            }
          }
        }
      }
    } else {
      const grayData = new Float32Array(canvasWidth * canvasHeight);
      for (let i = 0; i < data.length; i += 4) {
        const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
        grayData[i / 4] = gray;
      }

      const bayerMatrix = [
        [ 0, 32,  8, 40,  2, 34, 10, 42],
        [48, 16, 56, 24, 50, 18, 58, 26],
        [12, 44,  4, 36, 14, 46,  6, 38],
        [60, 28, 52, 20, 62, 30, 54, 22],
        [ 3, 35, 11, 43,  1, 33,  9, 41],
        [51, 19, 59, 27, 49, 17, 57, 25],
        [15, 47,  7, 39, 13, 45,  5, 37],
        [63, 31, 55, 23, 61, 29, 53, 21]
      ];
      
      for (let y = 0; y < canvasHeight; y++) {
        for (let x = 0; x < canvasWidth; x++) {
          const idx = y * canvasWidth + x;
          const oldPixel = grayData[idx];
          const threshold = (bayerMatrix[y % 8][x % 8] / 64) * 255;
          grayData[idx] = oldPixel > threshold ? 255 : 0;
        }
      }

      for (let y = 0; y < canvasHeight; y += spacing) {
        for (let x = 0; x < canvasWidth; x += spacing) {
          const idx = Math.floor(y) * canvasWidth + Math.floor(x);
          const pixel = grayData[idx];
          
          if (pixel > 128) {
            if (shape === 'circle') {
              const radius = dotSize / 2;
              svgContent += `<circle cx="${x}" cy="${y}" r="${radius}" fill="${dotColor}"/>`;
            } else {
              const halfSize = dotSize / 2;
              svgContent += `<rect x="${x - halfSize}" y="${y - halfSize}" width="${dotSize}" height="${dotSize}" fill="${dotColor}"/>`;
            }
          }
        }
      }
    }

    svgContent += '</g></svg>';

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'halftone-image.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetSettings = () => {
    setDotSize(2);
    setSpacing(3);
    setContrast(1.2);
    setBrightness(0);
    setAngle(0);
    setShape('circle');
    setDotColor('#ffffff');
    setBgColor('#0a0a0a');
    setTransparentBg(false);
    setMethod('halftone');
    setSkewX(0);
    setSkewY(0);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="border-b border-white/[0.08] px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <BayerLogo />
            
            <div className="hidden md:flex gap-2">
              <button
                onClick={handleDownload}
                className="px-4 py-2 border border-white/[0.08] hover:bg-white/[0.03] transition-all flex items-center gap-2 text-gray-600 hover:text-gray-400"
              >
                <Download className="w-4 h-4" />
                <span className="translate-y-[1px]">PNG</span>
              </button>
              <button
                onClick={handleDownloadSVG}
                className="px-4 py-2 border border-white/[0.08] hover:bg-white/[0.03] transition-all flex items-center gap-2 text-gray-600 hover:text-gray-400"
              >
                <Download className="w-4 h-4" />
                <span className="translate-y-[1px]">SVG</span>
              </button>
            </div>

            {/* Mobile download buttons */}
            <div className="flex md:hidden gap-2">
              <button
                onClick={handleDownload}
                className="px-3 py-2 border border-white/[0.08] hover:bg-white/[0.03] transition-all flex items-center gap-1.5 text-gray-600 hover:text-gray-400"
              >
                <Download className="w-4 h-4" />
                <span className="text-xs translate-y-[1px]">PNG</span>
              </button>
              <button
                onClick={handleDownloadSVG}
                className="px-3 py-2 border border-white/[0.08] hover:bg-white/[0.03] transition-all flex items-center gap-1.5 text-gray-600 hover:text-gray-400"
              >
                <Download className="w-4 h-4" />
                <span className="text-xs translate-y-[1px]">SVG</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Canvas Area */}
          <div className={`flex-1 flex items-center justify-center md:p-6 md:min-h-[calc(100vh-73px)] relative transition-all ${
            mobileSheetOpen 
              ? 'min-h-0 pt-4 pb-2' 
              : 'min-h-[calc(100vh-73px-59px)] justify-center'
          }`}>
            <div 
              ref={canvasContainerRef}
              className="relative max-w-[calc(100vw-2rem)] md:max-w-none"
            >
              <canvas
                ref={canvasRef}
                className="block shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08)] max-w-full h-auto md:max-w-none"
                style={{
                  imageRendering: 'pixelated'
                }}
              />
              
              {/* Resize Handles - both desktop and mobile */}
              {displayedDimensions && (
                <div>
                  {/* Top-left corner */}
                  <div 
                    className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid size-[12px] cursor-nw-resize hover:bg-[rgba(255,255,255,0.4)] transition-colors"
                    style={{
                      left: '-6px',
                      top: '-6px'
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setIsResizing(true);
                      setResizeCorner('nw');
                      setResizeStart({ x: e.clientX, y: e.clientY, size: canvasSize });
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      setIsResizing(true);
                      setResizeCorner('nw');
                      setResizeStart({ x: e.touches[0].clientX, y: e.touches[0].clientY, size: canvasSize });
                    }}
                  />
                  {/* Top-right corner */}
                  <div 
                    className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid size-[12px] cursor-ne-resize hover:bg-[rgba(255,255,255,0.4)] transition-colors"
                    style={{
                      left: `${displayedDimensions.width - 6}px`,
                      top: '-6px'
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setIsResizing(true);
                      setResizeCorner('ne');
                      setResizeStart({ x: e.clientX, y: e.clientY, size: canvasSize });
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      setIsResizing(true);
                      setResizeCorner('ne');
                      setResizeStart({ x: e.touches[0].clientX, y: e.touches[0].clientY, size: canvasSize });
                    }}
                  />
                  {/* Bottom-left corner */}
                  <div 
                    className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid size-[12px] cursor-sw-resize hover:bg-[rgba(255,255,255,0.4)] transition-colors"
                    style={{
                      left: '-6px',
                      top: `${displayedDimensions.height - 6}px`
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setIsResizing(true);
                      setResizeCorner('sw');
                      setResizeStart({ x: e.clientX, y: e.clientY, size: canvasSize });
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      setIsResizing(true);
                      setResizeCorner('sw');
                      setResizeStart({ x: e.touches[0].clientX, y: e.touches[0].clientY, size: canvasSize });
                    }}
                  />
                  {/* Bottom-right corner */}
                  <div 
                    className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid size-[12px] cursor-se-resize hover:bg-[rgba(255,255,255,0.4)] transition-colors"
                    style={{
                      left: `${displayedDimensions.width - 6}px`,
                      top: `${displayedDimensions.height - 6}px`
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setIsResizing(true);
                      setResizeCorner('se');
                      setResizeStart({ x: e.clientX, y: e.clientY, size: canvasSize });
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      setIsResizing(true);
                      setResizeCorner('se');
                      setResizeStart({ x: e.touches[0].clientX, y: e.touches[0].clientY, size: canvasSize });
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Desktop Controls Panel */}
          <div className="hidden md:block w-[320px] border-l border-white/[0.08] bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.05),_rgba(255,255,255,0.05)),_#0a0a0a] overflow-y-auto" style={{ maxHeight: 'calc(100vh - 73px)' }}>
            <div className="p-6 space-y-6">
              {/* Upload Section */}
              <div>
                <h3 className="text-gray-600 mb-3 uppercase tracking-wider">Upload</h3>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative w-full border border-dashed px-4 py-8 text-center transition-all cursor-pointer group ${
                    isDragging
                      ? 'border-gray-500 bg-white/[0.02]'
                      : 'border-white/[0.08] hover:border-white/[0.12] hover:bg-white/[0.02]'
                  }`}
                >
                  <Upload className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-600">
                    {isDragging ? 'Drop image here' : 'Click or drag to upload'}
                  </p>
                </button>
              </div>

              {/* Controls Header with Reset */}
              <div className="flex items-center justify-between">
                <h3 className="text-gray-600 uppercase tracking-wider">Parameters</h3>
                <button
                  onClick={resetSettings}
                  className="text-xs text-gray-600 hover:text-gray-400 transition-colors flex items-center gap-1.5 px-2 py-1 border border-white/[0.08] hover:bg-white/[0.03]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>

              {/* Method Selector */}
              <div>
                <label className="text-gray-600 mb-3 block">Processing Method</label>
                <div className="grid grid-cols-3 border border-white/[0.08] p-0.5 gap-0.5">
                  <button
                    onClick={() => setMethod('halftone')}
                    className={`py-2 transition-all ${
                      method === 'halftone'
                        ? 'bg-white/[0.05] text-gray-300'
                        : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    <span className="inline-block translate-y-[2px]">Halftone</span>
                  </button>
                  <button
                    onClick={() => setMethod('ordered')}
                    className={`py-2 transition-all ${
                      method === 'ordered'
                        ? 'bg-white/[0.05] text-gray-300'
                        : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    <span className="inline-block translate-y-[2px]">Ordered</span>
                  </button>
                  <button
                    onClick={() => setMethod('ascii')}
                    className={`py-2 transition-all ${
                      method === 'ascii'
                        ? 'bg-white/[0.05] text-gray-300'
                        : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    <span className="inline-block translate-y-[2px]">ASCII</span>
                  </button>
                </div>
              </div>

              {/* Shape Selector - hidden for ASCII mode */}
              {method !== 'ascii' && (
                <div>
                  <label className="text-gray-600 mb-3 block">Dot Shape</label>
                  <div className="flex border border-white/[0.08] p-0.5 gap-0.5">
                    <button
                      onClick={() => setShape('circle')}
                      className={`flex-1 py-2 transition-all ${
                        shape === 'circle'
                          ? 'bg-white/[0.05] text-gray-300'
                          : 'text-gray-600 hover:text-gray-400'
                      }`}
                    >
                      <span className="inline-block translate-y-[2px]">Circle</span>
                    </button>
                    <button
                      onClick={() => setShape('square')}
                      className={`flex-1 py-2 transition-all ${
                        shape === 'square'
                          ? 'bg-white/[0.05] text-gray-300'
                          : 'text-gray-600 hover:text-gray-400'
                      }`}
                    >
                      <span className="inline-block translate-y-[2px]">Square</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Color Pickers - hidden for CMYK mode */}
              {method !== 'lichtenstein' && (
                <div className="grid grid-cols-2 gap-3">
                  <ColorPicker
                    label="Dot Color"
                    value={dotColor}
                    onChange={setDotColor}
                  />
                  <ColorPicker
                    label="BG Color"
                    value={bgColor}
                    onChange={setBgColor}
                    disabled={transparentBg}
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <label className="text-gray-600 cursor-pointer" htmlFor="transparent-bg">
                  Transparent BG
                </label>
                <label className="relative inline-block w-9 h-5 cursor-pointer">
                  <input
                    type="checkbox"
                    id="transparent-bg"
                    checked={transparentBg}
                    onChange={(e) => setTransparentBg(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-white/[0.08] border border-white/[0.08] peer-checked:bg-white/[0.15] transition-all">
                    <div className={`absolute top-0.5 w-4 h-4 bg-gray-500 border border-white/[0.08] transition-all pointer-events-none ${
                      transparentBg ? 'left-[18px]' : 'left-0.5'
                    }`} />
                  </div>
                </label>
              </div>

              <CustomSlider
                label="Dot Size"
                value={dotSize}
                min={1}
                max={20}
                step={0.5}
                onChange={setDotSize}
              />

              <div>
                <CustomSlider
                  label="Spacing"
                  value={spacing}
                  min={2}
                  max={12}
                  step={1}
                  onChange={setSpacing}
                />
                {method === 'ordered' && (
                  <p className="text-xs text-gray-700 mt-1.5">
                    Note: Spacing has minimal effect in Ordered mode
                  </p>
                )}
              </div>

              <CustomSlider
                label="Contrast"
                value={contrast}
                min={0.5}
                max={3}
                step={0.1}
                onChange={setContrast}
              />

              <CustomSlider
                label="Brightness"
                value={brightness}
                min={-0.5}
                max={0.5}
                step={0.1}
                onChange={setBrightness}
              />

              <CustomSlider
                label="Rotation"
                value={angle}
                min={0}
                max={360}
                step={15}
                onChange={setAngle}
              />

              <CustomSlider
                label="Skew X"
                value={skewX}
                min={-0.5}
                max={0.5}
                step={0.05}
                onChange={setSkewX}
              />

              <CustomSlider
                label="Skew Y"
                value={skewY}
                min={-0.5}
                max={0.5}
                step={0.05}
                onChange={setSkewY}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Controls */}
      <MobileControls
        mobileTab={mobileTab}
        mobileSheetOpen={mobileSheetOpen}
        isDragging={isDragging}
        method={method}
        shape={shape}
        dotColor={dotColor}
        bgColor={bgColor}
        transparentBg={transparentBg}
        dotSize={dotSize}
        spacing={spacing}
        contrast={contrast}
        brightness={brightness}
        angle={angle}
        skewX={skewX}
        skewY={skewY}
        onTabChange={setMobileTab}
        onSheetToggle={() => setMobileSheetOpen(!mobileSheetOpen)}
        onFileInputClick={() => fileInputRef.current?.click()}
        onMethodChange={setMethod}
        onShapeChange={setShape}
        onDotColorChange={setDotColor}
        onBgColorChange={setBgColor}
        onTransparentBgChange={setTransparentBg}
        onDotSizeChange={setDotSize}
        onSpacingChange={setSpacing}
        onContrastChange={setContrast}
        onBrightnessChange={setBrightness}
        onAngleChange={setAngle}
        onSkewXChange={setSkewX}
        onSkewYChange={setSkewY}
        onResetSettings={resetSettings}
      />
    </div>
  );
}