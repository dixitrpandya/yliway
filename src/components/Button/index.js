import React from "react";

import styles from "./Button.module.scss";

export default function Button({
  className,
  children,
  type = "button",
  onClick = () => {},
}) {
  const buttonClass = className ? className : "";
  return (
    <button
      className={`${styles.button} ${styles[buttonClass]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
