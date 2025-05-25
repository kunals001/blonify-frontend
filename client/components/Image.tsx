import { Image as IKImage } from '@imagekit/next';
import React from 'react';

interface ImageKitProps {
  src: string;
  className?: string;
  w: number;
  h: number;
  alt: string;
  loading?: 'eager' | 'lazy';
}

const ImageKit: React.FC<ImageKitProps> = ({
  src,
  className,
  w,
  h,
  alt,
  loading = 'lazy', // 👈 default value yahan set ki gayi hai
}) => {
  return (
    <IKImage
      src={src}
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
      className={className}
      loading={loading}
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
