import { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  disabled?: boolean;
}

export function ColorPicker({ label, value, onChange, disabled = false }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [placementSide, setPlacementSide] = useState<'above' | 'below'>('below');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // Reusable position calculation that respects cached placement side
  const updatePosition = useCallback((side: 'above' | 'below') => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverWidth = 226; // 200px picker + 2*12px padding + 2px border
    const popoverHeight = 220; // Approximate height with input
    const offset = 8;
    const viewportWidth = window.innerWidth;

    // Convert viewport-relative to page-relative (absolute positioning)
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Use cached side to compute vertical position
    let top: number;
    if (side === 'below') {
      top = triggerRect.bottom + scrollY + offset;
    } else {
      top = triggerRect.top + scrollY - popoverHeight - offset;
    }

    // Compute horizontal position with nudging
    let left = triggerRect.left + scrollX;
    if (triggerRect.left + popoverWidth > viewportWidth) {
      left = viewportWidth + scrollX - popoverWidth - 8;
    }
    if (triggerRect.left < 8) {
      left = scrollX + 8;
    }

    setPosition({ top, left });
  }, []);

  // Determine placement side once on open
  const determinePlacementSide = useCallback(() => {
    if (!triggerRef.current) return 'below';

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverHeight = 220;
    const offset = 8;
    const viewportHeight = window.innerHeight;

    // Check if there's room below; if not, place above
    if (triggerRect.bottom + offset + popoverHeight > viewportHeight) {
      return 'above';
    }
    return 'below';
  }, []);

  // Calculate position and side when opening
  useLayoutEffect(() => {
    if (isOpen) {
      const side = determinePlacementSide();
      setPlacementSide(side);
      updatePosition(side);
    }
  }, [isOpen, determinePlacementSide, updatePosition]);

  // Listen to scroll/resize events and observe trigger size changes
  useEffect(() => {
    if (!isOpen) return;

    // Scroll handler: update position using cached side
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => updatePosition(placementSide));
    };

    // Resize handler: re-evaluate side and update position
    const handleResize = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        const newSide = determinePlacementSide();
        setPlacementSide(newSide);
        updatePosition(newSide);
      });
    };

    // Find nearest scrollable ancestor (editor panel)
    let scrollableAncestor: HTMLElement | null = null;
    if (triggerRef.current) {
      scrollableAncestor = triggerRef.current.closest('.overflow-y-auto') as HTMLElement;
      if (!scrollableAncestor) {
        // Fallback: find any ancestor with overflow
        let el = triggerRef.current.parentElement;
        while (el) {
          const overflow = window.getComputedStyle(el).overflowY;
          if (overflow === 'auto' || overflow === 'scroll') {
            scrollableAncestor = el;
            break;
          }
          el = el.parentElement;
        }
      }
    }

    // Attach listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    if (scrollableAncestor) {
      scrollableAncestor.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Observe trigger size changes
    const resizeObserver = new ResizeObserver(handleScroll);
    if (triggerRef.current) {
      resizeObserver.observe(triggerRef.current);
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (scrollableAncestor) {
        scrollableAncestor.removeEventListener('scroll', handleScroll);
      }
      resizeObserver.disconnect();
    };
  }, [isOpen, placementSide, updatePosition, determinePlacementSide]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current && 
        !pickerRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const popoverContent = isOpen && !disabled && (
    <div 
      ref={pickerRef}
      className="p-3 border border-white/[0.08]"
      style={{ 
        backgroundColor: '#222222',
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 9999
      }}
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
  );

  return (
    <div className="relative">
      <label className="text-gray-600 mb-2 block">{label}</label>
      <button
        ref={triggerRef}
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

      {popoverContent && createPortal(popoverContent, document.body)}
    </div>
  );
}