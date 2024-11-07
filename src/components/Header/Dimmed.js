import React from "react";

import styled from "styled-components";

const Dimmer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 40;
`;

const Dimmed = ({ setFunc }) => {
  return <Dimmer onClick={() => setFunc(false)} />;
};

export default Dimmed;
