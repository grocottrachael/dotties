import { Upload, RotateCcw, X } from 'lucide-react';
import { CustomSlider } from './CustomSlider';
import { ColorPicker } from './ColorPicker';

interface MobileControlsProps {
  mobileTab: 'upload' | 'edit';
  mobileSheetOpen: boolean;
  isDragging: boolean;
  method: 'halftone' | 'ordered' | 'ascii';
  shape: 'circle' | 'square';
  dotColor: string;
  bgColor: string;
  transparentBg: boolean;
  dotSize: number;
  spacing: number;
  contrast: number;
  brightness: number;
  angle: number;
  skewX: number;
  skewY: number;
  onTabChange: (tab: 'upload' | 'edit') => void;
  onSheetToggle: () => void;
  onFileInputClick: () => void;
  onMethodChange: (method: 'halftone' | 'ordered' | 'ascii') => void;
  onShapeChange: (shape: 'circle' | 'square') => void;
  onDotColorChange: (color: string) => void;
  onBgColorChange: (color: string) => void;
  onTransparentBgChange: (checked: boolean) => void;
  onDotSizeChange: (value: number) => void;
  onSpacingChange: (value: number) => void;
  onContrastChange: (value: number) => void;
  onBrightnessChange: (value: number) => void;
  onAngleChange: (value: number) => void;
  onSkewXChange: (value: number) => void;
  onSkewYChange: (value: number) => void;
  onResetSettings: () => void;
}

export function MobileControls({
  mobileTab,
  mobileSheetOpen,
  isDragging,
  method,
  shape,
  dotColor,
  bgColor,
  transparentBg,
  dotSize,
  spacing,
  contrast,
  brightness,
  angle,
  skewX,
  skewY,
  onTabChange,
  onSheetToggle,
  onFileInputClick,
  onMethodChange,
  onShapeChange,
  onDotColorChange,
  onBgColorChange,
  onTransparentBgChange,
  onDotSizeChange,
  onSpacingChange,
  onContrastChange,
  onBrightnessChange,
  onAngleChange,
  onSkewXChange,
  onSkewYChange,
  onResetSettings,
}: MobileControlsProps) {
  return (
    <>
      {/* Bottom Sheet - Slides up from bottom */}
      <div 
        className={`md:hidden fixed left-0 right-0 border-t border-white/[0.08] z-40 transition-transform duration-300 ease-out ${
          mobileSheetOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          bottom: '0', // Extend all the way to bottom
          paddingBottom: '64px', // Account for tab bar height (h-16 = 64px)
          maxHeight: 'calc(100vh - 14rem)',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #0a0a0a'
        }}
      >
        {/* Drag Handle */}
        <div 
          className="px-4 py-4 flex justify-between items-center"
        >
          <h3 className="text-gray-600 uppercase tracking-wider">
            {mobileTab === 'upload' ? 'Upload' : 'Edit'}
          </h3>
          <button
            onClick={onSheetToggle}
            className="p-2 text-gray-600 hover:text-gray-400 transition-colors hover:bg-white/[0.03] -mr-2"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Upload Tab Content */}
        {mobileTab === 'upload' && (
          <div className="p-4 pb-6">
            <button
              className={`relative w-full border border-dashed px-4 py-8 text-center transition-all cursor-pointer group ${
                isDragging
                  ? 'border-gray-500 bg-white/[0.02]'
                  : 'border-white/[0.08] hover:border-white/[0.12] hover:bg-white/[0.02]'
              }`}
              onClick={onFileInputClick}
            >
              <Upload className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-600">Tap to upload image</p>
            </button>
          </div>
        )}

        {/* Edit Tab Content */}
        {mobileTab === 'edit' && (
          <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 20rem)' }}>
            {/* Header with Reset */}
            <div className="px-4 pt-4 pb-2 flex items-center justify-between">
              <h3 className="text-gray-600 uppercase tracking-wider">Parameters</h3>
              <button
                onClick={onResetSettings}
                className="text-gray-600 hover:text-gray-400 transition-colors flex items-center gap-2 px-3 py-2 border border-white/[0.08] hover:bg-white/[0.03]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>

            <div className="p-4 pb-6 space-y-5">
              {/* Method Selector */}
              <div>
                <label className="text-gray-600 mb-3 block">Processing Method</label>
                <div className="grid grid-cols-3 border border-white/[0.08] p-0.5 gap-0.5">
                  <button
                    onClick={() => onMethodChange('halftone')}
                    className={`py-3 transition-all ${
                      method === 'halftone'
                        ? 'bg-white/[0.05] text-gray-300'
                        : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    <span className="inline-block translate-y-[2px]">Halftone</span>
                  </button>
                  <button
                    onClick={() => onMethodChange('ordered')}
                    className={`py-3 transition-all ${
                      method === 'ordered'
                        ? 'bg-white/[0.05] text-gray-300'
                        : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    <span className="inline-block translate-y-[2px]">Ordered</span>
                  </button>
                  <button
                    onClick={() => onMethodChange('ascii')}
                    className={`py-3 transition-all ${
                      method === 'ascii'
                        ? 'bg-white/[0.05] text-gray-300'
                        : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    <span className="inline-block translate-y-[2px]\">ASCII</span>
                  </button>
                </div>
              </div>

              {/* Shape Selector - hidden for ASCII mode */}
              {method !== 'ascii' && (
                <div>
                  <label className="text-gray-600 mb-3 block">Dot Shape</label>
                  <div className="flex border border-white/[0.08] p-0.5 gap-0.5">
                    <button
                      onClick={() => onShapeChange('circle')}
                      className={`flex-1 py-3 transition-all ${
                        shape === 'circle'
                          ? 'bg-white/[0.05] text-gray-300'
                          : 'text-gray-600 hover:text-gray-400'
                      }`}
                    >
                      <span className="inline-block translate-y-[2px]">Circle</span>
                    </button>
                    <button
                      onClick={() => onShapeChange('square')}
                      className={`flex-1 py-3 transition-all ${
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
              {method !== 'ascii' && (
                <div className="grid grid-cols-2 gap-3">
                  <ColorPicker
                    label="Dot Color"
                    value={dotColor}
                    onChange={onDotColorChange}
                  />

                  <ColorPicker
                    label="BG Color"
                    value={bgColor}
                    onChange={onBgColorChange}
                    disabled={transparentBg}
                  />
                </div>
              )}

              <div className="flex items-center justify-between py-2">
                <label className="text-gray-600 cursor-pointer" htmlFor="transparent-bg-mobile">
                  Transparent BG
                </label>
                <label className="relative inline-flex items-center cursor-pointer p-2 -mr-2">
                  <input
                    type="checkbox"
                    id="transparent-bg-mobile"
                    checked={transparentBg}
                    onChange={(e) => onTransparentBgChange(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-7 bg-white/[0.08] border border-white/[0.08] peer-checked:bg-white/[0.15] transition-all relative">
                    <div className={`absolute top-0.5 w-6 h-6 bg-gray-500 border border-white/[0.08] transition-all pointer-events-none ${
                      transparentBg ? 'left-[22px]' : 'left-0.5'
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
                onChange={onDotSizeChange}
              />

              <div>
                <CustomSlider
                  label="Spacing"
                  value={spacing}
                  min={2}
                  max={12}
                  step={1}
                  onChange={onSpacingChange}
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
                onChange={onContrastChange}
              />

              <CustomSlider
                label="Brightness"
                value={brightness}
                min={-0.5}
                max={0.5}
                step={0.1}
                onChange={onBrightnessChange}
              />

              <CustomSlider
                label="Rotation"
                value={angle}
                min={0}
                max={360}
                step={15}
                onChange={onAngleChange}
              />

              <CustomSlider
                label="Skew X"
                value={skewX}
                min={-0.5}
                max={0.5}
                step={0.05}
                onChange={onSkewXChange}
              />

              <CustomSlider
                label="Skew Y"
                value={skewY}
                min={-0.5}
                max={0.5}
                step={0.05}
                onChange={onSkewYChange}
              />
            </div>
          </div>
        )}
      </div>

      {/* Fixed Tab Bar at Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/[0.08] z-50 pb-safe">
        <div className="flex h-16">
          <button
            onClick={() => {
              if (mobileTab === 'upload' && mobileSheetOpen) {
                // Clicking the same tab when open → close it
                onSheetToggle();
              } else if (mobileTab !== 'upload') {
                // Clicking a different tab → switch to it (keep sheet open if it was open)
                onTabChange('upload');
                if (!mobileSheetOpen) {
                  onSheetToggle();
                }
              } else {
                // Tab is closed → open it
                onTabChange('upload');
                onSheetToggle();
              }
            }}
            className={`flex-1 transition-all ${
              mobileTab === 'upload' && mobileSheetOpen
                ? 'bg-white/[0.05] text-gray-300'
                : 'text-gray-600'
            }`}
          >
            <span className="inline-block translate-y-[2px]">Upload</span>
          </button>
          <div className="w-px bg-white/[0.08]" />
          <button
            onClick={() => {
              if (mobileTab === 'edit' && mobileSheetOpen) {
                // Clicking the same tab when open → close it
                onSheetToggle();
              } else if (mobileTab !== 'edit') {
                // Clicking a different tab → switch to it (keep sheet open if it was open)
                onTabChange('edit');
                if (!mobileSheetOpen) {
                  onSheetToggle();
                }
              } else {
                // Tab is closed → open it
                onTabChange('edit');
                onSheetToggle();
              }
            }}
            className={`flex-1 transition-all ${
              mobileTab === 'edit' && mobileSheetOpen
                ? 'bg-white/[0.05] text-gray-300'
                : 'text-gray-600'
            }`}
          >
            <span className="inline-block translate-y-[2px]">Edit</span>
          </button>
        </div>
      </div>
    </>
  );
}