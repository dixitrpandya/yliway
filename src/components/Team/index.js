import Image from "next/image";
import React from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

const TEAMS = [
  {
    img: "/team1.png",
    position: "Chief Operating Officer",
    name: "Gustavo Povet",
    info: "Vivamus lectus arcu, commodo sed turpis sit amet, consectetur dapibus massa.",
  },
  {
    img: "/team2.png",
    position: "Digital Strategist",
    name: "Emily Valverde",
    info: "Vivamus lectus arcu, commodo sed turpis sit amet, consectetur dapibus massa.",
  },
  {
    img: "/team3.png",
    position: "Chief Operating Officer",
    name: "Gustavo Povet",
    info: "Vivamus lectus arcu, commodo sed turpis sit amet, consectetur dapibus massa.",
  },
  {
    img: "/team4.png",
    position: "Emily Valverde",
    name: "Gustavo Povet",
    info: "Vivamus lectus arcu, commodo sed turpis sit amet, consectetur dapibus massa.",
  },
];

export default function Team({}) {
  return (
    <section className="team">
      <Container>
        <SectionHeader
          subText="OUR TEAM"
          title={"PROFESSIONAL <span class='text-purple d-block'>TEAM</span>"}
        ></SectionHeader>
        <div className="row team-row">
          {TEAMS.map((t, index) => (
            <div className="col-12 col-xl-3 col-md-6" key={index}>
              <div className="team-item">
                <div className="team-img">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={254}
                    height={259}
                    priority
                  />
                </div>
                <div className="team-role">{t.position} </div>
                <div className="team-name">{t.name}</div>
                <div className="team-info">{t.info} </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
