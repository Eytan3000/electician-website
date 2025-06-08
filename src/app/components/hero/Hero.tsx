'use client';
import './Hero.css';
import { useEffect, useState } from 'react';
import MainImage from './MainImage';
import SmallImages from './SmallImages';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 700);
  }, []);
  
  return (
    <section className="hero-split">
      {!isMobile && <MainImage />}
      <div className="hero-content-split">
        <h1>חשמלאי מוסמך לשירותך</h1>

        {isMobile ? <MainImage /> : <SmallImages />}

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
