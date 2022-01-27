import { Link } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h2> $288</h2>
        <h1>Air Jordan 6<br/>Retro SP</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolorum aliquid repudiandae quia corporis, perferendis maxime alias recusandae. Dolore totam </p>
        <Link to="/products/air-jordan-6">More Details</Link>
      </div>
    </div>
  );
}

export default Home;
