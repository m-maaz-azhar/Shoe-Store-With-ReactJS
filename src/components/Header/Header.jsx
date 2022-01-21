import { Link } from "react-router-dom";
import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <nav className={styles.navBar}>
        <span>
          <h2>SHOE STORE</h2>
        </span>
        <ul>
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/contact">CONTACT</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
