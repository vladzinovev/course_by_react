//+1 У вас есть часть пользовательского хука и его использование. Какой из вариантов ответов подходит вместо пропущенной части?
const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

 // ПРОПУЩЕННАЯ ЧАСТЬ

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};


// Usage
function App() {
  const { execute, status, value, error } = useAsync(myFunction, false);

  return (
    <div>
      {status === "idle" && <div>Start your journey by clicking a button</div>}
      {status === "success" && <div>{value}</div>}
      {status === "error" && <div>{error}</div>}

      <button onClick={execute} disabled={status === "pending"}>
        {status !== "pending" ? "Click me" : "Loading..."}
      </button>
    </div>
  );
}

//const execute = useCallback(()=>{setStatus("pending")})


//2 Зачем может понадобится PureComponent или React.memo в вашем коде?
//для автоматической мемоизации

//3 Хук useCallback позволяет мемоизировать...
//функцию

//4 При помощи какой библиотеки можно гибко манипулировать атрибутом title и метатэгами?
//react-helmet

//5 Является ли данный код нарушением принципов иммутабельности?
this.state = {
  data: [
     {name: 'John C.', salary: 800, increase: false, id: 1},
     {name: 'Alex M.', salary: 3000, increase: true, id: 2},
     {name: 'Carl W.', salary: 5000, increase: false, id: 3}
  ]
}
 
changeSalary = (e) => {
  this.state.data.forEach(item => {
      item.salary = e.target.value;
  })
}
//да, не возвращает новый массив

//6 Свойства компонента в реакте по своей структуре - это
//обьект

//7 Как правильно импортировать и использовать изображение в компоненте?
import img;
<img  src={img}/>;

//8 Что в себя принимает хук useContext(arg) как аргумент arg?
//данные с контекстом, который

//9 Допустимо ли создание нескольких useState и useEffect в одном компоненте?
//можно создать сколько угодно useState

//10 Какой вариант отправки запроса на сервер правильный? Имеется в виду момент отправки, а не сам запрос.
//useEffecr

//11 Что возвращает хук useState при запуске?
//массив

//12 В каком случае мы не можем использовать синтаксис фрагментов в виде <> </> ?
//таких случаев нет

//13 Порталы нужны для того, чтобы
//рендерить один или несколько компонентов

//14 Какой из способов изменения состояния нарушает принцип иммутабельности?
this.state = {
  data: [2, 5, 6, 7, 3]
}
//777

//15 Каким способом можно не потерять контекст вызова у обработчиков событий в классовых компонентах?
//все варианты

//16 Основой для формирования компонентов высшего порядка является...
//то что функцинальные компоненты

//17 Хук useMemo позволяет мемоизировать...
//функцию

//18 Что такое ref?
//DOM дереве

//19 В чем ошибка в этом компоненте и его использовании?
function Profile({name, surname, link}) {
  return (
    <div>
       <h1>My name is {name}, surname - {surname}</h1>
       <a href={link} >My profile</a>
    </div>
  )
}
<Profile name={{firstName: 'John'}} surname='Smith' link='facebook.com'/>
//своцство name

//20 Какая логическая ошибка допущена в этом коде?
const elems = data.map(({text, id, class}, i) => {
  return <ItemList key={i} className={class}>{text}</ItemList>
})
//неправильная деструктуризация

//21 Что за структура создана в коде и будет ли она работать?
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  
  const toggle = useCallback(() => setState(state => !state), []);
  
  return [state, toggle]
}
//это пользоывательский. да бдет рабоатть

//22 Какая интересная особенность есть у хука useRef()?
//он позволяет сохранять

//23 В чем смысл передачи коллбэк-функции во внутрь setState?
this.state = {
  salary: 500
}
/////
this.setState(state => ({
  salary: state.salary + 500
}))
//для отложенного изменения

//24 Каким образом можно выполнить отписку от эффектов при использовании хука useEffect?
//prevState

//25 Какой из атрибутов в JSX написан неправильно?
//for
