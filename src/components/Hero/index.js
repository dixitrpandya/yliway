import React from "react";
import Container from "../Container";
import Button from "../Button";

import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.heroContent}>
          <h1>YLIWAY</h1>
        </div>
        <div className={styles.heroVector}>
          <Image
            src="/hero-vector.png"
            alt="YLIWAY"
            width={700}
            height={649}
            priority
          />
        </div>
      </Container>
    </section>
  );
}
