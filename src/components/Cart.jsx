import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const Cart = ({ cartItems }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-body p-5">
            <button
              type="button"
              className="btn-close float-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            {cartItems.length === 0 ? (
              <h3 className="fw-bold mb-0">Your Cart is Empty</h3>
            ) : (
              <h3 className="fw-bold mb-0">Your Cart</h3>
            )}
            <ul className="d-grid gap-4 my-5 list-unstyled">
              {cartItems.map((product) => {
                return <CartItem key={product.id} product={product} />;
              })}
            </ul>
            <CartFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.productReducer.cartItems
  };
};

export default connect(mapStateToProps)(Cart);