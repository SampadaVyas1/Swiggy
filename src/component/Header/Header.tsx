import React from "react";
import classes from "./header.module.scss";
import { headerData } from "./header.data";
const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerTitle}>Swiggy</div>
      <div className={classes.tab}>
        {headerData?.map((element) => {
          return <>{element.name}</>;
        })}
      </div>
    </div>
  );
};

export default Header;
