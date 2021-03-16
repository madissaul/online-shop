import React from "react";
import "./homepage.style.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 classname="title">HATS</h1>
          <span classname="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 classname="title">Jackets</h1>
          <span classname="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 classname="title">Sneakers</h1>
          <span classname="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 classname="title">Womens</h1>
          <span classname="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 classname="title">Mens</h1>
          <span classname="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
