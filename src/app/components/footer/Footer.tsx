'use client';
import { useState } from 'react';
import PolicyModals from './PolicyModals';
import './Footer.css';
import { PHONE_NUMBER } from '@/utils/constants';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { trackPhoneCallFooter, trackEmailClick, trackModalOpen } from '@/lib/analytics';

export default function Footer() {
  const [showAccessibilityModal, setShowAccessibilityModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const { t } = useLanguage();
  const email = 'ariel.electricity@gmail.com';
  const owner = 'Ariel krief';

  return (
    <>
      <footer className="site-footer" id="contact">
        <div className="footer-columns">
          <div className="footer-col footer-col-contact">
            <a href={`tel:${PHONE_NUMBER}`} className="footer-link" onClick={trackPhoneCallFooter}>
              {PHONE_NUMBER}
            </a>

            <a
              href="mailto:ariel.electricity@gmail.com"
              className="footer-link"
              onClick={trackEmailClick}>
              ariel.electricity@gmail.com
            </a>
          </div>
          <div className="footer-col footer-col-center"></div>
          <div className="footer-col footer-col-links">
            <p
              className="footer-link"
              onClick={() => {
                trackModalOpen('privacy');
                setShowPrivacyModal(true);
              }}>
              {t('footer.privacy')}
            </p>
            <p
              className="footer-link"
              onClick={() => {
                trackModalOpen('accessibility');
                setShowAccessibilityModal(true);
              }}>
              {t('footer.accessibility')}
            </p>
            <div className="footer-copyright">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </footer>
      <PolicyModals
        showAccessibilityModal={showAccessibilityModal}
        setShowAccessibilityModal={setShowAccessibilityModal}
        showPrivacyModal={showPrivacyModal}
        setShowPrivacyModal={setShowPrivacyModal}
        email={email}
        owner={owner}
        phone={PHONE_NUMBER}
      />
    </>
  );
}
