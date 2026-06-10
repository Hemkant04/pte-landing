'use client';

const sizeVariants = {
  sm: { width: '120px', height: '36px', text: 'text-xs' },
  md: { width: '160px', height: '44px', text: 'text-sm' },
  lg: { width: '200px', height: '52px', text: 'text-base' },
  xl: { width: '240px', height: '56px', text: 'text-lg' },
  full: { width: '100%', height: '52px', text: 'text-base' },
};

const GradientButton = ({
  children,
  size = 'lg',
  width,
  height,
  className = '',
  onClick,
  disabled = false,
  ...props
}) => {
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  const sizeConfig = sizeVariants[size] || sizeVariants.lg;
  const finalWidth = width || sizeConfig.width;
  const finalHeight = height || sizeConfig.height;
  const textSize = sizeConfig.text;

  return (
    <div className="text-[#eee] text-center inline-block">
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        className={`
          relative rounded-[50px] cursor-pointer
          after:content-[''] after:block after:absolute after:bg-zinc-950
          after:inset-[2px] after:rounded-[48px] after:z-[1]
          flex items-center justify-center
          rotating-gradient
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
        style={{
          minWidth: finalWidth,
          height: finalHeight,
        }}
        onClick={disabled ? undefined : onClick}
        onKeyDown={handleKeyDown}
        aria-disabled={disabled}
        {...props}
      >
        <span className={`relative z-10 text-white flex items-center justify-center font-semibold ${textSize} px-6`}>
          {children}
        </span>
      </div>
    </div>
  );
};

export default GradientButton;
