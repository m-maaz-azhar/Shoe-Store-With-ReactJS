import React from "react";
import { Link } from "react-router-dom";
import styles from "./BreadCrumbMenu.module.css";

function BreadCrumbMenu({ productId }) {
  return (
    <div className={styles.breadcrumb}>
      <Link to="/products">Products</Link> >{" "}
      {productId}
    </div>
  );
}

export default BreadCrumbMenu;
