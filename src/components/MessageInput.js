import React, {useState} from 'react';
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
    :hover {
      cursor: pointer;
    }
  //width: 2rem;
  //height: 2rem;
`;

const MessageInput = (props) => {
    const [message, setMessage] = useState("");

    const sendMessageAndClear = () => {
        if (message === "") return;

        if (props.onEnter) {
            props.onEnter(message);
        }
        setMessage("")
    };

    return (
        <InputContainer>
            <Input placeholder={"Type your Message here"}
                   onKeyPress={(e)=>e.key==="Enter"?sendMessageAndClear():null}
                   value={message}
                   onChange={e=>setMessage(e.target.value)}
            />
            <SendButton onClick={() => sendMessageAndClear()}>
                <img src={sendIcon} width={"auto"} height={24} style={{"vertical-align": "middle"}}/>
            </SendButton>

        </InputContainer>
    );
};

export default MessageInput;