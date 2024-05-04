import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Craving satisfied, lives simplified. We deliver deliciousness from
          your favorite local spots, straight to your doorstep. Skip the hassle,
          savor the flavor - Yumway it!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
