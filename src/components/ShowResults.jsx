import React from 'react';
import {GiMoneyStack} from 'react-icons/gi';
import {BsCartDash} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import * as Style from './ShowResults.css';

const ShowResults = () => {
    const {currencyTotalBuy, currencyValue} = useSelector(({rootReducer}) => rootReducer.slicePurchases);

    const RealCurrency = new Intl.NumberFormat(
        'pt-br',
        {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        
  return (
    <Style.ShowResults value={currencyValue} > 
      <div>
        <span>Total em Caixa:</span>
        <GiMoneyStack/>
        <p>{RealCurrency.format(currencyValue)}</p>
      </div>

      <div>
        <span>Total Gasto:</span>
        <BsCartDash/>
        <p>{RealCurrency.format(currencyTotalBuy)}</p>
      </div>
    </Style.ShowResults>
  )
}

export default ShowResults
