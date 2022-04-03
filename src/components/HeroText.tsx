import React, { FC, ReactElement } from "react";
import styled from "styled-components";

export const HeroText: FC = (): ReactElement => (
  <StyledHeroContainer>
    <StyledHeroHeading>
      Now you can track
      <br />
      all your cryptos here!
    </StyledHeroHeading>
    <StyledHeroSubheading>
      Just enter the
      <br />
      cryptocurrency code on the
      <br />
      form to the right
    </StyledHeroSubheading>
  </StyledHeroContainer>
);

const StyledHeroContainer = styled.div`
  max-width: 420px;
`;

const StyledHeroHeading = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
  padding: 30px 0 20px;
`;

const StyledHeroSubheading = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.6em;
  margin: 0;
  padding: 0;
  opacity: 0.5;
`;
