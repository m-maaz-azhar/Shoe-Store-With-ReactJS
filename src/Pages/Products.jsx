import Navbar from "../components/Header/Navbar";
import ShoeCard from "../components/ShoeCard/ShoeCard";
import "../styles/common.css";

function Products() {
  let data = require("../data/data.json");
  return (
    <>
      <Navbar/>
      <h2 className="text-center my-15">PRODUCTS</h2>
      <div className="flex-row">
        {data.map((product,i) => (
          <ShoeCard
            key={i}
            data={product}
          />
        ))}
      </div>
    </>
  );
}

export default Products;