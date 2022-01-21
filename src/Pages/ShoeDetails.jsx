import Header from "../components/Header/Header";

function ShoeDetails({ match }) {
  let data = require("../data/data.json");

  let product = data.filter((e) => e.id === match.params.id);
  let { title, image, description } = product[0];
  return (
    <div>
        <Header/>
      <h2>{title}</h2>
      <div>
        <img src={image} alt="" />
        <div>{description}</div>
      </div>
      <button>ADD TO CART</button>
    </div>
  );
}

export default ShoeDetails;
