const {useState, useEffect} = React;

const App = (props) => {
  const [userValue, setUserValue] = useState(props.value);
  const [calculatedCurrency, setCalculatedCurrency] = useState('________');
  const [currency, setCurrency] = useState();
  const [dataCurrencies, setDataCurrencies] = useState();
  

    useEffect(() => {
      fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                        .then(response => response.json())
                        .then(json => setDataCurrencies(json));
  }, []);
  
  useEffect(() => {
    onCurrency(currency);
  }, [userValue]);
  
  function onCurrency(currency) {
    if (currency && currency.length === 3) {
      setCalculatedCurrency((userValue / dataCurrencies.Valute[currency].Value).toFixed(2));
      setCurrency(currency);
    }
  }
  
    function onUserValue(e) {
    setUserValue(event.target.value);

  }
  
  return (
    <div class="app">
      <input type="number" placeholder="Введите сумму в рубдях" class="user-input" onChange={(event) => onUserValue(event.target.value)} />
      <div class="text">Вы ввели {userValue} RUR</div>
      <div class="counter"><span>А это:</span>{calculatedCurrency} {currency}</div>
      <div class="controls" onClick={(event) => onCurrency(event.target.innerText)}>
        <button>USD</button>
        <button>EUR</button>
        <button>AUD</button>
        <button>GBP</button>
      </div>
    </div>
  )

}

ReactDOM.render(<App value={0}/>, document.getElementById('app'));