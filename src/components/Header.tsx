import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../icons/logo.svg";

export const Header: FC = (): React.ReactElement => (
  <StyledHeader>
    <a href="/">
      <StyledLogo />
    </a>
  </StyledHeader>
);

const StyledHeader = styled.header`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 25px 0;
`;

const StyledLogo = styled(Logo)`
  width: 185px;
  height: 40px;
`;
