import styled from "styled-components";

export const Form = styled.div`
    width: 80%;
    min-height: 300px;
    margin: 150px auto;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #1e293b;

    @media screen and (min-width: 500px) {
        width: 300px; 
    }
`;

export const Titles = styled.div`
    margin: 30px auto;
    text-align: center;
    svg {
        transform: scale(4);
    }
    h2 {
        margin-top: 20px;
        font-size: 1.4rem;
        color: #34d399;
    }
    h3 {
        color: #94a3b8;
        font-size: .8rem;
    }
`;