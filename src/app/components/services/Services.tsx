import './Services.css';

const services = [
  {
    id: '1',
    title: 'התקנות חשמליות',
    clauses: [
      'התקנה או שדרוג מלא של מערכת החשמל בדירה או בבית',
      'הוספה של שקעים, מפסקים ונקודות תאורה',
      'התקנת לוחות חשמל חדשים ויצירת מעגלי חשמל ייעודיים (תנור, מיחם מים, מיזוג)',
    ],
  },
  {
    id: '2',
    title: 'התקנה ותחזוקה – תאורה, אוורור וחימום',
    clauses: [
      `חיבור גופי תאורה ותליית גופי זרקורים ונדנדות`,
      `התקנת תאורת לד, תאורת גינה ושבילי חוץ`,
      `התקנת דימרים ופתרונות תאורה אווירתיים`,
      `התקנה מאווררים תקרע`,
      `החלפת גוף חימום לדודים`,
    ],
  },
  {
    id: '3',
    title: 'תיקונים ושירות חירום',
    clauses: [
      `איתור ותיקון תקלות חשמל (פיצוצי מפסק, קצר חשמלי)`,
      `החלפת מפסקים, פיוזים, מפסקים אוטומטיים`,
      `שירות תיקונים דחוף 24/7`,
    ],
  },
  {
    id: '4',
    title: 'עמידה בתקנים והבטחת בטיחות',
    clauses: [
      `שדרוג למערכת העומדת בתקן `,
      `התקנת מגן מפני נחשולי זרם (מפסק פחת 30mA)`,
      `חיבור למערכת הארקה ובדיקת רציפות הארקה`,
    ],
  },
  {
    id: '5',
    title: 'בטיחות – אזעקה ובקרת גישה',
    clauses: [
      'הוספת שקעים רגילים, שקעים תעשייתיים ועמדות טעינה לרכב חשמלי בבית.',
    ],
  },
  {
    id: '6',
    title: 'אנרגיה ונוחות',
    clauses: [
      'הוספת שקעים רגילים, שקעים תעשייתיים ועמדות טעינה לרכב חשמלי בבית.',
    ],
  },
  {
    id: '7',
    title: 'פתרונות מודרניים',
    clauses: [
      'הכנה והתקנת עמדת טעינה לרכב חשמלי',
      'שקעים מוגברים לזרמים גבוהים (אינדוקציה)',
      'ייעוץ לחיסכון באנרגיה וניהול צריכה',
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">שירותים</h2>
      <p className="services-subtitle">מה אנחנו מציעים</p>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className={`service-card card${service.id}`} key={idx}>
            <div className="service-icon">
              <span className="circle-icon"></span>
            </div>
            <div>
              <h3>{service.title}</h3>
              <ul
                style={{
                  paddingRight: 0,
                  margin: 0,
                  listStyle: 'disc inside',
                }}>
                {service.clauses.map((clause, i) => (
                  <li
                    key={i}
                    style={{
                      textAlign: 'right',
                      fontSize: '1.1rem',
                      marginBottom: '0.3em',
                    }}>
                    {clause}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
