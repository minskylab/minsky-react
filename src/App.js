import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import Board from "./components/Board";
import Message from "./components/Message";
import Options from "./components/Options";

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

const App = () => {
    const [content, setContent] = useState([]);

    const [inputBlocked, setInputBlocked] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const m = content[content.length-1];
        if (m) {
            const isABotMessage = m.props.bot;
            if (!isABotMessage) {
                getResponseByMessage(m.props.text);
            }
        }
    }, [content]);


    const getResponseByMessage = (message) => {
        const rnd = Math.random();
        const totalTimeout = rnd*700 + 500;

        setInputBlocked(true);
        // Emulating request
        setTimeout(() => {
            if (message === "?") {
                newOptionsChoose([{text: "Hello"}, {text: "World"}]);
            }else{
                newMessage("42", true);
            }
            setInputBlocked(false);

        }, totalTimeout)

    };

    const onToggleCollapse = () => {
        if (collapsed) {
            setCollapsed(false);
        }else{
            setCollapsed(true);
        }
    };

    const newMessage = (message, botResponse= false) => {
        console.log(message);
        const m = content[content.length-1];
        const cont = m?!m.props.bot:true;

        setContent([
            ...content,
            <Message text={message} continue={cont} bot={botResponse}/>
        ]);
    };

    const onOptionSelected = (opt) => {
        newMessage(opt.text);
    };

    const newOptionsChoose = (options) => {
        console.log(options);
        setContent([
            ...content,
            <Options options={options} onOptionSelected={onOptionSelected} bot/>
        ]);
    };

    return (
        <CenteredComponentY>
           <CenteredComponentX>
               <Board
                   content={content}
                   inputBlocked={inputBlocked}
                   onNewMessage={newMessage}
                   collapsed={collapsed}
                   onCollapse={onToggleCollapse}
                   onOptionSelected={(opt)=>newMessage(opt.text)}
               />
           </CenteredComponentX>
        </CenteredComponentY>
    );
};

export default App;
