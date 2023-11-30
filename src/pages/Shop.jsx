import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductsList";
import "../styles/shop.css";
import { useState } from "react";
export const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [sortValue, setSortValue] = useState(null);
  const sortPrice = (e) => {
    const selectedValue = e.target.value;
    setSortValue(selectedValue);
    if (selectedValue === "ascending") {
      const filterProducts = products.sort((a, b) => a.price - b.price);
      setProductsData(filterProducts);
    }
    if (selectedValue === "descending") {
      const filterProducts = products.sort((a, b) => b.price - a.price);
      setProductsData(filterProducts);
    }
  };
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "table") {
      const filteredProducts = products.filter(
        (item) => item.category === "table"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "bed") {
      const filteredProducts = products.filter(
        (item) => item.category === "bed"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Living-room") {
      const filteredProducts = products.filter(
        (item) => item.category === "living-room"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "TV table") {
      const filteredProducts = products.filter(
        (item) => item.category === "TV table"
      );
      setProductsData(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by category</option>
                  <option value="sofa">Sofa</option>
                  <option value="table">Table</option>
                  <option value="chair">Chair</option>
                  <option value="bed">Bed</option>
                  <option value="Living-room">Living-room</option>
                  <option value="TV table">TV table</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={sortPrice}>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search....."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">"no products are found!"</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
