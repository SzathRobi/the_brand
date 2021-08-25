import React from "react";
import styles from "../../styles/controls/button.module.scss";

function Button({ children, className, style, onChange }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      style={style}
      onChange={onChange}
    >
      {children}
    </button>
  );
}

export default Button;
