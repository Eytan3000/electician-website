"use client";
import { PHONE_NUMBER } from '@/utils/constants';
import './Hero.css';
import SmallImages from './SmallImages';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="hero-split">
      <div className="hero-content-split">
        <div className="hero-content-split-header">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
        </div>
        <SmallImages />
        <p>
          <span style={{ fontWeight: 'bold' }}>Ariel krief - </span>
          {t('hero.description')}
        </p>
        <a href={`tel:${PHONE_NUMBER}`} className="cta-button">
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
}
