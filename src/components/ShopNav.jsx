import React from "react";
import {connect} from "react-redux"

const ShopNav = ({cartItemsTotal}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light rounded my-3 p-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-lg-flex"
          id="navbarsExample11"
        >
          <h1 className="font-monospace fw-semibold">Ecommerce Shop</h1>

          <div className="d-lg-flex col-lg-9 justify-content-lg-end">
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                className="bi bi-cart-plus-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
              </svg>
              <span className="badge text-bg-danger fw-bold fs-6 ms-1">{cartItemsTotal}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {cartItemsTotal: state.productReducer.cartItemsTotal}
}

export default connect(mapStateToProps)(ShopNav);