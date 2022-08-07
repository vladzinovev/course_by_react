import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  
             src={img} alt="Error"/>
        //если картинка находится в папке public
        //<img src={ProcessingInstruction.env.PUBLIC_URL+'/error.gif'} />
    )
}

export default ErrorMessage;