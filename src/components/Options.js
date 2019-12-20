import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  justify-content: center;
  cursor: pointer;
`;

const Option = styled.div`
  border-radius: 4rem;
  background-color: #12e9c25a;
  border: solid 0.05rem #12e9c2;
  padding: 0.3rem 0.5rem;
  margin: 0 0.2rem;
  color: #1d1d2d;
`;

const Options = (props) => {
    const options = props.options?props.options:[];

    const onOptionSelected = (opt) => {
        if (props.onOptionSelected) {
            props.onOptionSelected(opt);
        }
    };

    return (
        <Container>
            {options.map((opt, i) => {
                return <Option key={i} onClick={() => onOptionSelected(opt)}>{opt.text}</Option>
            })}
        </Container>
    );
};

export default Options;