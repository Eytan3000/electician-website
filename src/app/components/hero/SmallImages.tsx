'use client';
import Image from 'next/image';
import './Hero.css';
import { smallLowerImg, smallUpperImg } from '@/utils/constants';

export default function SmallImages() {
  const smallImageSize = 300;

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
