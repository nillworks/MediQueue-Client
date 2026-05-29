import Link from 'next/link';

const BrandLogo = ({
  size = 'md',
  showLink = true,
  className = '',
  variant = 'default',
}) => {
  const sizes = {
    sm: { icon: 'h-4 w-2.5', tall: 'h-5 w-3', text: 'text-[18px]' },
    md: { icon: 'h-5 w-3', tall: 'h-7 w-4', text: 'text-[20px]' },
    lg: { icon: 'h-6 w-3.5', tall: 'h-8 w-5', text: 'text-2xl' },
  };
  const s = sizes[size] || sizes.md;
  const isLight = variant === 'light';

  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-end gap-[3px]">
        <div
          className={`${s.icon} rounded ${
            isLight ? 'bg-white/35' : 'bg-[#b0e4dd] dark:bg-[#007f6d]'
          }`}
        />
        <div
          className={`flex ${s.tall} items-center justify-center rounded bg-[#00a991]`}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
      <h2
        className={`${s.text} font-bold transition-colors duration-300 ${
          isLight ? 'text-white' : 'text-[#003b33] dark:text-[#e6f6f4]'
        }`}
      >
        ZenoTutor
      </h2>
    </div>
  );

  if (showLink) {
    return (
      <Link href="/" className="flex items-center shrink-0">
        {content}
      </Link>
    );
  }

  return content;
};

export default BrandLogo;
