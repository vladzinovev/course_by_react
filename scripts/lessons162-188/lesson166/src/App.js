import {useState, useCallback,useEffect,useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const countTotal=(num)=>{
    console.log('counting...');
    return num + 10;
}

const Slider = (props) => {
    const getSomeImages=useCallback(()=>{
        console.log('fetching')
        return[
            "https://ru.reactjs.org/logo-og.png",
            "https://media.tproger.ru/uploads/2016/10/reactmini.png"
        ]
    },[]);


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

    const total =useMemo(()=>{
        return countTotal(slide);
    }, [slide]);

    return (
        <Container>
            <div className="slider w-50 m-auto">
                

                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="text-center mt-5">Total slides: {total}</div>
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
const Slide=({getSomeImages})=>{
    const[images,setImages]=useState([]);
    useEffect(()=>{
        setImages(getSomeImages())
    },[getSomeImages])

    return (
        <>
            {images.map((url,i)=><img key={i} className="d-block w-100" src={url} alt="slide"/>)}
        </>
    )
}


function App() {
    return (
        <Slider/>
    );
}

export default App;
