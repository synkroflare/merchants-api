import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const PreHome = () =>{    
    const navigate = useNavigate();

    const navigateToNewPage = () => {
      navigate('/createuser')
    } 

    const show1 = () => {
      document.querySelector('#description1').classList.add("fade-in-fwd") 
      document.querySelector('#description1').style.opacity = 1
    }

    const show2 = () => {
      navigate('/createuser')
    }
    
    useEffect (()=>{

      document.querySelector('#description1').style.opacity = 0

      setTimeout(show1, 2000)

      setTimeout(show2, 4000)

    }
    )
         
  return (
    <div className='App'>          
    <header className='App-header '>
    <div className="container text-center p-10 App-newbox" >
        <img src={"./logo512.png"} className='App-logo' alt='logo' />
        <h1 className='App-title useMyFont'>Bem vindo a merchants</h1>
        <h4 className='App-desc useMyFont ' id='description1'>um jogo de Yuri 'wayTo' Garcia</h4>
       
      
      <div className='mb-4'></div>
        </div>
    </header>   
</div>
  );
}

export default PreHome;