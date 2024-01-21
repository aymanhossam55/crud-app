import axios from 'axios';
import React  from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Addproduct() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  let navigate = useNavigate();
  const formSubmit = (event) => {
    event.preventDefault();


    axios.post("http://localhost:9000/Products", {
      title,
      price,
      description,
    }).then((data) => {
      console.log(data);
      navigate(`/products`)
    })
  }


  return (
    <>
      <h2>Addproduct</h2>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="ProductTitle" className="form-label">Product Title</label>
          <input type="text"
            className="form-control"
            id="ProductTitle"
            placeholder='Product Title'
            aria-describedby="emailHelp" onChange={(event) => setTitle(event.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="Productprice" className="form-label">Product Price</label>
          <input type="number"
          className="form-control" 
          id="Productprice" 
          placeholder='Product Price' 
          aria-describedby="emailHelp" onChange={(event) => setPrice(event.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="Productdescription" className="form-label">Product Price</label>
          <input type="text"
          className="form-control" 
          id="Productdescription" 
          placeholder='Product Description' 
          aria-describedby="emailHelp" onChange={(event) => setDescription(event.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Add product</button>
      </form>
    </>

  )
}

export default Addproduct