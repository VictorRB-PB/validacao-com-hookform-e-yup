import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    button:disabled {
        cursor: not-allowed;
        opacity: -4;
    }.invalid {
        background: red;
    }.error {
        color: red;
    }

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`