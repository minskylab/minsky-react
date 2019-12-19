import React from 'react';
import styled from "styled-components";

const SeparatorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
`;

const SeparatorInner = styled.div`
  width: 100%;
  //height: 0.1rem;
  border: solid rgb(29,29,45) 0.5px;
  background: rgb(29,29,45);
  opacity: 0.1;
  background: radial-gradient(circle, rgba(29,29,45,1) 16%, rgba(29,29,45,0.8449754901960784) 53%, rgba(255,255,255,0) 100%);
`;


const Separator = () => (
    <SeparatorContainer>
        <SeparatorInner/>
    </SeparatorContainer>
);

export default Separator;