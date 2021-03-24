import React from "react";
import classes from "../../styles/CommitteesSection.module.css";
import { Link } from "react-router-dom";
function LogoBall({ logo, alt, toSlug, animationType }) {
  return (
    <Link
      className={`wow animate__animated animate__${animationType}`}
      data-wow-delay="0.2s"
      to={toSlug && `/society/${toSlug}`}
      style={{ color: "inherit" }}
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
    </Link>
  );
}

export default LogoBall;
