export function BayerLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="relative w-9 h-9 border border-white/[0.08] bg-white/[0.03]">
        {/* Corner dots */}
        <div className="absolute -left-[1px] -top-[1px] w-1 h-1 bg-white/[0.2]" />
        <div className="absolute -right-[1px] -top-[1px] w-1 h-1 bg-white/[0.2]" />
        <div className="absolute -left-[1px] -bottom-[1px] w-1 h-1 bg-white/[0.2]" />
        <div className="absolute -right-[1px] -bottom-[1px] w-1 h-1 bg-white/[0.2]" />
        
        {/* Bayer pattern icon */}
        <div className="absolute inset-[5.81%] flex items-center justify-center">
          <div className="rotate-45 w-[12.5px] h-[12.5px]">
            <svg className="w-full h-full" viewBox="0 0 13 13" fill="none">
              <rect x="0" y="0" width="3" height="3" fill="#6B7280" />
              <rect x="5" y="0" width="3" height="3" fill="#6B7280" />
              <rect x="10" y="0" width="3" height="3" fill="#6B7280" />
              
              <rect x="0" y="5" width="3" height="3" fill="#6B7280" />
              <rect x="5" y="5" width="3" height="3" fill="#6B7280" />
              <rect x="10" y="5" width="3" height="3" fill="#6B7280" />
              
              <rect x="0" y="10" width="3" height="3" fill="#6B7280" />
              <rect x="5" y="10" width="3" height="3" fill="#6B7280" />
              <rect x="10" y="10" width="3" height="3" fill="#6B7280" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Dotties Text */}
      <h1 className="text-gray-400" style={{ fontFamily: 'Jersey 20, sans-serif', fontSize: '24px', lineHeight: '36px', letterSpacing: '0.0703px' }}>
        Dotties
      </h1>
    </div>
  );
}
