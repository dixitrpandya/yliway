import Image from "next/image";
import React from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

const DATA = [
  {
    img: "/icon1.svg",
    name: "Jackie Cheung 1",
    title: "Dicta Sunt Explicabo",
    desc: "Donec accumsan, erat in suscipit viverra, massa purus dignissim sapien, interdum convallis leo magna vel quam. In massa felis, gravida in eros in, ultricies vehicula ex.",
  },
  {
    img: "/icon3.svg",
    name: "Jackie Cheung 2",
    title: "Dicta Sunt Explicabo",
    desc: "Donec accumsan, erat in suscipit viverra, massa purus dignissim sapien, interdum convallis leo magna vel quam. In massa felis, gravida in eros in, ultricies vehicula ex.",
  },
  {
    img: "/icon2.svg",
    name: "Jackie Cheung 3",
    title: "Dicta Sunt Explicabo",
    desc: "Donec accumsan, erat in suscipit viverra, massa purus dignissim sapien, interdum convallis leo magna vel quam. In massa felis, gravida in eros in, ultricies vehicula ex.",
  },
];

export default function HowWeWork({}) {
  return (
    <section className="how-we-work">
      <Container>
        <SectionHeader
          sectionClassName={"text-center"}
          subText={"HOW WE WORK"}
          title={
            "FROM YOUR PROBLEM <span class='text-purple d-block'> TO SUSTAINABLE SOLUTION</span>"
          }
        >
          <div className="row">
            <div className="col-12 col-xl-8 col-lg-10 mx-auto">
              <div className="how-subtext">
                Mauris consectetur sodales volutpat. Suspendisse potenti. Sed
                dapibus est ut magna egestas tincidunt. Vivamus a ligula vitae
                lacus venenatis mollis vitae vitae augue.
              </div>
            </div>
          </div>
        </SectionHeader>
        <div className="how-row">
          <div className="row">
            {DATA.map((d) => (
              <div className="col-12 col-md-4" key={d.name}>
                <div className="how-item text-center">
                  <div className="how-icon">
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={162}
                      height={162}
                      priority
                    />
                  </div>
                  <div className="how-name">{d.name}</div>
                  <div className="how-title">{d.title}</div>
                  <div className="how-desc">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
