import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addValueToSpend, calculatePurcharses, resetValues } from '../redux/purchases/slicePurchases';
import {AiOutlinePlusSquare, AiOutlineClear} from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import * as Style from './Input.css';

const ContainerInputs = () => {
    const [input, setInput] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const dispatch = useDispatch();
    
    const handleSubmitAddValue = (event) => {
        event.preventDefault();
        
        if(input) {
            const { valueSpend } = input;
            dispatch(addValueToSpend(parseFloat(valueSpend.value))); 
            valueSpend.value = '';
            setInput(null);
            setOpenForm(true);
        }

    }

    const checkInputs = ({price, amount}) => {
        
        if(amount) {
            return {
                [price.name]: price.value,
                [amount.name] : amount.value,
            }
        } else {
            return {
                [price.name]: price.value,
                'amount' : 1,
            }
        }

    }

    const resetInputs = ({price, amount}) => {
        price.value = '';
        if(amount) amount.value = 1;
        setInput(null);
    }

    const handleSubmitPurchases = (event) => {
        event.preventDefault();
        try {
            dispatch(calculatePurcharses(checkInputs(input)));

            resetInputs(input);
        } catch (error) {
            window.alert(`Ocorreu um erro inesperado! \n ${error}`);
        } 
    }
    const resetAll = () => {
        dispatch(resetValues());
        setOpenForm(false);
    }


  return (
    <Style.InputContainer>

        <form onSubmit={handleSubmitAddValue}>
            <label>
                <span>Valor para gastar:</span>
                <input type="number"
                 name='valueSpend'
                 required min={0}
                 placeholder='0.00'
                 onChange = {({target}) =>setInput({[target.name]: target})}
                />

            </label>
            <button title='adicionar valor'><AiOutlinePlusSquare/></button>
        </form>

       {
        openForm && (
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
                <button type='submit'><BsCartPlus/>Adicionar</button>
                <button type='reset' onClick={resetAll}><AiOutlineClear/>Reset</button>
            </form>
        )
       }
    </Style.InputContainer>
  )
}

export default ContainerInputs
