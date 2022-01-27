import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header>
      <nav className={styles.navBar}>
        <span>
          <h2>SHOE STORE</h2>
        </span>
        <ul>
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <a href="https://www.github.com/m-maaz-azhar" target="_blank" rel="noreferrer">GITHUB</a>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
