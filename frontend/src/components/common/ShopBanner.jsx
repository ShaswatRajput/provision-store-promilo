import React from "react";

const ShopBanner = () => {
  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{ height: "70%", width: "100%", borderRadius: "30px" }}
      />
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p style={{ margin: "5px" }}>
        <b>
          This is Provision Store E-Com site where you will get best of
          everything.
        </b>
      </p>
      <p style={{ margin: "5px" }}>
        <b>
          Our price is unbeatable and quality is unmatched no matter where you
          look or buy.
        </b>
      </p>
    </div>
  );
};

export default ShopBanner;
