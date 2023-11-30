import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import products from "../../assets/data/products";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { wishlistActions } from "../../redux/slices/wishlistSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
        disc: item.disc,
      })
    );
    toast.success("Product added successfully");
  };
  const addToWishlist = () => {
    dispatch(
      wishlistActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
        disc: item.disc,
      })
    );
    toast.success("Product added to wishlist successfully");
  };
  return (
    <Col
      lg="3"
      md="4"
      className="mb-2 d-flex flex-column align-items-stretch justify-content-end"
    >
      <div className="product__item my-2">
        {item.disc && <span className="disc">discount {item.disc}</span>}
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product__info">
          <Link to={`/shop/${item.id}`}>
            <h3
              className="product__name"
              style={{
                fontSize: item.productName.length > 20 && "1rem",
                textTransform: "capitalize",
              }}
            >
              {item.productName}
            </h3>
          </Link>
          <span>{item.category}</span>
        </div>

        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">{item.price}</span>
          <motion.span
            className="ms-5"
            whileTap={{ scale: 1.2 }}
            onClick={addToWishlist}
          >
            <i className="ri-heart-line"></i>
          </motion.span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="btn ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
