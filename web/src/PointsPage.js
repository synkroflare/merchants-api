import React from 'react';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { getUserDiscoveredCount } from './local/functions';

const PointsPage = () =>{    
   
    const navigate = useNavigate();   
    
    useEffect(() => {
        const userColor = sessionStorage.getItem('usercolor')
        document.querySelector('#logo').src = './logos/logo-msg-'+userColor+'.png'
        document.querySelector('#circle1').style.backgroundColor = userColor
        
        document.querySelector('#circle2').style.backgroundColor = userColor
        renderPoints();
      }, []);

      const socket = new WebSocket("ws://merchants-api.onrender.com:8082")

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

      
    const renderPoints = async () => { 

        const count = await getUserDiscoveredCount(sessionStorage.getItem('userid')) 
        let pcount

        if (count <= 5) { pcount = count*2 }
        if (count>5 && count <= 10) { pcount = count*2 + 5}
        if (count>10 && count <= 20) { pcount = count*3 + 10}
        if (count>20 && count <= 29) { pcount = count*4 + 20}
        if (count==30) { pcount = count*4 + 40}
        if (!count) { pcount = 0}
        
        document.querySelector('#BPCount').innerHTML = count
        document.querySelector('#pointsCount').innerHTML = pcount          
                             
        }       

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
    <div className='container-fluid p-0'>  
    <nav className="navbar navbar-expand-lg bg-light fixed-bottom">
            <div className="container-fluid w-100">            
            <div className="row w-100 m-0">
                <div className="col-6">
                    <button className = 'btn  btn-dark d-flex align-items-start mt-1 mb-1' onClick={(e) => {
                                        navigate('/gamehome');
                                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="calc(5px + 4vw)" height="calc(5px + 5vw)" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    </button>    
                </div>                
                <div className="col-6">
                    <div className=" navbar-right pull-right" ><h1 className ='useMyFont mt-1 mb-1'>Merchants</h1></div>                    
                </div>                
            </div>           
            </div>        
        </nav>    
    <header className='App-header'>
    <div className="container text-center p-10 App-newbox" >
    <div className="container text-center p-10" >
            <div className="row">
              
                
                <div className="col">
                <img src={""} className='App-logo' alt='logo' id='logo' />
                </div>
                 
            </div>
    </div>
        
       <div className='container darkbg'> 
       <h1 className='App-title mt-2'>Suas estatisticas</h1>
       </div>
       

        

        <div className="container text-center darkbg p-4" >
            <div className='row mt-1'>
                    <div className='col center d-flex justify-content-center mt-1'>
                    
                            <h1 className='m-0'>blueprints encontradas</h1>
                    
                    </div>
            </div>
            <div className='row'>
                <div className='col center d-flex justify-content-center mt-2'>
                    <div className='circle2 myGlower-white2' id='circle1'>
                        <h1 className='display-1 m-0' id='BPCount'></h1>
                    </div>
                </div>
            </div>
            <div className='row mt-1'>
                    <div className='col center d-flex justify-content-center mt-1'>
                    
                            <h1 className='m-0'>pontos obtidos</h1>
                    
                    </div>
            </div>
            <div className='row mt-1'>
                <div className='col center d-flex justify-content-center mt-2'>
                    <div className='circle2 myGlower-white2' id='circle2'>
                        <h1 className='display-1 m-0' id='pointsCount'></h1>
                    </div>
                </div>
            </div>

        

        </div>

        <div className='mb-5'></div>
        <div className='mb-5'></div>
        <div className='mb-5'></div>

       

        </div>
    </header>



   
</div>
</div>   
  );
}

export default PointsPage;