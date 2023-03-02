import React from "react";
import { connect, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions";
import fakeStore from "../apis/fakeStore";
import Product from "./Product";
import ShopNav from "./ShopNav";
import Cart from "./Cart";

const Shop = ({ products }) => {
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    const fetchProducts = async () => {
      const response = await fakeStore.get("/products").catch(err => {
        console.error(err)
      })
      dispatch(setProducts(response.data))
    }
    fetchProducts()
  }, [dispatch])
  
  return (
    <div className="container my-3">
      <ShopNav />
      <Cart />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {products.map(product => {
          const { id, title, price, image } = product;
          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
            />
          );
        })}
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {products: state.productReducer.products}
}

export default connect(mapStateToProps, {setProducts:setProducts})(Shop);