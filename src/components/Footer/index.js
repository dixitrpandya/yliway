import Image from "next/image";
import * as Scroll from "react-scroll";
import React from "react";
import Container from "../Container";

let ScrollLink = Scroll.Link;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <div className="row">
            <div className="footer__logo">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
            </div>
            <div className="footer__links">
              <div className="footer__linksBlock">
                <ul>
                  <li>
                    <ScrollLink
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      HOME
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      ABOUT US
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="team"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      OUR TEAM
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="howwework"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      HOW WE WORK
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      CONTACT
                    </ScrollLink>
                  </li>
                </ul>
              </div>
              <div className="footer__linksBlock">
                <div className="footer__title">HEADQUARTERS</div>
                <p>
                  YLIWAY <br /> Via Cassia, <br /> 1081 00189 Rome (Italy)
                </p>
                <p>
                  Phone : +00 123 456 78 <br />
                  Mail : meera@yliway.com
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
