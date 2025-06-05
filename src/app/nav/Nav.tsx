import './Nav.css';

export default function Nav() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">אריאל עבודות חשמל</span>
      <ul className="navbar-links">
        <li>
          <a href="#services">שירותים</a>
        </li>
        <li>
          <a href="#about">אודות</a>
        </li>
        <li>
          <a href="#contact">יצירת קשר</a>
        </li>
      </ul>
      <a href="tel:050-8225023" className="navbar-phone">
        050-822-5023
      </a>
    </nav>
  );
}
