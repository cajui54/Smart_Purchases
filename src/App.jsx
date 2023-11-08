import { useSelector } from 'react-redux';
import Form from './components/Form';
import GlobalStyle from './Global.css';
function App() {
  const {currencyTotalBuy} = useSelector(({rootReducer}) => rootReducer.slicePurchases);

  return (
    <div>
      <GlobalStyle/>
      <Form/>
    </div>
  );
}

export default App;
