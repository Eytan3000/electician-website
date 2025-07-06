import Image from 'next/image';
import './About.css';
import { aboutImg } from '@/utils/constants';

export default function About() {
  return (
    <section className="about-split" id="about">
      <div className="about-content-split">
        <h2>אודות</h2>
        <p>
          <span style={{ fontWeight: 'bold' }}>אריאל קריאף</span> הוא חשמלאי
          ראשי מוסמך עם ניסיון של למעלה מ20 שנה. הוא מביא איתו ידע עשיר ומעניק
          לכל לקוח שירות מקצועי, אמין ואכפתי. מקפיד על בטיחות מרבית, איכות עבודה
          ללא פשרות ויחס אישי וחם לכל לקוח. מומחה במגוון עבודות חשמל בדירות,
          בתים פרטיים, בניינים, עסקים ותעשייה – מהתקנות ושדרוגים ועד לאיתור
          ותיקון תקלות – מחויב לעמידה בלוחות זמנים ולהצעת פתרונות יצירתיים
          ומדויקים לכל צורך.
        </p>
      </div>

      <div className="about-image">
        <Image  
          src={aboutImg}
          alt="חשמלאי מקצועי"
          width={800}
          height={500}
        />
      </div>
    </section>
  );
}
