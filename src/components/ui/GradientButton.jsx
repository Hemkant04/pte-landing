'use client';

const GradientButton = ({
  children,
  width = '200px',
  height = '50px',
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
          minWidth: width,
          height: height,
        }}
        onClick={disabled ? undefined : onClick}
        onKeyDown={handleKeyDown}
        aria-disabled={disabled}
        {...props}
      >
        <span className="relative z-10 text-white flex items-center justify-center font-semibold text-sm px-6">
          {children}
        </span>
      </div>
    </div>
  );
};

export default GradientButton;
