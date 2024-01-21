import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div>
        <ul className='list-unstyled'>
            <li>
                <Link to={"./products"}>Get all Products</Link>
            </li>
            <li>
                <Link to="#">Get all Categories</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar