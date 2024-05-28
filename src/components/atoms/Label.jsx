import styled from "styled-components";

const LabelStyled = styled.label`
    font-weight: 600;
    font-size: 20px;
    color:black;
    background-color: aliceblue;


`;

function Label(props) {
    return(
        <LabelStyled>{props.text}</LabelStyled>
    )
}

export default Label;