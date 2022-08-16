import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.MyNewRef= React.createRef();
    }
    //при открытии страницы, фокус мышки сразу попадает в строку ввода mail 
    componentDidMount(){
        //1 способ
        this.myRef.current.focus();
        //2 способ
        this.MyNewRef.current.doSmth();
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        //1 способ
                        <input ref={this.myRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        //2 способ
                        <TextInput ref={this.MyNewRef}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}
class TextInput extends Component{
    doSmth=()=>{
        console.log('smth');
    }

    render(){
        return(
            <input 
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"/>
        )
    }
}

function App() {
    return (
        <Form/>
    );
}

export default App;
