import {useState,Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


//memo нужен для сравнения значения у mail и text, чтобы два раза не рендерить (кроме обьектов)
const Form = (props) => {

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent mail={props.mail}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

class InputComponent extends Component{
    render(){
        return(
            <input value={props.mail} type="email" className='form-control' placeholder="name@example.com"/>
        )
    }
}

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text'
    },[]);

    return (
        <>
            <Form mail={data.mail} text={data.text}/>
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
