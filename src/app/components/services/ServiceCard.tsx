import { useLanguage } from '@/app/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { trackServiceView } from '@/lib/analytics';

interface Service {
  id: string;
  titleKey: string;
  clauses: string[];
}

interface ServiceCardProps {
  service: Service;
  idx: number;
}

export default function ServiceCard({ service, idx }: ServiceCardProps) {
  const { t, language } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackServiceView(service.id);
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [service.id]);

  return (
    <div ref={cardRef} className={`service-card card${service.id}`} key={idx}>
      <div className="service-icon">
        <span className="circle-icon"></span>
      </div>
      <div>
        <h3>{t(service.titleKey)}</h3>
        <ul
          style={{
            paddingRight: 0,
            margin: 0,
            listStyle: 'disc inside',
          }}>
          {service.clauses.map((clauseKey, i) => (
            <li
              key={i}
              style={{
                fontSize: '1.1rem',
                marginBottom: '0.3em',
                textAlign: language === 'he' ? 'right' : 'left',
              }}>
              {t(clauseKey)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
