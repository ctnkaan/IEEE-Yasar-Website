import React from "react";
import classes from "../../styles/CommitteesSection.module.css";

function LogoBall({ logo, alt, animationType }) {
  return (
    <div
      className={`wow animate__animated animate__${animationType}`}
      data-wow-delay="0.4s"
    >
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
