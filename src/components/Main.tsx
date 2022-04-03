import React, { FC, ReactElement } from "react";
import styled from "styled-components";

type MainProps = {
  children: React.ReactNode;
};

export const Main: FC<MainProps> = ({ children }: MainProps): ReactElement => (
  <StyledMain>{children}</StyledMain>
);

const StyledMain = styled.main`
  flex: 1;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  background-image: url("images/figure.png");
  background-position: 50% 100%;
  background-size: 55vh;
  background-repeat: no-repeat;
`;
