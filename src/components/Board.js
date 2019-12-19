import React from 'react';
import styled from "styled-components";
import {chatBotAvatar} from "./ChatBotAvatar";
import Separator from "./Separator";
import Message from "./Message";
import MessageInput from "./MessageInput";

const Base = styled.div`
  background-color: white;
  width: 24rem;
  display: flex;
  flex-flow: column;
  
  border-radius: 0.8rem;
  //border: solid red 0.05rem;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.3);
  
`;

const Header = styled.div`
    //background-color: #12e9c2;
    background-color: white;
    padding: 0.5rem;
    display: flex;
`;

const BotAvatar = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100%;
  //background-color: #12e9c2;
  //background-color: white;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2.4rem;
`;

const BotDetails = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 1rem;
  justify-content: center;
  color: #1D1D2C;
`;

const FirstLine = styled.div`
 display: flex;
 vertical-align: text-bottom;
 font-weight: normal;
`;

const SecondLine = styled.div`

`;

const BotName = styled.h4`
  padding: 0;
  margin:0;
  font-weight: bold;
`;

const BotCompany = styled.h5`
  font-weight: normal;
  margin: 0 0 0 0.5rem;
  width: 100%;
  align-self: center;
  padding: 0.1rem 0 0;
`;

const BotTagLine = styled.h5`
  padding: 0;
  font-weight: normal;
  vertical-align: text-bottom;
  color: #1D1D2CAA;
  margin: 0.3rem 0 0;
`;

const Body = styled.div`
padding: 1rem 1.5rem;
//width: 100%;
`;

const Board = (props) => {
    return (
        <Base>
            <Header>
                <BotAvatar image={chatBotAvatar}/>
                <BotDetails>
                   <FirstLine>
                       <BotName>Marvin</BotName>
                       <BotCompany>from Minsky Labs</BotCompany>
                   </FirstLine>
                    <SecondLine>
                        <BotTagLine>Bot to help to understand how works minsky</BotTagLine>
                    </SecondLine>
                </BotDetails>
            </Header>
            <Separator/>
            <Body>
                {props.messages}
            </Body>
            <Separator/>
            <MessageInput onEnter={props.onNewMessage}/>
        </Base>
    );
};

export default Board;