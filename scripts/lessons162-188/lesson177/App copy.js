import {useState,memo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


//memo нужен для сравнения значения у mail и text, чтобы два раза не рендерить (кроме обьектов)
const Form = memo((props) => {

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input value={props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
} )

function App() {
    const [data, setData] = useState({
        mail:"name@example.com",
        text: 'some text'
    },[]);

const onLog=useCallback(()=>{
    console.log('wow')
})

    return (
        <>
            <Form mail={data.mail} text={data.text} onLog={onLog}/>
            <button 
                onClick={() => setData({
                    mail:"name@example.com",
                    text: 'some text'
                })}>
                Click me
            </button>
        </>
    );
}

export default App;
