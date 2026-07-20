interface ThemePortraitProps {
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export default function ThemePortrait({
  width,
  height,
  priority = false,
  className = '',
}: ThemePortraitProps) {
  return (
    <span className={`theme-portrait ${className}`}>
      {/* biome-ignore lint/performance/noImgElement: Using native img to avoid next/image runtime overhead for static export */}
      <img
        src="/images/me.jpg"
        alt="Sera Uysal"
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ objectFit: 'cover', borderRadius: '50%' }}
      />
    </span>
  );
}
