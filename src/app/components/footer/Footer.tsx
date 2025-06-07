import './Footer.css';

export default function Footer() {
  return (
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
            <a href="tel:050-822-5023" className="footer-link">050-822-5023</a>
          </div>
          <div>
            <a href="mailto:arilaurk@gmail.com" className="footer-link">arilaurk@gmail.com</a>
          </div>
        </div>
        <div className="footer-col footer-col-center"></div>
        <div className="footer-col footer-col-links">
          <a href="#" className="footer-link">
            מדיניות פרטיות
          </a>
          <a href="#" className="footer-link">
            הצהרת נגישות
          </a>
          <div className="footer-copyright">
            © 2024 אריאל עבודות חשמל. כל הזכויות שמורות.
          </div>
        </div>
      </div>
    </footer>
  );
}
