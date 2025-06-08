import './Services.css';

const services = [
  {
    id: '1',
    title: 'התקנת גופי תאורה',
    desc: 'התקנה מקצועית של נברשות, ספוטים, תאורת גינה ותאורת פנים מעוצבת.',
  },
  {
    id: '2',
    title: 'החלפת לוח חשמל',
    desc: 'שדרוג לוחות חשמל ישנים להתאמה לתקנים מודרניים ולמניעת עומסים ותקלות.',
  },
  {
    id: '3',
    title: 'תכנון חשמל לדירות חדשות',
    desc: 'ייעוץ ותכנון מקצועי למערכות חשמל בדירות חדשות או לאחר שיפוץ.',
  },
  {
    id: '4',
    title: 'איתור ותיקון תקלות חשמל',
    desc: 'זיהוי מהיר ופתרון יעיל לתקלות נפוצות כמו קצרים, הפסקות חשמל ונפילות עומס.',
  },
  {
    id: '5',
    title: 'התקנת שקעי כוח וטעינה',
    desc: 'הוספת שקעים רגילים, שקעים תעשייתיים ועמדות טעינה לרכב חשמלי בבית.',
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
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
