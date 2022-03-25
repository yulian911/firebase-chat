import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <ContainerView>{children}</ContainerView>;
};

export default Container;

const ContainerView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: "center";
  padding-top: 100px;
`;
