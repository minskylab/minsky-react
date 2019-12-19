import React, {useState} from 'react';
import styled from "styled-components";

import Board from "./components/Board";
import Message from "./components/Message";

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
    const [messages, setMessages] = useState([]);

    const newMessage = (message) => {
        console.log(message);
        const m = messages[messages.length-1];
        const cont = m?!m.props.bot:true;

        console.log(cont);

        setMessages([
            ...messages,
            <Message text={message} continue={cont}/>
        ])
        /*
        *  <Message text={"Hello World"} bot/>
                <Message text={"I'm Bregy"} continue/>
                <Message text={"I'm Bregy"} continue from={"none"}/>
                <Message text={"I'm Bregy"} continue from={"none"}/>
                <Message text={"I'm Bregy"} from={"top"}/>
                <Message text={"Hi Bregy, how are you?!"} bot continue/>
                <Message text={"Hi Bregy, how are you?!"} bot from={"top"} />
        * */
    }

    return (
        <CenteredComponentY>
           <CenteredComponentX>
               <Board messages={messages} onNewMessage={newMessage}/>
           </CenteredComponentX>
        </CenteredComponentY>
    );
};

export default App;
