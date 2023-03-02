import React from "react";
import { types } from "../redux/types";
import { useDispatch } from "react-redux";
import {connect} from "react-redux"
import paypal from "../images/paypal-icon.svg";
import { clearCart } from "../redux/actions";

const CartFooter = ({ cartItems, cartMoneyTotal, clearCart }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: types.GET_TOTALS });
  }, [cartItems, dispatch]);

  let num = 0;
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <div>
          <p className="fw-bold fs-4 bg-body-secondary">
            Total: <span>{cartMoneyTotal} €</span>
          </p>
          <form
            className="mt-4"
            action="https://www.paypal.com/us/cgi-bin/webscr"
            method="post"
          >
            <input type="hidden" name="cmd" value="_cart" />
            <input
              type="hidden"
              name="business"
              value="vladimir.monarov@gmail.com"
            />
            <input type="hidden" name={`item_name_${num}`} />
            <input type="hidden" name={`amount_${num}`} />
            <input type="hidden" name={`quantity_${num}`} />
            <input type="hidden" name="currency_code" value="EUR" />
            <input type="hidden" name="amount" />
            <input
              style={{ width: "5rem" }}
              type="image"
              src={paypal}
              name="submit"
              alt="Make payments with PayPal - it's fast, free and secure!"
            />
          </form>
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