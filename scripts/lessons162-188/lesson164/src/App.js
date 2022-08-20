import {Component, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

/* 
class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: false,
            slide: 0
        }
    }

    componentDidMount(){
        //не меняется значение тайтла
        document.title=`Slide:${this.state.slide}`;
    }
    componentDidUpdate(){
        //меняется значение тайтла
        document.title=`Slide:${this.state.slide}`;
    }

    changeSlide = (i) => {
        this.setState(({slide}) => ({
            slide: slide + i
        }))
    }

    toggleAutoplay = () => {
        this.setState(({autoplay}) => ({
            autoplay: !autoplay
        }))
    }

    render() {
        return (
            <Container>
                <div className="slider w-50 m-auto">
                    <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                    <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
                    <div className="buttons mt-3">
                        <button 
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(-1)}>-1</button>
                        <button 
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(1)}>+1</button>
                        <button 
                            className="btn btn-primary me-2"
                            onClick={this.toggleAutoplay}>toggle autoplay</button>
                    </div>
                </div>
            </Container>
        )
    }
} 
 */


const calcValue=()=>{
    console.log('random');
    return Math.random()*(50-1)+1;
}

const Slider = (props) => {
/* 
    const [calc,setCalc]=useState(calcValue);//random выводится один раз
    const [calc,setCalc]=useState(()=>calcValue());//random выводится один раз
    const [calc,setCalc]=useState(calcValue());//random выводится много раз
 */


    //старый вариант
    const slideStateArray=useState();
    console.log(slideStateArray);

    //новый вариант 1)state 2)функция
    const [slide,setSlide]=useState(0);
    function changeSlide(i){
        setSlide(slide=>slide+1);
    }

    const [autoplay,setAutoplay]=useState(false);
    function toggleAutoplay(){
        setAutoplay(autoplay=> !autoplay);
    }

    //второй способ
    /* const [state,setState]=useState({slide: 0, autoplay: false});
    function changeSlide(i){
        setSlide(state=>({...state,slide:state.slide+i}));
    }
    function toggleAutoplay(){
        setAutoplay(state=>({...state,autoplay:!state.autoplay}));
    } */

    useEffect(()=>{
        document.title=`Slide:${slide}`;
    });

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
    return (
        <Slider/>
    );
}

export default App;
