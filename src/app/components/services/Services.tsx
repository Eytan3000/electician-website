'use client';
import React, { useState } from 'react';
import './Services.css';
import ServiceCard from './ServiceCard';
import {
  privateServices,
  businessServices,
  industryServices,
} from './services';

export default function Services() {
  const [activeTab, setActiveTab] = useState('פרטי');

  let displayedServices = privateServices;
  if (activeTab === 'עסקי') displayedServices = businessServices;
  if (activeTab === 'תעשיה') displayedServices = industryServices;

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">שירותים</h2>
      <p className="services-subtitle">מה אנחנו מציעים</p>
      <div className="services-tabs">
        {['פרטי', 'עסקי', 'תעשיה'].map((tab) => (
          <button
            key={tab}
            className={`services-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
            type="button">
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
            בקרוב שירותים לקטגוריה זו
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
