import Image from 'next/image';
import './Hero.css';        
    
export default function MainImage() {
  return (
    <div className="hero-image">
      <Image
        src="/images/hero/electrician-main-ph.png"
        alt="חשמלאי בעבודה"
        width={600}
        height={800}
        priority={true}
      />
    </div>
  );
}
