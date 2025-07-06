import Image from 'next/image';
import './Hero.css';
import { mainImg } from '@/utils/constants';

export default function MainImage() {
  return (
    <div className="hero-image">
      <Image
        src={mainImg}
        alt="חשמלאי בעבודה"
        width={500}
        height={600}
        priority={true}
      />
    </div>
  );
}
