

const App = (props) => {
    //значение, которое выводится
    const [currency, setCurrency] = React.useState();
    //значение, которое вводим
    const [userValue, setUserValue] = React.useState(props.value);
    //математические вычисления
    const [calculatedCurrency, setCalculatedCurrency] = React.useState('________');
    //запросы из сервера
    const [dataCurrencies, setDataCurrencies] = React.useState();
  

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
        <input type="number" placeholder="Введите сумму в рублях" class="user-input" onChange={(event) => onUserValue(event.target.value)} />
        <div class="text">Вы ввели {userValue} RUB</div>
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