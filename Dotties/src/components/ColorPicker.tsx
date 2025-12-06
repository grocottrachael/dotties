import { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  disabled?: boolean;
}

export function ColorPicker({ label, value, onChange, disabled = false }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={pickerRef}>
      <label className="text-gray-600 mb-2 block">{label}</label>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-3 md:py-2.5 bg-white/[0.03] border border-white/[0.08] transition-all w-full ${
          disabled 
            ? 'opacity-40 cursor-not-allowed' 
            : 'cursor-pointer hover:bg-white/[0.05]'
        }`}
        type="button"
      >
        <div
          className="w-7 h-7 md:w-6 md:h-6 border border-white/[0.08]"
          style={{ 
            backgroundColor: disabled ? 'transparent' : value,
            backgroundImage: disabled 
              ? 'linear-gradient(45deg, #1a1a1a 25%, transparent 25%), linear-gradient(-45deg, #1a1a1a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1a1a1a 75%), linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)'
              : 'none',
            backgroundSize: disabled ? '8px 8px' : 'auto',
            backgroundPosition: disabled ? '0 0, 0 4px, 4px -4px, -4px 0px' : '0 0'
          }}
        />
        <span className="text-xs text-gray-600 font-mono uppercase translate-y-[1px]">
          {disabled ? 'None' : value}
        </span>
      </button>

      {isOpen && !disabled && (
        <div 
          className="absolute z-50 mt-2 p-3 border border-white/[0.08]"
          style={{ backgroundColor: '#222222' }}
        >
          <style>{`
            .react-colorful {
              width: 200px;
              height: 150px;
            }
            .react-colorful__saturation {
              border-radius: 0;
              border-bottom: none;
            }
            .react-colorful__hue {
              height: 12px;
              border-radius: 0;
              margin-top: 8px;
            }
            .react-colorful__pointer {
              width: 16px;
              height: 16px;
              border-radius: 0;
              border: 2px solid rgba(255, 255, 255, 0.8);
            }
            .react-colorful__saturation-pointer {
              width: 16px;
              height: 16px;
            }
          `}</style>
          <HexColorPicker color={value} onChange={onChange} />
          <input
            type="text"
            value={value}
            onChange={(e) => {
              const color = e.target.value;
              if (/^#[0-9A-F]{6}$/i.test(color)) {
                onChange(color);
              }
            }}
            className="w-full mt-3 px-2 py-1.5 bg-white/[0.05] border border-white/[0.08] text-gray-300 text-xs font-mono uppercase text-center focus:outline-none focus:border-white/[0.15]"
            placeholder="#000000"
          />
        </div>
      )}
    </div>
  );
}