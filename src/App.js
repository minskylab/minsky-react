import React from 'react';
import styled from "styled-components";

import Board from "./components/Board";

const CenteredComponentX = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  justify-content: center;
  `;

const CenteredComponentY = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  margin-top: auto;
  justify-content: center;
  `;

const  App = () => {
  return (
   <CenteredComponentY>
       <CenteredComponentX>
           <Board/>
       </CenteredComponentX>
   </CenteredComponentY>
  );
};

export default App;
