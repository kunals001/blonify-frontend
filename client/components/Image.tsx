import { Image as IKImage } from '@imagekit/next';
import React from 'react';

interface ImageKitProps {
  src: string;
  className?: string;
  w: number;
  h: number;
  alt: string;
  priority?: boolean; 
}

const ImageKit: React.FC<ImageKitProps> = ({ src, className, w, h, alt, priority }) => {
  return (
    <IKImage
      src={src}
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
      className={className}
      loading={priority ? 'eager' : 'lazy'} 
      priority={priority} 
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
          format: 'webp',
          quality: 70,
        },
      ]}
    />
  );
};

export default ImageKit;
