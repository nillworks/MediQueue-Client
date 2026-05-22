const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-14 max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && <span className="section-eyebrow block mb-3">{eyebrow}</span>}
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className={`section-desc ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
