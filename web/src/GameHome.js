import React, { useEffect, useState, componentDidMount } from 'react';
import {  useNavigate } from 'react-router-dom';
import './App.css';
import { usernameValue, userIdValue, currentUserId } from './Home';
import * as home from './Home';
import * as globalfunction from './local/functions'

const GameHome = () =>{ 
    
    const navigate = useNavigate(); 

    const [remainingMoves, setRemainingMoves] = useState(0)
    const [isMyTurn, setIsMyTurn] = useState(false)
    const cookieUserId = sessionStorage.getItem('userid')

    const socket = new WebSocket("wss://exaecwjnc9.execute-api.sa-east-1.amazonaws.com/production")

    socket.onopen = () => {
        console.log('connected to ws')
        const body =  JSON.stringify({"action":"Discovery","message":'jogador 3 descobriu carpintaria e +3!', "color":'darkturquoise', "avatar": "f2"})
       // socket.send(body)
    }

    socket.onmessage = (event) => { 
      const data0 = JSON.parse(event.data)
      const data = JSON.parse(data0.body)

      if (data.action === 'Discovery') {
        showNotification(data.message, data.color, data.avatar)
      }
       
    }

    useEffect(() =>  {
        
        const userColor = sessionStorage.getItem('usercolor')
       // document.querySelector('#logo').src = './logos/logo-'+ userColor +'.png' 

        const text = document.querySelector(".text");
            text.innerHTML = text.innerText
        .split("")
        .map(
            (char, i) => `<span style="transform:rotate(${i * 11.3}deg)">${char}</span>`
        )
        .join("");
        
        document.getElementById("searchButton").disabled = true
        const cPlayerNContainer = document.querySelector('#activeplayernamecontainer')
            
    const interval = setInterval( async () => {
        const roomData = await globalfunction.getRoomData()
        var currentMonth = roomData[0].initialMonth + roomData[0].currentTurn
        var currentYear = 1305
        while (currentMonth > 12) {
            currentMonth -= 12
            currentYear++
        }                
        document.querySelector('#turnContainer').innerHTML = 'turno: '+ roomData[0].currentTurn+' - mes: '+(currentMonth)+' - ano: '+currentYear
        
        var whoIsPlaying = await globalfunction.getActiveUserName()
        
        cPlayerNContainer.innerText = 'Jogando: '+whoIsPlaying
        cPlayerNContainer.style.fontSize="5vw"
        cPlayerNContainer.style.color="white"

        var whoIsPlayingId = await globalfunction.getActiveUserId()
        var activeUserData = await globalfunction.getUserData(whoIsPlayingId)       

        cPlayerNContainer.style.backgroundColor= activeUserData.color                 
        
        var assz = globalfunction.checkIfItsYourTurn(cookieUserId)         
        assz.then(value => {  
            setIsMyTurn(value)
            if (value !== 0) document.getElementById("searchButton").disabled = true
            if (value === 0) document.getElementById("searchButton").disabled = false                
            })

        if (remainingMoves <= 0) {   
            
        }
        }, 16300);
    
        return () => clearInterval(interval);
    }, [])  
    
    function showNotification(message, color, avatar) {
        document.querySelector('#notf1').style.backgroundColor = color
        document.querySelector('#notifi-avatar').src = '/avatars/'+avatar+'.png'
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
        

  return (
    
    <div className='App'>

    <nav className="navbar navbar-expand-lg bg-light d-none fixed-top slide-in-blurred-top" id='notificationContainer'>
            <div className="container-fluid w-100 white" id ='notf1'>            
            <div className="row w-100 m-0"> 

                <div className="col-9 d-flex justify-content-center slide-in-left">
                    <div className=" navbar tracking-in-expand center" >
                        <h5 className ='useMyFont  m-0 center' id='notificationText'>
                        </h5>
                    </div>                    
                </div>

                <div className="col-3 p-0 d-flex justify-content-center">
                    <div className='notification-avatar-circle myGlower-circle justify-content-center d-flex slide-in-left'>
                        <img src={""} className='notification-avatar scale-up-center' id ='notifi-avatar' alt='logo' />
                    </div>          
                </div>  

            </div>           
            </div>        
     </nav>  
        
    

    <nav className="navbar navbar-expand-lg  p-0 fixed-bottom ">
            <div className="container-fluid deeppinkbg w-100">            
            <div className="row w-100 m-0">
                <div className="col-5">
                    <button className = 'btn  ui-btn d-flex align-items-start mt-1 mb-1' onClick={(e) => {
                                        navigate('/home');
                                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="calc(5px + 4vw)" height="calc(5px + 5vw)" fill="currentColor" className="bi bi-arrow-return-left white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    </button>    
                </div>                
               

                  <div className="col-7 d-flex justify-content-center">
                    <div className=" navbar-right pull-right tracking-in-expand center " ><h1 className ='useMyFont  m-0 center white'>Merchants</h1></div>                    
                </div>              
            </div>           
            </div>        
     </nav>      
    <div className='container-fluid p-0'>      
    <header className='App-header'>

    <div className="container text-center p-10 App-newbox" >
    <div className="container text-center " >
            <div className="row g-0 text-center">
                                    <div className='col'></div>
               
                <div className="col center puff-in-center">
                 <div className="circle1 m-0">
                    <div className='avatar-circle justify-content-center d-flex'>
                    <img src={"/avatars/m7.png"} className='App-logo ' id ='logo' alt='logo' />
                    </div>
                    <div className="text">
                        <p>
                        - Navegar - Construir - Produzir  
                        </p>
                    </div>
                </div>
                </div> 
                <div className='col'></div>              
            </div>
    </div> 

        <div className="container text-center p-10  " >

        <div className="row">
                <div className="col">
                    <div id ='getid'>
                        <div className = ' mb-2 w-100 mt-2' id ='activeplayernamecontainer'> 
                        <h5> Carregando Informacoes </h5> 
                        </div>                               
                    </div>
                </div>                
        </div>

        <div className="row pe-3 ps-3   mb-2">
                <div className="col darkerbg ">
                    <div id ='getid'>
                        <div className = ' mb-2 w-100 mt-2 ' id =''> 
                        <h5 id='turnContainer'> turno: 1 </h5> 
                        </div>                               
                    </div>
                </div>                
        </div>

            <div className="row">
                <div className="col">
                    <div id ='getid'>
                        <button className = 'btn  ui-btn btnsize1 mb-2 center' id = 'searchButton' onClick={(e) => {
                                    navigate('/blueprintsearch');
                                }}> <h3 className='white '>Pesquisar Blueprints</h3> </button>                               
                    </div>
                </div>
             
                <div className="col">
                    <div id ='getid2'>
                        <button className = 'btn  ui-btn btnsize1 mb-2' onClick={(e) => {
                                    navigate('/listds');
                                }}> <h3 className='white '>Suas Blueprints</h3> </button>                    
                    </div>
                </div>
                
        </div>
        <div className="row d-none">
                <div className="col">
                    <div id ='getid'>
                        <button className = 'btn  ui-btn btnsize1 mb-2' onClick={(e) => {
                                    navigate('/seasonguide');
                                }}> <h3 className='white '>bonus de estacao</h3> </button>                               
                    </div>
                </div>                     
             </div>
        
            <div className="row">
                <div className="col">
                    <div id ='getid'>
                        <button className = 'btn  ui-btn btnsize1 mb-2' onClick={(e) => {
                                    navigate('/guide');
                                }}> <h3 className='white '>Guias</h3> </button>                               
                    </div>
                </div>
              
                <div className="col custom custom-bottom">
                    <div id =''>
                        <button className = 'btn  ui-btn btnsize1 mb-2' onClick={(e) => {
                                    navigate('/points');
                                }}> <h3 className='white '>Checar Pontuacao</h3> </button>                    
                    </div>
                </div>                
             </div>
        </div>
    </div>
    </header>
</div>
</div>   
  );
}

export default GameHome;