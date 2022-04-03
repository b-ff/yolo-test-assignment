import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({
  children,
}: LayoutProps): ReactElement => (
  <>
    <StyledSection>
      <Header />
      <Main>{children}</Main>
    </StyledSection>
    <Footer />
  </>
);

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;

  &:before {
    position: absolute;
    display: block;
    content: " ";
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    margin-right: -70%;
    background-image: url("./images/bg.png");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }
`;
