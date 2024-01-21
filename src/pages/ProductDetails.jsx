import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'


function ProductDetails() {
    const [product,setproduct] = useState();
    let {productID} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9000/Products/${productID}`)
        .then((res) => res.json())
        .then((product) => setproduct(product));
    },[productID])

  return (
    <>
    {product && <h2> {product.title}</h2> }
    </>
  )
}

export default ProductDetails;