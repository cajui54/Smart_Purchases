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
        margin: 10px auto;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 15px 5px;
        position: relative;
    }
    div span {
        color: #fff;
        font-weight: bold;
        position: absolute;
        bottom: 40px;
        font-size: 15px;
    }
    div svg {
        font-size: 25px;
        margin-left: 10px;
        color: #34d399;
    }
    div p {
        font-size: 1.5rem;
        letter-spacing: .2rem;
        font-weight: bold;
    }
    div:nth-child(1) p { 
        color: ${(props) => checkWitchColor(props.value)};
    }
    div:nth-child(2) p {
        color: #f43f5e;
    }
`;