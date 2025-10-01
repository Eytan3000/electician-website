'use client';
import React, { useState } from 'react';
import './Services.css';
import ServiceCard from './ServiceCard';
import {
  privateServices,
  businessServices,
  industryServices,
} from './servicesWithTranslations';
import FactoryIcon from '../../../app/icons/FactoryIcon';
import BusinessIcon from '../../../app/icons/BusinessIcon';
import HomeIcon from '../../../app/icons/HomeIcon';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { trackEvent } from '@/lib/analytics';

export default function Services() {
  const [activeTab, setActiveTab] = useState('פרטי');
  const { t, language } = useLanguage();

  // Update active tab when language changes
  React.useEffect(() => {
    if (language === 'fr') {
      if (activeTab === 'פרטי') setActiveTab('Particulier');
      if (activeTab === 'עסקי') setActiveTab('Entreprise');
      if (activeTab === 'תעשיה') setActiveTab('Industrie');
    } else {
      if (activeTab === 'Particulier') setActiveTab('פרטי');
      if (activeTab === 'Entreprise') setActiveTab('עסקי');
      if (activeTab === 'Industrie') setActiveTab('תעשיה');
    }
  }, [language, activeTab]);

  let displayedServices = privateServices;
  if (activeTab === 'עסקי' || activeTab === 'Entreprise') displayedServices = businessServices;
  if (activeTab === 'תעשיה' || activeTab === 'Industrie') displayedServices = industryServices;

  const tabs = language === 'fr' 
    ? ['Particulier', 'Entreprise', 'Industrie']
    : ['פרטי', 'עסקי', 'תעשיה'];

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">{t('services.title')}</h2>
      <p className="services-subtitle">{t('services.subtitle')}</p>
      <div className="services-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`services-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => {
              setActiveTab(tab);
              trackEvent('service_tab_click', {
                tab_name: tab,
                tab_category: tab === 'פרטי' || tab === 'Particulier' ? 'private' :
                             tab === 'עסקי' || tab === 'Entreprise' ? 'business' : 'industry'
              });
            }}
            type="button">
            {tab === 'פרטי' || tab === 'Particulier' ? <HomeIcon /> : null}
            {tab === 'עסקי' || tab === 'Entreprise' ? <BusinessIcon /> : null}
            {tab === 'תעשיה' || tab === 'Industrie' ? <FactoryIcon /> : null}
            {tab}
          </button>
        ))}
      </div>
      <div className="services-grid">
        {displayedServices.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              color: '#888',
              fontSize: '1.2rem',
              padding: '2rem 0',
            }}>
            {t('services.comingSoon')}
          </div>
        ) : (
          displayedServices.map((service, idx) => (
            <ServiceCard service={service} idx={idx} key={idx} />
          ))
        )}
      </div>
    </section>
  );
}
