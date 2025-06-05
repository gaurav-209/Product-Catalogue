import React, { useContext } from 'react';
import CartContext from './CartContext';

const ProductCart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, error } = useContext(CartContext);

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title" id="exampleModalLabel">🛒 Your Cart</h5>
            <span className="badge bg-light text-dark ms-2">{cart.length} items</span>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            {error && (
              <div className="alert alert-warning text-center" role="alert">
                {error}
              </div>
            )}

            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="card mb-3 shadow-sm">
                  <div className="card-body d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <img src={item.img} alt={item.name} width={70} className="rounded" />
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <p className="mb-0 text-muted">₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-outline-danger" onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span className="px-2">{item.quantity}</span>
                      <button className="btn btn-outline-success" onClick={() => increaseQuantity(item.id, item.inventory)}>+</button>
                      <button className="btn btn-warning ms-3" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-muted">🛍️ No items in the cart.</div>
            )}
          </div>

          <div className="modal-footer justify-content-between">
            <strong>Total: ₹{Math.ceil(cart.reduce((total, item) => total + item.price * item.quantity, 0))}</strong>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
