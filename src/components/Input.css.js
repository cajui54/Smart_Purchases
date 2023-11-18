import styled from "styled-components";

export const InputContainer = styled.div`
    width: 90%;
    margin: 20px auto;
    
    form {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px auto;
    }
    form label {
        display: inline-block;
        width: 100%;
        margin: 5px 10px;
        background-color: #374151;
        border-radius: 10px;
        position: relative;
        height: 40px;
    }
    form label span {
        color: #34d399;
        position: absolute;
        top: -10px;
        left: 10px;
        font-size: 15px;
    }
    form label input {
        background-color: transparent;
        margin-top: 5px;
        height: 70%;
        width: 90%;
        border-radius: 10px;
        border: none;
        padding-left: 15px;
        box-sizing: border-box;
        outline: none;
        color: #fff;
        letter-spacing: 1.5px;
        font-weight: bold;
        font-size: 20px;
    }
    form button {
        border-radius: 10px;
        padding: 5px;
        border: 1px solid #34d399;
        background-color: transparent;
        color: #34d399;
        cursor: pointer;
    }
    form button:hover { 
        background-color: #34d399;
        color: #fff;
    }
    form:nth-child(2) {
        display: flex;
        flex-direction: column;
    }
    form:nth-child(2) div {
        display: flex;
    }
    form:nth-child(2) div label:nth-child(1) {
        width: 80%;
    }
    form:nth-child(2) div label:nth-child(2) {
        width: 40%;
    }
    form:nth-child(2) div label:nth-child(2) input{
        text-align: center;
    }
    form:nth-child(2) button {  
        width: 90%;
        background-color: #34d399;
        color: #fff;
        font-weight: bold;
        padding: 9px 0;
        font-size: 15px;
    }
    form:nth-child(2) button svg { 
        margin-right: 10px;
    }
    form:nth-child(2) button:nth-child(2) { 
        margin-top: 15px;
    }
    form:nth-child(2) button:nth-child(3) { 
        margin-top: 10px;
        background-color: #fbbf24;
        border: none;
    }
    form:nth-child(2) button:nth-child(3):hover { 
        border: 1px solid #fbbf24;
        background-color: transparent;
        color: #fbbf24;
    }

    form:nth-child(2) button:hover {
        border: 1px solid #34d399;
        background-color: transparent;
        color: #34d399;
    }
`