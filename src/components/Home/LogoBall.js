import React from "react";
import classes from "../../styles/CommitteesSection.module.css";

function LogoBall({ logo, alt }) {
  return (
    <div className="wow animate__animated animate__fadeInDown">
      <div className={classes.logoBorderAnim}>
        <img
          className={classes.logoBall}
          width="250"
          height="250"
          src={logo}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default LogoBall;
