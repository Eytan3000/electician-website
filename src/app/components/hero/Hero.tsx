import Image from 'next/image';
import './Hero.css';
const smallImageSize = 240;

export default function Hero() {
  return (
    <section className="hero-split">
      <div className="hero-image">
        <Image
          src="/images/hero/electrician-main-ph.png"
          alt="חשמלאי בעבודה"
          width={600}
          height={800}
        />  
      </div>
      <div className="hero-content-split">
        <h1>חשמלאי מוסמך לשירותך</h1>
        <div className="hero-small-images">
          <Image
            className="hero-small-image-1"
            src="/images/hero/electrical-panel.png"
            alt="עבודת חשמל"
            width={smallImageSize}
            height={smallImageSize}
          />

          <Image
            className="hero-small-image-2"
            src="/images/hero/Electrician-ph.avif"
            alt="בדיקת לוח חשמל"
            width={smallImageSize}
            height={smallImageSize}
          />
        </div>
        <p>
          חשמלאי מוסמך בעל 30 שנות ניסיון. מתמחה בעבודות חשמל לבית ולעסק, איתור
          תקלות, תכנון והתקנה של מערכות חשמל, שדרוג לוחות חשמל, תאורה חכמה ועוד
          — תוך הקפדה על בטיחות, אמינות ועמידה בזמנים.
        </p>
        <a href="tel:050-1234567" className="cta-button">
          התקשרו עכשיו
        </a>
      </div>
    </section>
  );
}
