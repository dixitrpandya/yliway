import Image from "next/image";
import React from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

function AboutUs() {
  return (
    <section className="aboutus">
      <Container>
        <div className="row">
          <div className="col-12 col-lg-5">
            <SectionHeader
              subText={"WHY CHOOSE US"}
              title={"ABOUT <br />US"}
            ></SectionHeader>
            <div className="ab-content">
              YLIWAY is an innovative startup that was created with the aim of
              changing the way a profession is built, recruiting, matching job
              offer and demand and creating professional relationships
              worldwide. The platform is scheduled to go live in March 2023 in
              the Italian market, internationalisation will start in July 2023.
              The company offers a working environment where skills,
              organisation, teamwork and cutting-edge technology create
              innovative models.
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <Image
              src="/web-mockup.png"
              alt="YLIWAY"
              width={1200}
              height={750}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutUs;
