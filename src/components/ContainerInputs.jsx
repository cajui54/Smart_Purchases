import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addValueToSpend, calculatePurcharses } from '../redux/purchases/slicePurchases';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import * as Style from './Input.css';
const ContainerInputs = () => {
    const [input, setInput] = useState(null);
    const dispatch = useDispatch();
    
    const handleSubmitAddValue = (event) => {
        event.preventDefault();
        
        if(input) {
            const { valueSpend } = input;
            dispatch(addValueToSpend(parseFloat(valueSpend.value))); 
            valueSpend.value = '';
            setInput(null);
        }

    }

    const handleSubmitPurchases = (event) => {
        event.preventDefault();

        if(input) {
            const { price, amount } = input;
              
            dispatch(calculatePurcharses({[price.name]: parseFloat(price.value), [amount.name]: parseFloat(amount.value)}));
            price.value = '';
            amount.value = '';
            setInput(null);
        }
    }
    
  return (
    <Style.InputContainer>

        <form onSubmit={handleSubmitAddValue}>
            <label>
                <span>Valor em Caixa:</span>
                <input type="number"
                 name='valueSpend'
                 required min={0}
                 placeholder='0.00'
                 onChange = {({target}) =>setInput({[target.name]: target})}
                />

            </label>
            <button><AiOutlinePlusSquare/></button>
        </form>

        <form onSubmit={handleSubmitPurchases}>
            <div>
                <label>
                    <span>Valor Produto:</span>
                    <input type="number"
                     name='price'
                     required min={0}
                     placeholder='0.00'
                     onChange = {({target}) =>setInput({...input, [target.name]: target})}
                     step='.01'
                     autoComplete='off'
                    />
                </label>

                <label>
                    <span>Quant:</span>
                    <input type="number"
                     name='amount'
                     required min='1'
                     placeholder='0'
                     onChange = {({target}) =>setInput({...input, [target.name]: target})}
                     autoComplete='off'
                     defaultValue='1'
                    />
                </label>
            </div>
            <button><BsCartPlus/>Adicionar</button>
        </form>
    </Style.InputContainer>
  )
}

export default ContainerInputs
