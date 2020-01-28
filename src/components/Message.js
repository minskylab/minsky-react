import React from "react";
import styled, { css } from "styled-components";

const normalRound = "0.8rem";
const noneRound = "0.4rem";

const fromNone = `${normalRound} ${normalRound} ${normalRound} ${normalRound}`;
const fromLeftTop = `${noneRound} ${normalRound} ${normalRound} ${normalRound}`;
const fromLeftBottom = `${normalRound} ${normalRound} ${normalRound} ${noneRound}`;
const fromRightTop = `${normalRound} ${noneRound} ${normalRound} ${normalRound}`;
const fromRightBottom = ` ${normalRound} ${normalRound} ${noneRound} ${normalRound}`;

const MessageContainer = styled.div`
  width: 100%;
  display: flex;
`;

const MessageBody = styled.div`
  background-color: ${props => (props.bot ? "#efefef" : "#ffdf53")};
  max-width: 80%;
  padding: 0.5rem 0.8rem;
  
  margin-top: ${props => (props.continue ? "0.2rem" : "0.6rem")};
  //margin-bottom: ${props => (props.continue ? "0.2rem" : "0.6rem")};;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  color: ${props => (props.bot ? "#1d1d2d" : "#1d1d2d")};
  //color: ${props => (props.bot ? "#1d1d2d" : "#1d1d2d")};
  ${props => {
    if (!props.bot) {
      if (props.from === "top") {
        return css`
          margin-left: auto;
          border-radius: ${fromRightTop};
        `;
      } else if (props.from === "none") {
        return css`
          margin-left: auto;
          border-radius: ${fromNone};
        `;
      }
      return css`
        margin-left: auto;
        border-radius: ${fromRightBottom};
      `;
    } else {
      if (props.from === "top") {
        return css`
          border-radius: ${fromLeftTop};
        `;
      } else if (props.from === "none") {
        return css`
          border-radius: ${fromNone};
        `;
      }
      return css`
        border-radius: ${fromLeftBottom};
      `;
    }
    // return css`margin-left: auto;`;
  }}
`;

const Message = props => {
  return (
    <MessageContainer>
      <MessageBody bot={props.bot} from={props.from} continue={props.continue}>
        {props.text}
      </MessageBody>
    </MessageContainer>
  );
};

export default Message;
