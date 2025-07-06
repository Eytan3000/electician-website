'use client';
import Image from 'next/image';
import './Hero.css';
import { useEffect, useState } from 'react';
import { smallLowerImg, smallUpperImg } from '@/utils/constants';

export default function SmallImages() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 700);
  }, []);

  const smallImageSize = isMobile ? 150 : 240;

  return (
    <div className="hero-small-images">
      <Image
        className="hero-small-image-1"
        src={smallUpperImg}
        alt="עבודת חשמל"
        width={smallImageSize}
        height={smallImageSize}
        priority={true}
      />

      <Image
        className="hero-small-image-2"
        src={smallLowerImg}
        alt="בדיקת לוח חשמל"
        width={smallImageSize}
        height={smallImageSize}
        priority={true}
      />
    </div>
  );
}
