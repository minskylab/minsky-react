import React from 'react';
import styled from "styled-components";
import sendIcon from '../icons/arrow-forward-outline.svg';

const InputContainer = styled.div`
  width: 90%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  outline: none;
  :focus {
    outline: none;
  }
  
  border: none;
  
  font-family: 'Muli', sans-serif;
  font-size: 1rem;
  color: #1D1D2C;
  width: 80%;
`;

const SendButton = styled.div`
  //width: 2rem;
  //height: 2rem;
`;

const MessageInput = () => {
    return (
        <InputContainer>
            <Input placeholder={"Type your Message here"}/>
            <img src={sendIcon} width={"auto"} height={24} />
        </InputContainer>
    );
};

export default MessageInput;