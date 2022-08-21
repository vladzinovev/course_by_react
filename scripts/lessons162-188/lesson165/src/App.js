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

const getSomeImages=()=>{
    console.log('fetching')
    return[
        "https://ru.reactjs.org/logo-og.png",
        "https://media.tproger.ru/uploads/2016/10/reactmini.png"
    ]
}

const Slider = (props) => {



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

    return (
        <Container>
            <div className="slider w-50 m-auto">

                {
                    getSomeImages().map((url,i)=>{
                        return(
                            <img key={i} className="d-block w-100" src={url} alt="slide"/>
                        )
                    })
                }

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
    const [slider,setSlider]=useState(true);
    return (
        <>
        <button onClick={()=>setSlider(false)}>Click</button>
            {slider ? <Slider/> : null}
        </>
        
    );
}

export default App;
