import React, { useState } from "react";
import classes from "../../styles/CommitteesSection.module.css";
import { Link } from "react-router-dom";
function LogoBall({ logo, alt, toSlug, animationType }) {
  const [isHovering, setIsHovering] = useState(false);
  const [oneTimeOnlyFlag, setOneTimeOnlyFlag] = useState(true);
  return (
    <Link
      className={`wow animate__animated animate__${
        isHovering ? "flip" : oneTimeOnlyFlag && animationType
      }`}
      to={toSlug && `/society/${toSlug}`}
      style={{ color: "inherit" }}
      onMouseEnter={() => {
        if (!isHovering) {
          setIsHovering(true);
          setOneTimeOnlyFlag(false);
        }
      }}
      onMouseLeave={() => {
        if (isHovering) {
          setIsHovering(false);
          setOneTimeOnlyFlag(false);
        }
      }}
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
