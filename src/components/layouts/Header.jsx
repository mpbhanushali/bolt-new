import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
       <span style={{ fontWeight: 600, color: 'white', marginRight: '5px'}}>Walmart</span> <img
          src="https://i5.walmartimages.com/dfw/63fd9f59-14e2/9d304ce6-96de-4331-b8ec-c5191226d378/v1/spark-icon.svg"
          alt="Walmart"
          className="logo"
        />
      </div>
      <div className="header-cart">
        <span className="cart-icon">🛒</span>
      </div>
    </header>
  );
};

export default Header;
