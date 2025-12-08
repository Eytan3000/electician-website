"use client";
import Image from 'next/image';
import './About.css';
import { aboutImg } from '@/utils/constants';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section className="about-split" id="about">
      <div className="about-content-split">
        <h2>{t('about.title')}</h2>
        <p>
          <span style={{ fontWeight: 'bold' }}>Ariel krief</span>{' '}
          {t('about.description')}
        </p>
      </div>

      <div className="about-image">
        <Image  
          src={aboutImg}
          alt={t('about.alt')}
          width={800}
          height={500}
        />
      </div>
    </section>
  );
}
