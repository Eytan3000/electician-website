import Image from 'next/image';
import './About.css';

export default function About() {
  return (
    <section className="about-split" id="about">
      <div className="about-content-split">
        <h2>אודות</h2>
        <p>
          <span style={{ fontWeight: 'bold' }}>אריאל קריאף</span> הוא חשמלאי
          מוסמך עם מעל 30 שנות ניסיון מביא איתו ניסיון עשיר של מעל שלושה עשורים
          בתחום החשמל, ומספק שירות מקצועי, אמין ואדיב לכל לקוח. שם דגש על בטיחות
          מרבית, איכות עבודה בלתי מתפשרת ויחס אישי וחם. מתמחה בביצוע עבודות חשמל
          מגוונות – מהתקנות ושדרוגים ועד איתור ותיקון תקלות – ומתחייב לעמידה
          בלוחות זמנים ולמציאת פתרונות יצירתיים ומדויקים לכל צורך.
        </p>
      </div>

      <div className="about-image">
        <Image
          src="/images/about/about.png"
          alt="חשמלאי מקצועי"
          width={300}
          height={400}
        />
      </div>
    </section>
  );
}
