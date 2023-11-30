import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import Services from "../services/Services";
// import { ProductList } from "../components/UI/ProductsList";
// import ProductsList from "../components/UI/ProductsList";
import ProductsList from "../components/UI/ProductsList";
import Helmet from "../components/Helmet/Helmet";
import products from "../assets/data/products";
import { useState, useEffect } from "react";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

import "../styles/home.css";

export const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter((item) => item.disc > 0);

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col lg="6" md="6" className="d-flex align-items-center">
              <div className="hero-content text-center">
                <p className="hero-subtitle">Trending Products in {year}</p>
                <h2>Make Your Home More Fun</h2>
                <p>
                  Our furniture styles are a harmonious blend of modern
                  aesthetics and timeless elegance, creating pieces that
                  seamlessly integrate with diverse interior designs.
                </p>
                <button className="buy-btn">
                  <Link className="btn" to="/shop">
                    Shop Now
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero-img">
                <img src={heroImg} alt="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />

      <section className="trending-products">
        <Container className="mx-auto text-center">
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title py-5">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container className="d-flex align-items-center justify-content-center">
          <Row className="align-items-center">
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h1 className="timeSection fs-6 mb-3 px-5">Limited Offers</h1>
                <h1 className="timeSection fs-5 mb-3 ">Quality Armchair</h1>
              </div>
              <Clock />
              <button className="buy-btn store-btn mt-3">
                <Link className="btn" to="/shop">
                  Visit Store
                </Link>
              </button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt=""></img>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="best-sales">
        <Container className="mx-auto">
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title py-5">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      {/* <section className="new-arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title py-5">New Arrivals</h2>
            </Col>
            <ProductsList data={wirelessProducts} />
            <ProductsList data={mobileProducts} />
          </Row>
        </Container>
      </section> */}

      {/* <section className="popular-category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title py-5">Popular Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};
