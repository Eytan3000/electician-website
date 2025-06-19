interface Service {
  id: string;
  title: string;
  clauses: string[];
}

interface ServiceCardProps {
  service: Service;
  idx: number;
}

export default function ServiceCard({ service, idx }: ServiceCardProps) {
  return (
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
  );
}
