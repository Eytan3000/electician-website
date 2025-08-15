import { useLanguage } from '@/app/contexts/LanguageContext';

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
  const { t } = useLanguage();
  
  return (
    <div className={`service-card card${service.id}`} key={idx}>
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
                textAlign: 'right',
                fontSize: '1.1rem',
                marginBottom: '0.3em',
              }}>
              {t(clauseKey)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
