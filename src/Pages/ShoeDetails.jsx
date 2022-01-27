import BreadCrumbMenu from "../components/BreadCrumbMenu/BreadCrumbMenu";
import Navbar from "../components/Header/Navbar";
import styles from '../styles/shoeDetails.module.css'

function ShoeDetails({ match }) {
  let data = require("../data/data.json");

  let product = data.filter((e) => e.id === match.params.id);
  let { title, image, description , price } = product[0];
  return (
    <div>
      <Navbar/>
      <BreadCrumbMenu productId={match.params.id}/>
      <main className={styles.container}>
        <section>
          <img src={image} alt="" />
        </section>
        <section>      
          <h2>{title.toLocaleUpperCase()}</h2>
          <ul>{description.map(item=><li>{item}</li>)}</ul>
          <div>
            <h3>PRICE: <strike>${parseInt(price)+100}</strike> <i>${price}</i><p>(shipping and tax included)</p></h3>
          </div>
          <button>ADD TO CART</button>
        </section>
      </main>
    </div>
  );
}

export default ShoeDetails;
