import { FC, ReactElement } from "react";
import styled from "styled-components";

export const Footer: FC = (): ReactElement => (
  <StyledFooter>
    <StyledFooterInner>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
      ullamcorper risus, non interdum arcu. Fusce facilisis vitae tellus ac
      egestas. Curabitur vel interdum dui, a consectetur purus. In hac habitasse
      platea dictumst. Sed id lectus ac lorem interdum lobortis. Morbi iaculis
      quis tortor nec convallis. Donec vel nunc et erat fermentum vestibulum.
      Vivamus iaculis porttitor lacinia.
    </StyledFooterInner>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  background-color: var(--secondary-background-color);
  color: var(--secondary-font-color);
  font-size: 12px;
  line-height: 1.5em;
  font-weight: 300;
`;

const StyledFooterInner = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 60px 45px 40px;
`;
