'use client';
import { useState } from 'react';
import PolicyModals from './PolicyModals';
import './Footer.css';

export default function Footer() {
  const [showAccessibilityModal, setShowAccessibilityModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const email = 'arilaurk@gmail.com';
  const owner = 'אריאל קריאף';
  const phone = '050-822-5023';

  return (
    <>
      <footer className="site-footer" id="contact">
        <div className="footer-columns">
          <div className="footer-col footer-col-contact">
            {/* <div className="footer-social"> */}
            {/* <a href="#">
                <Image src="/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="#">
                <Image src="/icons/facebook.svg" alt="Facebook" />
              </a> */}
            {/* </div> */}
            <div>
              <a href="tel:050-822-5023" className="footer-link">
                050-822-5023
              </a>
            </div>
            <div>
              <a href="mailto:arilaurk@gmail.com" className="footer-link">
                arilaurk@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-col footer-col-center"></div>
          <div className="footer-col footer-col-links">
            <p className="footer-link" onClick={() => setShowPrivacyModal(true)}>
              מדיניות פרטיות
            </p>
            <p className="footer-link" onClick={() => setShowAccessibilityModal(true)}>
              הצהרת נגישות
            </p>
            <div className="footer-copyright">
              © 2024 אריאל עבודות חשמל. כל הזכויות שמורות.
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
        phone={phone}
      />
    </>
  );
}
