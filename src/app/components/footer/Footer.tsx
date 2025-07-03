'use client';
import { useState } from 'react';
import PolicyModals from './PolicyModals';
import './Footer.css';
import { PHONE_NUMBER } from '@/utils/constants';

export default function Footer() {
  const [showAccessibilityModal, setShowAccessibilityModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const email = 'ariel.electricity@gmail.com';
  const owner = 'אריאל קריאף';

  return (
    <>
      <footer className="site-footer" id="contact">
        <div className="footer-columns">
          <div className="footer-col footer-col-contact">
            <a href={`tel:${PHONE_NUMBER}`} className="footer-link">
              {PHONE_NUMBER}
            </a>

            <a
              href="mailto:ariel.electricity@gmail.com"
              className="footer-link">
              ariel.electricity@gmail.com
            </a>
          </div>
          <div className="footer-col footer-col-center"></div>
          <div className="footer-col footer-col-links">
            <p
              className="footer-link"
              onClick={() => setShowPrivacyModal(true)}>
              מדיניות פרטיות
            </p>
            <p
              className="footer-link"
              onClick={() => setShowAccessibilityModal(true)}>
              הצהרת נגישות
            </p>
            <div className="footer-copyright">
              © 2024 חשמל אריאל. כל הזכויות שמורות.
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
