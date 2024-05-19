import React from "react";
import classes from "./HeroBanner.module.scss";
import Header from "../../component/Header/Header";
import img1 from "../../asset/food.png";

const HeroBanner = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Header />
        <div className={classes.heroBannerImageContainer}>
          <div className={classes.heroBannerWrapper}>
            <div className={classes.overlay}></div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-an-arrangement-of-various-indian-food-image_2683809.jpg"
              alt=""
              width="100%"
              className={classes.heroBannerImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
