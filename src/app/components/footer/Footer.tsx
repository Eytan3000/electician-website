'use client';
import { useState } from 'react';
import Modal from './Modal';
import './Footer.css';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="site-footer" id="contact">
        <div className="footer-columns">
          <div className="footer-col footer-col-contact">
            {/* <div className="footer-social"> */}
            {/* <a href="#">
                <Image src="/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="#">
                <Image src="/icons/facebook.svg" alt="Facebook" />
              </a> */}
            {/* </div> */}
            <div>
              <a href="tel:050-822-5023" className="footer-link">
                050-822-5023
              </a>
            </div>
            <div>
              <a href="mailto:arilaurk@gmail.com" className="footer-link">
                arilaurk@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-col footer-col-center"></div>
          <div className="footer-col footer-col-links">
            <p className="footer-link" onClick={() => setShowModal(true)}>
              הצהרת נגישות
            </p>
            <div className="footer-copyright">
              © 2024 אריאל עבודות חשמל. כל הזכויות שמורות.
            </div>
          </div>
        </div>
      </footer>
      
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="הצהרת נגישות">
        <div
          style={{
            textAlign: 'right',
            direction: 'rtl',
            maxHeight: '60vh',
            overflowY: 'auto',
          }}>
          <p>הצהרת הנגישות עודכנה בתאריך 11/12/23</p>
          <p>
             אנו פועלים רבות על מנת להנגיש את
            הארגון ואת אתר האינטרנט שלנו לאנשים עם מוגבלות על מנת לקדם שוויון
            זכויות ושקיפות כלפי אנשים עם מוגבלות.
          </p>
          <p>
            <b>מהות אתר אינטרנט נגיש</b>
            <br />
            אתר אינטרנט נגיש, הינו אתר המאפשר לאדם עם מוגבלות, לגלוש באותה רמת
            יעילות והנאה כגולשים אחרים, תוך שימוש ביכולות המערכת עליה הוא פועל
            ובאמצעות טכנולוגיות מסייעות לנגישות .
          </p>
          <p>
            <b>ביצוע התאמות הנגישות באתר האינטרנט</b>
            <br />
            התאמות הנגישות באתר בוצעו בהתאם לסימן ג': שירותי האינטרנט בתקנות
            שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות) התשע"ג 2013,
            לתקן הישראלי ת"י 5568 המבוסס על הנחיותWCAG 2.0 , האתר הונגש לרמהAA
            ובכפוף לשינויים והתאמות שבוצעו במסמך התקן הישראלי.
          </p>
          <p>
            האתר תומך בשימוש בטכנולוגיות מסייעות כגון תוכנות הקראת מסך, בגלישה
            בעזרת מקלדת על ידי שימוש במקשי ה-Tab וה-Shift+Tab למעבר בין קישורים,
            מקשי החיצים, מקש ה-Enter לבחירה, מקש ה-Esc ליציאה מתפריטים וחלונות,
            לחיצה על H או על מספר למעבר בין כותרות.
          </p>
          <p>האתר נבדק כל מספר חודשים כדי להבטיח את תחזוקת נגישות האתר.</p>
          <p>
            <b>ישימות מיטבית לנגישות באתר האינטרנט</b>
            <br />
            באתר אינטרנט זה, ניתן לגלוש בצורה מיטבית ונגישה באמצעות הדפדפנים
            הנפוצים ומומלץ להשתמש בדפדפנים הבאים       Safari Chrom
          </p>
          <p>
            <b>שלבי ההנגשה בהם נמצא האתר</b>
            <br />
            נכון להיום אנו נמצאים בשלבי הנגשה סופיים, חסרות נכון להיום הן
            הכתוביות לסרטים המוצגים באתר. אנו מערכים שהנגשת האתר תושלם עד לתאריך
            ה15/12/24.
          </p>
          <p>
            <b>דרכי פניה לבקשות, תקלות נגישות והצעות לשיפור:</b>
            <br />
            במידה ומצאתם באתר האינטרנט בעיה בנושא הנגישות או שהנכם זקוקים עזרה,
            אתם מוזמנים לפנות אלינו:
            <br />
            אריאל קריאף
            <br />
            050-822-5023
            <br />
            arilaurk@gmail.com
          </p>
        </div>
      </Modal>
    </>
  );
}
