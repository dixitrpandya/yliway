import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Container from "../Container";
import Nav from "../Nav";

import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header({ heroHeight }) {
  const [sticky, setSticky] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > heroHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight]);

  const isStikcy = sticky ? styles.headerFixed : "";

  return (
    <header className={`${styles.header} ${isStikcy}`} ref={ref}>
      <Container className={`${styles.container}`}>
        <Link href={"/"} className="header__logo">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Link>
        <Nav />
      </Container>
    </header>
  );
}
