import React from "react";
import {
  HeroWrapper,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroDescription,
} from "./../styles/HeroStyles";

const Hero = props => {
  return (
    <HeroWrapper>
      <HeroContainer bgImg={props.bgImg}>
        {props.children}
        <HeroContent>
          <HeroTitle>{props.title}</HeroTitle>
          <HeroDescription>{props.description}</HeroDescription>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
