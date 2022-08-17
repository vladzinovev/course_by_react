import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
    state={
        advOpen:false
    }

    componentDidMount(){
        setTimeout(this.handleClick, 3000)
    }

    handleClick=()=>{
        console.log('Click');
        this.setState(({advOpen})=>({
            advOpen:!advOpen
        }))
    }

    render() {
        return (
            <Container>
                <form  onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {
                        this.state.advOpen ? 
                        <Portal>
                            <Msg/>
                        </Portal> : null
                    }
                </form>
                <Portal>
                    <Msg/>
                </Portal>
            </Container>
        )
    }
}

const Portal=(props)=>{

    const node = document.createElement('div');
    document.body.appendChild(node);
    return RecatDOM.createPortal(props.children, );
}

const Msg=()=>{
    return(
        <div 
            style={{'width': '500px', 
                    'height': '150px', 
                    'backgroundColor': 'red', 
                    'position': 'absolute', 
                    'right': '-50%', 
                    'bottom': '-50%'}}>
            Hello
        </div>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;
