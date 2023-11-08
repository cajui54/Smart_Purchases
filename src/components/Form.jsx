import React from 'react'
import {BsCart4} from 'react-icons/bs';
import * as Style from "./Form.css.js";
import ShowResults from './ShowResults.jsx';
import ContainerInputs from './ContainerInputs.jsx';


const Form = () => {
  return (
    <Style.Form>
      <Style.Titles>
        <BsCart4/>
        <h2>Smart Purchases</h2>
        <h3>Suas compra sobre controle:</h3>
    </Style.Titles>

      <ShowResults/>
      <ContainerInputs/>
    </Style.Form>
  )
}

export default Form
