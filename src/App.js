import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [show, setShow] = useState(true);
  const [isProposing, setIsProposing] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [image, setImage] = useState('https://i.kym-cdn.com/photos/images/newsfeed/001/822/061/f9a.jpg');
  const [alto, setAlto] = useState("50px");
  const [ancho, setAncho] = useState("100px");
  const [fontSize, setFontSize] = useState("20px");
  const [visibility, setVisibility] = useState("visible");
  const [name, setName] = useState('');

  useEffect(() => {
    if (accepted) {
      console.log('Creating audio element');
      const audio = new Audio('/wedding.mp3'); // Replace '/wedding.mp3' with the actual URL or path to your audio file
      audio.play();
    }
  }, [accepted]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShow(false);
    setIsProposing(true);
    setName(data.name);
  };



  return (
    <div>
      {show && !isProposing && (
        <>
          <div className='header'>
            Formulario para nada sospechoso que tenes que completar si o si
          </div>
          <form className='form-control' onSubmit={handleSubmit(onSubmit)}>
            
            <div className='row pt-3'></div>
            <div className='form-group'>
              <label htmlFor='name'>Nombre</label>
              <input
                type='text'
                className='form-control'
                id='name'
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span style={{ color: 'red' }}>Este campo es requerido</span>
              )}
            </div>
            <div className='row pt-3'></div>
            <button type='submit' className='btn btn-primary'>
              Carga de datos
            </button>
          </form>
        </>
      )}

      {isProposing && !accepted && (
        <>
        <div className='form-group'>
                <img src={image} alt='catwithgn' className='img-form' />
        </div>
        <h1> Te queres casar con migo? </h1>
         <button type='button' className='btn btn-success' style={{ width:"100px", height: "50px", fontSize: "20px"}} onClick={() => setAccepted(true)}>
            Si
          </button>
          <button
            type='button'
            className={`btn btn-danger `}
            style={{ width: ancho, height: alto, fontSize: fontSize, visibility: visibility }}
            onClick={() => {
              if (parseInt(alto) < 20) {
                setVisibility("hidden");
              }
              setImage('https://i.pinimg.com/474x/47/a3/e5/47a3e576cb183b6813b3d6c9babe1409.jpg');
              setAncho((prevAncho) => (parseInt(prevAncho) - 15).toString() + "px");
              setAlto((prevAlto) => (parseInt(prevAlto) - 15).toString() + "px");
              setFontSize((prevFontSize) => (parseInt(prevFontSize) - 5).toString() + "px");
            }}
          >
          No
          </button>
         
        </>
      )}
      {accepted && (
        <>

        <h1> Bueno {name} anda reservando el civil bb</h1>
        <img src='https://i.pinimg.com/736x/65/c7/1b/65c71bc2367b160ddfddfb521246f4e1.jpg' alt='married cats' className='img-form' />
          <button type='button' className='btn btn-primary' onClick={() => window.location.href = 'https://www.argentina.gob.ar/interior/renaper/covid-19-atencion-registros-civiles'}>
              haceme click
          </button>
        </>
    
      )}
      <div className='footer' style={{fontSize:"10px"}}> Desarrollado por Rocio Arias, sin intencion de recopilacion de datos y simplemente por diversion. </div>
    </div>

    
  );
}

export default App;
