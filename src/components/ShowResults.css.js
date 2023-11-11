import styled from "styled-components";

const checkWitchColor = (value) => {
    const colorDefaut = '#34d399';

    return colorDefaut;
}

export const ShowResults = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    justify-content: space-around;

    div {
        background-color: #374151;
        height: 20px;
        width: 90%;
        margin: 5px auto;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
    }
    div span {
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        position: absolute;
        bottom: 22px;
        font-size: 10px;
    }
    div svg {
        margin-left: 10px;
    }
    div p {
        font-size: 1.2rem;
    }
    div:nth-child(1) p { 
        color: ${(props) => checkWitchColor(props.value)};
    }
    div:nth-child(2) p {
        color: #f43f5e;
        font-weight: bold;
        font-size: 14px;
    }
`;