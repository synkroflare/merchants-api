
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import {getUserData} from './local/functions'
import { breadDep, wineDep,    hammerDep,    woodenshieldDep,    leathersuitDep,
    bowDep,
    quiverDep,
    pykeDep, 
    ironshieldDep,
    ironarmorDep,
    linencapeDep,
    coatDep ,
    magerobeDep,
    magehatDep,
    diamondringDep,
    diamondDep,
    goldcoinDep,
    milkDep ,
    eggDep ,
    cheeseDep,
    pieDep ,
    cakeDep,
    gloveDep,
    helmetDep,
    tunicDep,
    pingaDep,
    teaDep,
    beerDep,
    coinDep,
    fishDep,
    crownDep,
    goldDep,
    
} from './constants/global';

import * as buildprops from './constants/global';

const SeasonGuide = () =>{ 
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
       
    }

    const [index, setIndex] = useState(0);  

    const [color, setColor] = useState('yellow')
    const [dif, setDif] = useState('medio')
    const [points, setPoints] = useState('0')
    const [icon, setIcon] = useState('./2x') 
    const [productName, setProductName] = useState('nome')

    const [useC1, setUseC1] = useState('')
    const [useC2, setUseC2] = useState('')
    const [useC3, setUseC3] = useState('')
    const [useC4, setUseC4] = useState('')

    const [makeC1, setMakeC1] = useState('')
    const [makeC2, setMakeC2] = useState('')
    const [makeC3, setMakeC3] = useState('')
    const [makeC4, setMakeC4] = useState('')

    const [guideClick, setGuideClick] = useState(false)

    const handleSelect = (direction, e) => {
          switch (direction) {
            case 'right':
                if (index < 3) {
                    setIndex(index+1)
                    break;    
                }

                else {
                    setIndex(0)                    
                    break;   

                }
            case 'left':
                if (index >= 1) {
                    setIndex(index-1)
                    break;    
                }

                else {
                    setIndex(3)                    
                    break;   

                }
          

          }
        
      }   
    const navigate = useNavigate(); 

    const renderSeasonGuide = async () => {
        var userData = await getUserData(sessionStorage.getItem('userid'))
        
        
            switch (userData.location) {
                case 'espanha':
                    document.querySelector('#verao1').innerHTML = buildprops.espanhaV[0]
                    document.querySelector('#verao2').innerHTML = buildprops.espanhaV[1]
                    document.querySelector('#inverno1').innerHTML = buildprops.espanhaI[0]
                    document.querySelector('#inverno2').innerHTML = buildprops.espanhaI[1]
                    document.querySelector('#outono1').innerHTML = buildprops.espanhaO[0]
                    document.querySelector('#outono2').innerHTML = buildprops.espanhaO[1]
                    document.querySelector('#primavera1').innerHTML = buildprops.espanhaP[0]
                    document.querySelector('#primavera2').innerHTML = buildprops.espanhaP[1]
                    break;
                case 'egito':
                    document.querySelector('#verao1').innerHTML = buildprops.egitoV[0]
                    document.querySelector('#verao2').innerHTML = buildprops.egitoV[1]
                    document.querySelector('#inverno1').innerHTML = buildprops.egitoI[0]
                    document.querySelector('#inverno2').innerHTML = buildprops.egitoI[1]
                    document.querySelector('#outono1').innerHTML = buildprops.egitoO[0]
                    document.querySelector('#outono2').innerHTML = buildprops.egitoO[1]
                    document.querySelector('#primavera1').innerHTML = buildprops.egitoP[0]
                    document.querySelector('#primavera2').innerHTML = buildprops.egitoP[1]
                    break;
                case 'china':
                    document.querySelector('#verao1').innerHTML = buildprops.chinaV[0]
                    document.querySelector('#verao2').innerHTML = buildprops.chinaV[1]
                    document.querySelector('#inverno1').innerHTML = buildprops.chinaI[0]
                    document.querySelector('#inverno2').innerHTML = buildprops.chinaI[1]
                    document.querySelector('#outono1').innerHTML = buildprops.chinaO[0]
                    document.querySelector('#outono2').innerHTML = buildprops.chinaO[1]
                    document.querySelector('#primavera1').innerHTML = buildprops.chinaP[0]
                    document.querySelector('#primavera2').innerHTML = buildprops.chinaP[1]
                    break;
                case 'india':
                    document.querySelector('#verao1').innerHTML = buildprops.indiaV[0]
                    document.querySelector('#verao2').innerHTML = buildprops.indiaV[1]
                    document.querySelector('#inverno1').innerHTML = buildprops.indiaI[0]
                    document.querySelector('#inverno2').innerHTML = buildprops.indiaI[1]
                    document.querySelector('#outono1').innerHTML = buildprops.indiaO[0]
                    document.querySelector('#outono2').innerHTML = buildprops.indiaO[1]
                    document.querySelector('#primavera1').innerHTML = buildprops.indiaP[0]
                    document.querySelector('#primavera2').innerHTML = buildprops.indiaP[1]
                    break;
                case 'grecia':
                    document.querySelector('#verao1').innerHTML = buildprops.greciaV[0]
                    document.querySelector('#verao2').innerHTML = buildprops.greciaV[1]
                    document.querySelector('#inverno1').innerHTML = buildprops.greciaI[0]
                    document.querySelector('#inverno2').innerHTML = buildprops.greciaI[1]
                    document.querySelector('#outono1').innerHTML = buildprops.greciaO[0]
                    document.querySelector('#outono2').innerHTML = buildprops.greciaO[1]
                    document.querySelector('#primavera1').innerHTML = buildprops.greciaP[0]
                    document.querySelector('#primavera2').innerHTML = buildprops.greciaP[1]
                    break;
                case 'somalia':
                    document.querySelector('#verao1').innerHTML = buildprops.somaliaV[0]
                    document.querySelector('#verao2').innerHTML = buildprops.somaliaV[1]
                    document.querySelector('#inverno1').innerHTML = buildprops.somaliaI[0]
                    document.querySelector('#inverno2').innerHTML = buildprops.somaliaI[1]
                    document.querySelector('#outono1').innerHTML = buildprops.somaliaO[0]
                    document.querySelector('#outono2').innerHTML = buildprops.somaliaO[1]
                    document.querySelector('#primavera1').innerHTML = buildprops.somaliaP[0]
                    document.querySelector('#primavera2').innerHTML = buildprops.somaliaP[1]
                    break;
                case 'ucrania':
                    document.querySelector('#verao1').innerHTML = buildprops.ucraniaV[0]
                    document.querySelector('#verao2').innerHTML = buildprops.ucraniaV[1]
                    document.querySelector('#inverno1').innerHTML = buildprops.ucraniaI[0]
                    document.querySelector('#inverno2').innerHTML = buildprops.ucraniaI[1]
                    document.querySelector('#outono1').innerHTML = buildprops.ucraniaO[0]
                    document.querySelector('#outono2').innerHTML = buildprops.ucraniaO[1]
                    document.querySelector('#primavera1').innerHTML = buildprops.ucraniaP[0]
                    document.querySelector('#primavera2').innerHTML = buildprops.ucraniaP[1]
                    break; 
                case 'siria':
                    document.querySelector('#verao1').innerHTML = buildprops.siriaV[0]
                    document.querySelector('#verao2').innerHTML = buildprops.siriaV[1]
                    document.querySelector('#inverno1').innerHTML = buildprops.siriaI[0]
                    document.querySelector('#inverno2').innerHTML = buildprops.siriaI[1]
                    document.querySelector('#outono1').innerHTML = buildprops.siriaO[0]
                    document.querySelector('#outono2').innerHTML = buildprops.siriaO[1]
                    document.querySelector('#primavera1').innerHTML = buildprops.siriaP[0]
                    document.querySelector('#primavera2').innerHTML = buildprops.siriaP[1]
                    break; 
            }
        
                 
    }
    
    useEffect(() => {
        renderSeasonGuide()
      });

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
                    <button className = 'btn  btn-dark d-flex align-items-start mt-1 mb-1' onClick={(e) => {
                                        navigate('/gamehome');
                                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="calc(5px + 4vw)" height="calc(5px + 5vw)" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    </button>    
                </div>                
                <div className="col-7">
                    <div className=" navbar-right pull-right" ><h1 className ='useMyFont mt-1 mb-1'>Merchants</h1></div>                    
                </div>                
            </div>           
            </div>        
        </nav>

    <div className='container-fluid p-0 '>      
    <header className='App-header'>
    <div className="container App-newbox d-flex align-items-baseline" >
 
       

          <div className='container text-center'> 
          <div className='row darkbg mb-2 h-3 mt-2'>
            <div className='col p-0 h-3'>
                <button className='btn btn-dark w-100 h-100 p-0' onClick={(e) => {
                                    handleSelect('left')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </button>
            </div>
            <div className='col h-3'>
        
                    <p className='mt-3'>{index+1} / 4</p>
              
            </div>
            <div className='col p-0 h-3'>
                <button className='btn btn-dark w-100 h-100' onClick={(e) => {
                                    handleSelect('right')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
          </div>                   
          </div>                    
      
                    
        

        <Carousel  activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item interval={33000}>       
        <div className='row ui-frame-verao'>
            <div className='col redbg'>
                <h2 className='useMyFont mt-2 '>
                verao
                </h2>
            </div>
        </div>
        <div className=' row  ui-frame-verao season-box mb-2 me-0 ms-0 mt-2'> 
        <div className='mt4'></div>
        <div className="row mt-4 ">
            <div className='col darkbg ms-4 '>
                <div className='vertical-center'>
                <h2 id='verao1' className=' '> </h2>
                </div>
                
            </div>
                           
        </div>   
        <div className="row mt-4 ">
        <div className='col darkbg ms-4 '>
                <h2 id='verao2' className='vertical-center'> </h2>
            </div>
                                
        </div> 
        <div className='mt4'></div>     
    </div>
                     
    </Carousel.Item>

     <Carousel.Item interval={33000}>       
        <div className='row ui-frame-inverno'>
            <div className='col lightbluebg'>
                <h2 className='useMyFont mt-2 '>
                inverno
                </h2>
            </div>
        </div>
        <div className=' row  ui-frame-inverno season-box mb-2 me-0 ms-0 mt-2'> 
        <div className='mt4'></div>
        <div className="row mt-4 ">
            <div className='col darkbg ms-4'>
                <h2 id='inverno1'className='vertical-center'> </h2>
            </div>
                           
        </div>   
        <div className="row mt-4 ">
        <div className='col darkbg ms-4 '>
                <h2 id='inverno2'className='vertical-center'> </h2>
            </div>
                                
        </div> 
        <div className='mt4'></div>     
    </div>
                     
    </Carousel.Item> 

    <Carousel.Item interval={33000}>       
        <div className='row ui-frame-primavera'>
            <div className='col rosebg'>
                <h2 className='useMyFont mt-2 '>
                primavera
                </h2>
            </div>
        </div>
        <div className=' row  ui-frame-primavera season-box mb-2 me-0 ms-0 mt-2'> 
        <div className='mt4'></div>
        <div className="row mt-4 ">
            <div className='col darkbg ms-4'>
                <h2 id='primavera1'className='vertical-center'> </h2>
            </div>
                           
        </div>   
        <div className="row mt-4 ">
        <div className='col darkbg ms-4 '>
                <h2 id='primavera2'className='vertical-center'> </h2>
            </div>
                                
        </div> 
        <div className='mt4'></div>     
    </div>
                     
    </Carousel.Item> 

    <Carousel.Item interval={33000}>       
        <div className='row ui-frame-outono'>
            <div className='col orangebg'>
                <h2 className='useMyFont mt-2 '>
                outono
                </h2>
            </div>
        </div>
        <div className=' row  ui-frame-outono season-box mb-2 me-0 ms-0 mt-2'> 
        <div className='mt4'></div>
        <div className="row mt-4 ">
            <div className='col darkbg ms-4'>
                <h2 id='outono1'className='vertical-center'> </h2>
            </div>
                           
        </div>   
        <div className="row mt-4 ">
        <div className='col darkbg ms-4 '>
                <h2 id='outono2'className='vertical-center'> </h2>
            </div>
                                
        </div> 
        <div className='mt4'></div>     
    </div>
                     
    </Carousel.Item> 

    

      

     

    
   
     
    </Carousel>

    <div className='container text-center'> 
          <div className='row darkbg mb-2 h-3'>
            <div className='col p-0 h-3'>
                <button className='btn btn-dark w-100 h-100 p-0' onClick={(e) => {
                                    handleSelect('left')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </button>
            </div>
            <div className='col h-3'>
        
                    <p className='mt-3'>{index+1} / 4</p>
              
            </div>
            <div className='col p-0 h-3'>
                <button className='btn btn-dark w-100 h-100' onClick={(e) => {
                                    handleSelect('right')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
          </div>                   
          </div> 
                                
        
       
        

      

     
    </div>
    <div className='mb-5'></div>
    <div className='mb-5'></div>


    </header>


   
</div>
</div>
   
  );

}


export default SeasonGuide;