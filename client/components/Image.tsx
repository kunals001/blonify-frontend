
import { Image as IKImage } from '@imagekit/next';
import React from 'react';

interface ImageKitProps {
  src: string;
  className?: string;
  w: number;
  h: number;
  alt: string;
}

const ImageKit: React.FC<ImageKitProps> = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      src={src}
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
      className={className}
      loading="lazy"
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default ImageKit;
