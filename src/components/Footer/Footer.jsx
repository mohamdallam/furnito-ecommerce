import React from "react";
import "./footer.css";
import logo from "../../assets/images/eco-logo.png";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  List,
} from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="md-4" md="6">
          <div className="d-flex align-items-center justify-content-center logo">
                <img src={logo} alt="logo" className="d-block w-100"></img>
              </div>
            <p className="footer__text mt-4 fw-bold ">
              You're the founder of your home.
            </p>
          </Col>

          <Col lg="3" md="3" className="md-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Social</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Facebook</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Twitter</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Discord</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">What's App</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="md-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">User Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer__quick-links ">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p className="m-0">Egypt,Alexandira, ITI Bd</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p className="m-0">+01222222222</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p className="m-0 fs-6">FURNITO@hotmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright text-center">
              ITI Team 4 {year} All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
