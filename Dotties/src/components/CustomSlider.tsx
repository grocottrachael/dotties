import { useRef, useState, useEffect } from 'react';

interface CustomSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export function CustomSlider({ label, value, min, max, step, onChange, disabled = false }: CustomSliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [inputValue, setInputValue] = useState(value.toString());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    updateValue(clientX);
  };

  const updateValue = (clientX: number) => {
    if (!containerRef.current || disabled) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const newValue = min + percentage * (max - min);
    const steppedValue = Math.round(newValue / step) * step;
    onChange(Math.max(min, Math.min(max, steppedValue)));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleInputBlur = () => {
    const numValue = parseFloat(inputValue);
    if (!isNaN(numValue)) {
      const clampedValue = Math.max(min, Math.min(max, numValue));
      const steppedValue = Math.round(clampedValue / step) * step;
      onChange(steppedValue);
    } else {
      setInputValue(value.toString());
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging) {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        updateValue(clientX);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div className={`space-y-3 ${disabled ? 'opacity-40 pointer-events-none' : ''}`}>
      <div className="flex items-center justify-between">
        <label className="text-sm text-gray-600">{label}</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          disabled={disabled}
          className="w-20 md:w-16 px-3 py-2 md:py-1.5 bg-white/[0.03] border border-white/[0.08] text-gray-400 text-xs text-right focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.12] transition-all disabled:cursor-not-allowed"
        />
      </div>
      <div
        ref={containerRef}
        className={`relative h-10 md:h-1 flex items-center select-none ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Track Background */}
        <div className="absolute left-0 right-0 h-1 bg-white/[0.08]" />
        
        {/* Filled Track */}
        <div
          className="absolute left-0 h-1 bg-white/[0.15] transition-all pointer-events-none"
          style={{ width: `${percentage}%` }}
        />
        
        {/* Thumb - larger on mobile (40px), smaller on desktop (12px) */}
        <div
          className={`absolute w-10 h-10 md:w-3 md:h-3 flex items-center justify-center ${disabled ? 'cursor-not-allowed' : 'cursor-grab active:cursor-grabbing'}`}
          style={{ 
            left: `${percentage}%`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="w-4 h-4 md:w-3 md:h-3 bg-gray-500 border border-white/[0.08]" />
        </div>
      </div>
    </div>
  );
}