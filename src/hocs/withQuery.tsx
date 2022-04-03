import React, { FC, ReactElement } from "react";
import styled from "styled-components";

export interface IWithQueryProps {
  loading: boolean;
  error: Error;
}

export function withQuery<T extends IWithQueryProps = IWithQueryProps>(
  Component: React.ComponentType<T>
): FC<any> {
  return ({ loading, error, ...props }): ReactElement => {
    return (
      <>
        {loading ? (
          "Loading..."
        ) : error ? (
          <StyledError>{error}</StyledError>
        ) : (
          <Component {...props} />
        )}
      </>
    );
  };
}

const StyledError = styled.p`
  margin: 0;
  padding: 10px;
  background-color: red;
  color: var(--primary-background-color);
`;
