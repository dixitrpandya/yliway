import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OpenPositions from "@/components/OpenPositions";
import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWork";
import Team from "@/components/Team";
import React, { useState, useRef, useEffect } from "react";
import * as Scroll from "react-scroll";
import MissionVision from "@/components/MissionVision";
import AboutUs from "@/components/AboutUs";

let Element = Scroll.Element;

export default function Home() {
  const [height, setHeight] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    const heroHeight = ref.current && ref.current.clientHeight;
    setHeight(heroHeight);
  }, []);

  return (
    <>
      <Head>
        <title>YLIWAY</title>
        <meta name="description" content="YLIWAY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Element name="home">
        <Header heroHeight={height} />
      </Element>
      <Hero />
      <Element name="about">
        <AboutUs />
      </Element>
      <Element name="missionvision">
        <MissionVision />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="howwework">
        <HowWeWork />
      </Element>
      <Element name="openposition">
        <OpenPositions />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </>
  );
}
