import { useState } from "react";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForWard,
  ArrowRight,
} from "./HeroSection.elements";
import { Button } from "../Elements/Button";
import video from "../../assets/video.mp4";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover((prevHover) => !prevHover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          neque fuga ipsum corporis! Possimus soluta placeat omnis.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForWard /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
