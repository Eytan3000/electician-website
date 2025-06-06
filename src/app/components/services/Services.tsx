import './Services.css';

const services = [
  {
    title: 'התקנת גופי תאורה',
    desc: 'התקנה מקצועית של נברשות, ספוטים, תאורת גינה ותאורת פנים מעוצבת.',
    class: 'card1',
  },
  {
    title: 'החלפת לוח חשמל',
    desc: 'שדרוג לוחות חשמל ישנים להתאמה לתקנים מודרניים ולמניעת עומסים ותקלות.',
    class: 'card2',
  },
  {
    title: 'תכנון חשמל לדירות חדשות',
    desc: 'ייעוץ ותכנון מקצועי למערכות חשמל בדירות חדשות או לאחר שיפוץ.',
    class: 'card3',
  },
  {
    title: 'איתור ותיקון תקלות חשמל',
    desc: 'זיהוי מהיר ופתרון יעיל לתקלות נפוצות כמו קצרים, הפסקות חשמל ונפילות עומס.',
    class: 'card4',
  },
  {
    title: 'התקנת שקעי כוח וטעינה',
    desc: 'הוספת שקעים רגילים, שקעים תעשייתיים ועמדות טעינה לרכב חשמלי בבית.',
    class: 'card5',
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">שירותים</h2>
      <p className="services-subtitle">מה אנחנו מציעים</p>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className={`service-card ${service.class}`} key={idx}>
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
