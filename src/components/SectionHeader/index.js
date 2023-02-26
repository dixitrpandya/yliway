import React from "react";

import styles from "./SectionHeader.module.scss";

export default function SectionHeader({
  children,
  sectionClassName,
  title,
  titleClassName,
  subText,
}) {
  const sectionClass = sectionClassName ? sectionClassName : "";
  const titleClass = titleClassName ? titleClassName : "";
  return (
    <div className={`${styles.sectionHeader} ${sectionClass}`}>
      {subText && <p className={styles.sectionHeaderSubText}>{subText}</p>}
      {title && (
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className={`${styles.sectionHeaderTitle} ${titleClass}`}
        ></h2>
      )}
      {children}
    </div>
  );
}
