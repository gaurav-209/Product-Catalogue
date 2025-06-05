import React, { useContext } from 'react';
import CartContext from './CartContext';
import ProductCart from './ProductCart';
import './ProductCardView.css'

const ProductCardView = ({ products }) => {
  const { addToCart, error } = useContext(CartContext);

  return (
    <div className="m-5">
      {error && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {error}
        </div>
      )}

      <div className="row g-4 justify-content-center">
        {products.map((val) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={val.id}>
            <div className="card h-100 shadow-lg border-0 rounded-4 position-relative">
              {!val.available && (
                <span className="position-absolute top-0 start-0 badge bg-danger rounded-end px-3 py-2">
                  Not Available
                </span>
              )}
              <img
                src={val.img}
                alt={val.name}
                className="card-img-top rounded-top-4"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold">{val.name}</h5>
                <p className="card-text text-muted" style={{ minHeight: '60px' }}>{val.des}</p>
                <p className="card-text fw-bold fs-5 text-success mb-3">₹{val.price.toFixed(2)}</p>
                <button
                  className="btn btn-dark mt-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => addToCart(val)}
                  disabled={!val.available}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProductCart />
    </div>
  );
};

export default ProductCardView;
