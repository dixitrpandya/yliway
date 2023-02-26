import React, { useState } from "react";
import * as Scroll from "react-scroll";
import Button from "../Button";

import styles from "./Nav.module.scss";

let ScrollLink = Scroll.Link;

export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  function handleToggle() {
    setToggleNav(!toggleNav);
  }
  const toggle = toggleNav ? styles.navIsShow : "";

  return (
    <nav className={`${styles.nav} ${toggle}`}>
      <Button className={`nav__btnToggle`} onClick={handleToggle}>
        <i className={styles.nav__btnToggleIcon}></i>
      </Button>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <ScrollLink
            className={styles.nav__link}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setToggleNav(false)}
          >
            ABOUT
          </ScrollLink>
        </li>
        <li className={styles.nav__item}>
          <ScrollLink
            className={styles.nav__link}
            to="missionvision"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setToggleNav(false)}
          >
            MISSION & VISION
          </ScrollLink>
        </li>
        <li className={styles.nav__item}>
          <ScrollLink
            className={styles.nav__link}
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setToggleNav(false)}
          >
            OUR TEAM
          </ScrollLink>
        </li>
        <li className={styles.nav__item}>
          <ScrollLink
            className={styles.nav__link}
            to="openposition"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setToggleNav(false)}
          >
            OPEN POSITION
          </ScrollLink>
        </li>
        <li className={styles.nav__item}>
          <ScrollLink
            className={styles.nav__link}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setToggleNav(false)}
          >
            CONTACT
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
