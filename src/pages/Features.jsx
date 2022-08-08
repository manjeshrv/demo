import React from "react";
import Hero from "../components/Hero";
import bgImg from "./../img/register-bg.jpg";
import {
  FeatureCard,
  FeatureCardContent,
  FeatureCardImg,
} from "./../styles/FeaturesStyled";
import { Container } from "./../styles/Container";
import featuresData from "./FeatureData";

const Features = () => {
  const description =
    "Spread over 4000 sqft, NIS is equipped with all safety measures to provide children plenty of room for free movement";

  return (
    <>
      <Hero bgImg={bgImg} description={description} />
      <section>
        <Container>
          {featuresData.map((item, i) => (
            <FeatureCard
              reverse={i === 0 ? false : i % 2 !== 0}
              key={item.title}
            >
              <FeatureCardImg>
                <img src={item.img} alt="demo one" />
              </FeatureCardImg>
              <FeatureCardContent>
                <h4>{item.title}</h4>
                <ul>
                  {item.content.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
              </FeatureCardContent>
            </FeatureCard>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Features;
