/////////////////////////////////////////

import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import { wishlistActions } from "../redux/slices/wishlistSlice";

// import { db } from "../firebase-config";
// import { doc, getDoc } from "firebase/firestore";

// import useGetData from "../custom-hooks/useGetData";

export const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("product added successfully");
  };

  const addToWishlist = () => {
    dispatch(
      wishlistActions.addItem({
        id,
        productName,
        price,
        image: imgUrl,
      })
    );
    toast.success("Product added to wishlist successfully");
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container className="py-5 text-start">
          <Row>
            <Col lg="6" className="pe-5">
              <img src={imgUrl} alt="" />
            </Col>

            <Col
              lg="6"
              className="ps-5 d-flex align-items-center justify-content-center"
            >
              <div className="product__details mt-5">
                <h2 className="mb-3">{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span onClick={() => setRating(1)}>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(2)}>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(3)}>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(4)}>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(5)}>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>

                  <p>({avgRating} ratings)</p>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="fw-bold fs-5">{price}</span>
                  <span>category: {category}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>
                <div className="mt-5 d-flex align-items-center gap-5">
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="buy__btn"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </motion.button>

                  <motion.span
                    className="btn-fav fs-3"
                    whileTap={{ scale: 1.2 }}
                    onClick={addToWishlist}
                  >
                    <i className="ri-heart-line"></i>
                  </motion.span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active-tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active-tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li kew={index} className="mb-4">
                          <h6>john</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            ref={reviewUser}
                            type="text"
                            placeholder="enter your name"
                          />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5">
                          <span>
                            1 <i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            2 <i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            3 <i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            4 <i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            5 <i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="review message"
                          />
                        </div>
                        <button className="buy__btn" type="submit">
                          submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title py-5">You Might Also Like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
