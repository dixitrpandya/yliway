import React from "react";

import styles from "./Container.module.scss";

export default function Container({ className, children }) {
  const containerClass = className ? className : "";
  return (
    <div className={`${styles.container} ${containerClass}`}>{children}</div>
  );
}
