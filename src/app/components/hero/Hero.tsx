import './Hero.css';
import MainImage from './MainImage';
import SmallImages from './SmallImages';

export default function Hero() {
  return (
    <section className="hero-split">
      eytan
      <MainImage />
      <div className="hero-content-split">
        <h1>חשמלאי מוסמך לשירותך</h1>
        <SmallImages />
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
