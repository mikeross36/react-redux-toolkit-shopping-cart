import React from "react";
import { types } from "../redux/types";
import { useDispatch } from "react-redux";
import {connect} from "react-redux"
import { clearCart } from "../redux/actions";
import PaypalForm from "./PaypalForm";

const CartFooter = ({ cartItems, cartMoneyTotal, clearCart }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: types.GET_TOTALS });
  }, [cartItems, dispatch]);

  return (
    <div className="container">
      <footer className="py-3 my-4">
        <div>
          <p className="fw-bold fs-4 bg-body-secondary">
            Total: <span>{cartMoneyTotal} €</span>
          </p>
          <PaypalForm />
        </div>
        {cartItems.length !== 0 && (
          <button
            type="button"
            className="btn btn-sm btn-danger mt-5 w-100"
            data-bs-dismiss="modal"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        )}
      </footer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.productReducer.cartItems,
    cartMoneyTotal: state.productReducer.cartMoneyTotal,
    clearCart: state.productReducer.clearCart,
  };
}

export default connect(mapStateToProps, {clearCart})(CartFooter);