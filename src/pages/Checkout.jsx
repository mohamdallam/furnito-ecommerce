import React, { useState } from "react";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPostalCodeValid = (postalCode) => {
    // Check if postalCode consists only of numbers
    return /^\d+$/.test(postalCode);
  };

  const placeOrder = () => {
    // Validate inputs before placing an order
    if (!isEmailValid(email)) {
      toast.error("Invalid email address");
      return;
    }

    if (!isPostalCodeValid(postalCode)) {
      toast.error("Postal code must consist only of numbers");
      return;
    }

    // Your logic for placing the order goes here
    // You can use the state values (name, email, etc.) for the order information

    // Example:
    // const orderData = {
    //   name,
    //   email,
    //   phoneNumber,
    //   address,
    //   city,
    //   postalCode,
    //   country,
    //   totalQty,
    //   totalAmount,
    // };

    // Call your API or perform the necessary actions to place the order
    // ...

    toast.success("Order placed successfully!");
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Stress Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  ></input>
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty:<span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal:<span>{totalAmount}</span>
                </h6>
                <h6>
                  Shipping:
                  <br></br>free shipping<span>0</span>
                </h6>
                <h4>
                  Total Cost:<span>{totalAmount}</span>
                </h4>
                <button
                  className="buy__btn auth__btn w-100"
                  onClick={placeOrder}
                >
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
