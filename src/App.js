import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import Board from "./components/Board";
import Message from "./components/Message";

const CenteredComponentX = styled.div`
  width: 100%;
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
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const m = messages[messages.length-1];
        if (m) {
            const isABotMessage = m.props.bot;
            if (!isABotMessage) {
                getResponseByMessage(m.text);
            }
        }
    }, [messages]);


    const getResponseByMessage = (message) => {
        const rnd = Math.random();
        const totalTimeout = rnd*700 + 500;
        // console.log(totalTimeout);

        setTimeout(() => {
            newMessage("42", true)
        }, totalTimeout)
    };


    const newMessage = (message, botResponse= false) => {
        console.log(message);
        const m = messages[messages.length-1];
        const cont = m?!m.props.bot:true;

        setMessages([
            ...messages,
            <Message text={message} continue={cont} bot={botResponse}/>
        ]);
    };

    return (
        <CenteredComponentY>
           <CenteredComponentX>
               <Board messages={messages} onNewMessage={newMessage}/>
           </CenteredComponentX>
        </CenteredComponentY>
    );
};

export default App;
