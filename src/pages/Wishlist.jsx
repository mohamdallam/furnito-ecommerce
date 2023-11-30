import React from "react";
import "../styles/wishlist.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { wishlistActions } from "../redux/slices/wishlistSlice";
import { useSelector, useDispatch } from "react-redux";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    dispatch(wishlistActions.deleteItem(id));
  };

  return (
    <Helmet title="Wishlist">
      <CommonSection title="Wishlist" />
      <div>
        <Container className="py-5 text-center">
          <Row>
            <Col lg="12">
              {wishlistItems.length === 0 ? (
                <h2 className="fs-4 text-center">
                  {" "}
                  No item added to the wishlist
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistItems.map((item) => (
                      <tr>
                        <td>
                          <img
                            src={item.imgUrl}
                            className="object-fit-contain"
                            alt=""
                          />
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>
                          <motion.i
                            whileTap={{ scale: 1.2 }}
                            onClick={() => deleteProduct(item.id)}
                            className="ri-delete-bin-line"
                          ></motion.i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </Helmet>
  );
};

export default Wishlist;
