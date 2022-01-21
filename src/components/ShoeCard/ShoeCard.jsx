import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShoeCard.module.css";

function ShoeCard(props) {
  let { id, title, price, image } = props.data
  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt="" />
      </div>
      <span>
        <h2>{title}</h2>
        <p>{price}</p>
        <Link to={`/products/${id}`} ><button>View</button></Link>
      </span>
    </div>
  );
}

export default ShoeCard;