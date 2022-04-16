import { useParams } from "react-router-dom";
import React from "react";

function ProductDetail() {
  const params = useParams();
  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
}

export default ProductDetail;
