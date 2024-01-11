import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:disabled {
        background-color: #ff0303;
    }.invalid {
        background: red;
    }.error {
        color: red;
    }

    &:disabled:hover{
        cursor: not-allowed;
    }

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`