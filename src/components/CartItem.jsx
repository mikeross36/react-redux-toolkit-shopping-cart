import React from "react";
import { connect } from "react-redux";
import { removeCartItem, increaseQuant, decreaseQuant } from "../redux/actions";

const CartItem = ({
  product,
  increaseQuant,
  decreaseQuant,
  removeCartItem,
}) => {
  const { id, image, title, price, quantity } = product;
  return (
    <li key={id} className="d-flex gap-4">
      <img src={image} alt="product" width={70} />
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
      <div className="d-flex flex-column gap-1">
        <span>{title}</span>
        <span className="fw-bold">{price} €</span>
        <span style={{ cursor: "pointer"}} onClick={() => removeCartItem(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            className="bi bi-trash3-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
          </svg>
        </span>
      </div>
    </li>
  );
};

const mapStateToProps = state => {
  return {
    removeCartItem: state.productReducer.removeCartItem,
    increaseQuant: state.productReducer.increaseQuant,
    decreaseQuant: state.productReducer.decreaseQuant}
}

export default connect(mapStateToProps, {
  removeCartItem,
  increaseQuant,
  decreaseQuant,
})(CartItem);