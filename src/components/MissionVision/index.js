import Image from "next/image";
import React from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

function MissionVision() {
  return (
    <section className="mission-vision">
      <Container>
        <SectionHeader
          subText={"WHY CHOOSE US"}
          title={
            "OUR MISSION <span class='d-block text-purple'>OUR VISION</span>"
          }
        ></SectionHeader>
        <div className="mv-row">
          <div className="row">
            <div className="col-12 col-lg-4">
              Nulla ante risus, condimentum eu consectetur vel, facilisis ac
              nulla. Sed blandit nulla diam, in mattis nibh porta quis. Donec
              accumsan, erat in suscipit viverra, massa purus dignissim sapien,
              interdum convallis leo magna vel quam. In massa felis, gravida in
              eros in, ultricies vehicula ex. Praesent luctus non metus ac
              iaculis. Fusce quis rutrum diam. Mauris consectetur sodales
              volutpat. Suspendisse potenti. Sed dapibus est ut magna egestas
              tincidunt. Vivamus a ligula vitae lacus venenatis mollis vitae
              vitae augue. Praesent quis nisi malesuada, rutrum ante vitae,
              tempus quam. Cras egestas urna non egestas vestibulum.
            </div>
            <div className="col-12 col-lg-4">
              Nulla ante risus, condimentum eu consectetur vel, facilisis ac
              nulla. Sed blandit nulla diam, in mattis nibh porta quis. Donec
              accumsan, erat in suscipit viverra, massa purus dignissim sapien,
              interdum convallis leo magna vel quam. In massa felis, gravida in
              eros in, ultricies vehicula ex. Praesent luctus non metus ac
              iaculis. Fusce quis rutrum diam.
            </div>
            <div className="col-12 col-lg-4">
              Donec accumsan, erat in suscipit viverra, massa purus dignissim
              sapien, interdum convallis leo magna vel quam. In massa felis,
              gravida in eros in, ultricies vehicula ex.
            </div>
          </div>
          <div className="mv-img">
            <Image
              src="/mission.png"
              alt="YLIWAY"
              width={637}
              height={746}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MissionVision;
