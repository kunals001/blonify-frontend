

import localFont from 'next/font/local';

export const Poppins = localFont({
  src: '../public/fonts/Poppins-Medium.woff2',
  variable: '--font-prime',
  display: 'swap',
});

export const Poppins2 = localFont({
  src: '../public/fonts/Poppins-Light.woff2',
  variable: '--font-second',
  display: 'swap',
});
