import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <Helmet title="About Us">
      <CommonSection title="About Us" />
      <div>
        <Container className="py-5">
          <Row>
            <Col lg="12">
              <h2 className="fs-3 text-center text-capitalize fw-bold lh-lg text-center">
                {" "}
                Welcome to Our E-commerce <br />{" "}
                <span className="fs-4">
                  your ultimate destination for all things awesome!
                </span>
              </h2>
              <ul className="lh-lg list-group my-4">
                <li>
                  <p className="fs-5">
                    We're passionate about delivering the trendiest and
                    highest-quality products right to your doorstep. Whether
                    you're craving the latest fashion trends, tech gadgets
                    that'll blow your mind, or unique home decor items to spruce
                    up your living space, we've got you covered!
                  </p>
                </li>
                <li className="mt-2">
                  <p className="fs-5">
                    Our mission is to provide an exceptional online shopping
                    experience that combines convenience, affordability, and
                    outstanding customer service. We carefully curate our
                    product selection, partnering with trusted brands and
                    sellers, so you can shop with confidence and find exactly
                    what you're looking for.
                  </p>
                </li>
              </ul>
              <div className="my-4">
                <h3 className="fs-1 fw-bold text-center my-3">
                  Why choose us?
                </h3>
                <h4 className=" my-3">Here's what sets us apart:</h4>
                <ul className=" ms-3 my-4 lh-lg list-group">
                  <li>
                    <span className="fw-bold">Extensive Product Range: </span>
                    <p>
                      From fashion-forward clothing and accessories to
                      cutting-edge electronics and lifestyle essentials, we
                      offer a diverse range of products to cater to every taste
                      and need.
                    </p>
                  </li>
                  <li>
                    <span className="fw-bold">Quality Assurance: </span>
                    <p>
                      We understand the importance of quality, which is why we
                      only feature products that meet our strict standards. Your
                      satisfaction is our top priority.
                    </p>
                  </li>
                  <li>
                    <span className="fw-bold">Fast and Secure Delivery: </span>
                    <p>
                      Say goodbye to lengthy waits! We strive for lightning-fast
                      order processing and reliable shipping methods to ensure
                      your items reach you in record time. Plus, our secure
                      payment gateways safeguard your transactions.
                    </p>
                  </li>
                  <li>
                    <span className="fw-bold">Global Reach: </span>
                    <p>
                      We believe in connecting customers worldwide, so we ship
                      internationally to bring our fantastic products to your
                      doorstep, no matter where you are.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Helmet>
  );
};

export default About;
