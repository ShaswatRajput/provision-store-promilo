import React, { useEffect, useState } from "react";
import ShopBanner from "../common/ShopBanner";
import "../../styles/pages/ProductPage.css";
import Card from "../common/Card";
import Footer from "../Layout/Footer";
import axios from "axios";

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const accessToken = sessionStorage.getItem("accessToken");

  const handleSearch = () => {
    const regex = new RegExp(searchTerm, "i");
    const filteredProducts = allProducts.filter((product) =>
      regex.test(product.productCategory.productCategoryName)
    );

    setDisplayedProducts(filteredProducts);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        if (!accessToken) {
          throw new Error("Couldn't get accessToken");
        }
        const response = await axios.get(
          "https://api.kalpav.com/api/v1/product/category/retail",
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );

        setAllProducts(response.data.response);
        setDisplayedProducts(response.data.response);
      } catch (error) {
        console.error("Error fetching product list", error);
      }
    };

    fetchProductList();
  }, []);
  return (
    <>
      {accessToken ? (
        <div>
          <ShopBanner />
          <div className="search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchTermChange}
              onKeyPress={handleKeyPress}
              placeholder="Tell us what you want..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="main-container">
            <div className="product-container">
              {displayedProducts ? (
                displayedProducts.map((data) => (
                  <Card
                    key={data.productCategory.productCategoryId}
                    product={data}
                  />
                ))
              ) : (
                <h1>No Products Found</h1>
              )}
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <h1 className="no-login">
          Opps! We couldn't Verify you, Please LOGIN to access Products Page.
        </h1>
      )}
    </>
  );
};

export default ProductPage;
