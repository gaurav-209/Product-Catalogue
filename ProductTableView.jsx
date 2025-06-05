import React, { useContext } from 'react';
import CartContext from './CartContext';
import ProductCart from './ProductCart';

const ProductTableView = ({ products }) => {
  const { addToCart, error } = useContext(CartContext);

  return (
    <div className='container mt-4'>
      {error && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {error}
        </div>
      )}

      <div className="table-responsive">
        <table className='table table-bordered table-hover shadow-sm'>
          <thead className='table-dark'>
            <tr>
              <th>Sr.</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Product Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((val, idx) => (
              <tr key={val.id}>
                <td>{idx + 1}</td>
                <td><img src={val.img} alt={val.name} width={80} className='rounded' /></td>
                <td>{val.name}</td>
                <td>₹{val.price.toFixed(2)}</td>
                <td>{val.des}</td>
                <td>
                  <span className={`badge ${val.available ? 'bg-success' : 'bg-danger'}`}>
                    {val.available ? 'Available' : 'Not Available'}
                  </span>
                </td>
                <td>
                  <button
                    className='btn btn-sm btn-dark'
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => addToCart(val)}
                    disabled={!val.available}
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProductCart />
    </div>
  );
};

export default ProductTableView;
