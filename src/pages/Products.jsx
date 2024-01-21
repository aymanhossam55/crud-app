import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./product.css";
import Swal from 'sweetalert2'

function Products() {
    const [product,setproduct] = useState([]);

    useEffect(() => {
        getAllproducts();
    },[])

    const getAllproducts = () => { fetch(`http://localhost:9000/Products`)
    .then((res) => res.json())
    .then((data) => setproduct(data));
    }

    const deleteproduct = (product) =>
    Swal.fire(
        {
            title: `Are you sure to cancel ${product.title} ?`,
            showCancelButton: true
        }
    ).then((data) => {
        if(data.isConfirmed){
            { fetch(`http://localhost:9000/Products/${product.id}`,{
                method:"DELETE",
            }).then((res) => res.json())
            .then((data) => {
                getAllproducts();
            })
            }
        }
    })




  return (
    <div>   
        <h1>Products page</h1>
        <Link to={'/products/add'} className='btn btn-success'>Add New Product</Link>
        <table style={{marginTop:"3rem"}} class="table table-striped product-table">
            <thead>
                <td>ID</td>
                <td>Title</td>
                <td>Description</td>
                <td>Price</td>
                <td>Operations</td>
            </thead>
            <tbody>
                {product.map((product) => {
                    return (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}$</td>
                        <td>
                            <button className='btn btn-danger btn-sm' onClick={() => deleteproduct(product)}>Delete</button>
                            <Link to={`/products/${product.id}`} style={{marginLeft:"1rem"}} className='btn btn-info btn-sm'>View</Link>
                            <button style={{marginLeft:"1rem"}} className='btn btn-primary btn-sm'>Edit</button>
                        </td>
                    </tr>
                    );
                })}

            </tbody>
        </table>
    </div>
  )
}

export default Products