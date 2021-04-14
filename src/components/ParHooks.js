import React from "react";
import styled from "styled-components";
import "../styles/ParHooks.scss";

const ContentHeading = styled.div`
  display: flex;
  justify-content: center;
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  margin-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

function ParHooks() {
  return <ContentHeading></ContentHeading>;
}

export default ParHooks;
