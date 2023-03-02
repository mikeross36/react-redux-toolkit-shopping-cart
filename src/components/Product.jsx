import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../redux/actions";

const Product = ({ addProductToCart, ...props }) => {
  return (
    <div className="col mb-3">
      <div className="card h-100 d-flex flex-column align-items-center justify-content-center py-3">
        <img
          src={props.image}
          className="img-thumbnail rounded mx-auto d-block"
          width={150}
          alt={props.title}
        />
        <div className="card-body text-center">
          <p className="card-text">{props.title}</p>
          <h4 className="card-title">{props.price} €</h4>
        </div>
        <div className="d-grid gap-5 d-flex">
          <button
            className="btn btn-success btn-sm"
            onClick={() => addProductToCart({ ...props })}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-warning btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Open Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {addProductToCart: state.productReducer.addProductToCart}
}

export default connect(mapStateToProps, {addProductToCart})(Product);