import React from "react";
import { connect } from "react-redux";
import { increaseQuant, decreaseQuant } from "../redux/actions";

const CartItemNav = ({quantity, increaseQuant, decreaseQuant, id}) => {
  return (
    <div className="d-flex flex-column gap-1">
      <span onClick={() => increaseQuant(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-up-fill"
          viewBox="0 0 16 16"
        >
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
      </span>
      <span className="text-center fw-bold">{quantity}</span>
      <span onClick={() => decreaseQuant(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </span>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    increaseQuant: state.productReducer.increaseQuant,
    decreaseQuant: state.productReducer.decreaseQuant,
  };
}

export default connect(mapStateToProps, {increaseQuant, decreaseQuant})(CartItemNav);