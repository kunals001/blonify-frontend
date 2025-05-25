import Image, { ImageLoaderProps } from 'next/image';
import React from 'react';

interface MyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  blurDataURL?: string;
  className?: string; // Optional: for blur placeholder
}

// Custom loader for ImageKit
const imageKitLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
  return `${urlEndpoint}/${src}?tr=w-${width},q-${quality || 75},f-webp`;
};

const MyImage: React.FC<MyImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  blurDataURL,
  className,
}) => {
  return (
    <Image
      loader={imageKitLoader}
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
    />
  );
};

export default MyImage;
