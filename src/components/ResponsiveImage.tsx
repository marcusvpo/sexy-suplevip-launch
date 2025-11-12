
import React from 'react';

interface ResponsiveImageProps {
  small: string;
  medium: string;
  large: string;
  alt: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ small, medium, large, alt, className }) => {
  return (
    <picture>
      <source srcSet={small} media="(max-width: 640px)" />
      <source srcSet={medium} media="(max-width: 1024px)" />
      <source srcSet={large} media="(min-width: 1025px)" />
      <img src={large} alt={alt} className={className} />
    </picture>
  );
};

export default ResponsiveImage;
