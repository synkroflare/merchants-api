import React,{ useEffect} from 'react';
import {  useNavigate, } from 'react-router-dom';
import './App.css';

const Guide = () =>{    
    const navigate = useNavigate(); 
    
    const socket = new WebSocket("wss://merchants-api.onrender.com:8082")

    socket.onopen = () => {
        socket.send('test')
    }

    socket.onmessage = (event) => {
        const wsRMData = JSON.parse(event.data)
        if (wsRMData.type === 'newBlueprintDiscoveredNotification') {
            showNotification(wsRMData.message)
        }
    }

    function showNotification(message) {
      document.querySelector('#notificationContainer').classList.remove('slide-out-blurred-top')
      document.querySelector('#notificationContainer').classList.add('slide-in-blurred-top')
      document.querySelector('#notificationContainer').classList.remove('d-none')
      document.querySelector('#notificationText').innerHTML = message
      setTimeout(hideNotification, 4100)
  } 
  
  function hideNotification() {
      document.querySelector('#notificationContainer').classList.remove('slide-in-blurred-top')
      document.querySelector('#notificationContainer').classList.add('d-none')
      document.querySelector('#notificationContainer').classList.add('slide-out-blurred-top')
      document.querySelector('#notificationContainer').classList.remove('d-none')             
  } 

    useEffect(()=>{
        document.querySelector('#logo').src = './logos/logo-'+sessionStorage.getItem('usercolor')+'.png'
    }

    )
    

  return (
    <div className='App'>
        <nav className="navbar navbar-expand-lg bg-light fixed-top d-none slide-in-blurred-top" id='notificationContainer'>
            <div className="container-fluid w-100">            
            <div className="row w-100 m-0">                             
                  <div className="col d-flex justify-content-center">
                    <div className=" navbar-right pull-right tracking-in-expand center" >
                        <h5 className ='useMyFont  m-0 center' id='notificationText'>
                        </h5>
                    </div>                    
                </div>              
            </div>           
            </div>        
        </nav>    
        <nav className="navbar navbar-expand-lg bg-light fixed-bottom">
            <div className="container-fluid w-100">            
            <div className="row w-100 m-0">
                <div className="col-5">
                    <button className= 'btn  ui-btn d-flex align-items-start mt-1 mb-1' onClick={(e) => {
                                        navigate('/gamehome');
                                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="calc(5px + 4vw)" height="calc(5px + 5vw)" fill="currentColor" className="bi bi-arrow-return-left white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    </button>    
                </div>                
                <div className="col-7">
                    <div className=" navbar-right pull-right" ><h1 className='useMyFont mt-1 mb-1'>Merchants</h1></div>                    
                </div>                
            </div>           
            </div>        
        </nav>        
    <header className='App-header'>
    <div className="container text-center p-10 App-newbox" >
        <img src={""} className='App-logo' alt='logo' id='logo' />
        <h1 className='App-title useMyFont'>selecione um guia</h1>
      
        <button
          className= 'btn  ui-btn useMyFont custom mt-2 mb-1'               
          onClick={(e) => {
            navigate('/productguide');
          }}>
          <h2 className='useMyFont white'> Guia de produtos</h2>
        </button>

        <button
          className= 'btn  ui-btn useMyFont custom mt-2 mb-1'               
          onClick={(e) => {
            navigate('/buildingguide');
          }}>
          <h2 className='useMyFont white'> Guia de edificios</h2>
        </button>

       

        <div className='mb-4'></div>
        <div className='mb-md-4'></div>
        <div className='mb-md-4'></div>
        <div className='mb-md-4'></div>
        </div>
    </header> 
</div>
  );
}

export default Guide;