
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
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

const BuildingGuide = () =>{ 

    const socket = new WebSocket("ws://192.168.0.10:8082")

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
    const [useC5, setUseC5] = useState('')
    const [useC6, setUseC6] = useState('')

    const [makeC1, setMakeC1] = useState('')
    const [makeC2, setMakeC2] = useState('')
    const [makeC3, setMakeC3] = useState('')
    const [makeC4, setMakeC4] = useState('')
    const [makeC5, setMakeC5] = useState('')
    const [makeC6, setMakeC6] = useState('')

    const [guideClick, setGuideClick] = useState(false)

    const handleSelect = (direction, e) => {
          switch (direction) {
            case 'right':
                if (index < 2) {
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
                    setIndex(2)                    
                    break;  
                }
          }        
        }   

    const navigate = useNavigate(); 
    
    const setModalProps = async (dependencies1, icon1, name1, dif1, useArray, makeArray) => {
         
        setIcon(icon1)
        setProductName(name1)         
        setDif(dif1)

        try {setUseC1('./' + useArray[0] + '.png')}
        catch {setUseC1('./undefined.png')}
        try {setUseC2('./' + useArray[1] + '.png')}
        catch {setUseC2('./undefined.png')}
        try {setUseC3('./' + useArray[2] + '.png')}
        catch {setUseC3('./undefined.png')}
        try {setUseC4('./' + useArray[3] + '.png')}
        catch {setUseC4('./undefined.png')} 
        try {setUseC5('./' + useArray[4] + '.png')}
        catch {setUseC5('./undefined.png')} 
        try {setUseC6('./' + useArray[5] + '.png')}
        catch {setUseC6('./undefined.png')} 
        
        try {setMakeC1('./' + makeArray[0] + '.png')}
        catch {setMakeC1('./undefined.png')}
        try {setMakeC2('./' + makeArray[1] + '.png')}
        catch {setMakeC2('./undefined.png')}
        try {setMakeC3('./' + makeArray[2] + '.png')}
        catch {setMakeC3('./undefined.png')}
        try {setMakeC4('./' + makeArray[3] + '.png')}
        catch {setMakeC4('./undefined.png')} 
        try {setMakeC5('./' + makeArray[4] + '.png')}
        catch {setMakeC5('./undefined.png')}
        try {setMakeC6('./' + makeArray[5] + '.png')}
        catch {setMakeC6('./undefined.png')}           
        
    }

    function modalOperation(dependencies1, icon1, name1, dif1, color1, points1) {
        setModalProps(dependencies1, icon1, name1, dif1, color1, points1  )
        handleShow()
    }  
           
    function renderModal() { 
        
        const makeCArray = [makeC1, makeC2, makeC3, makeC4, makeC5, makeC6]
        const useCArray = [useC1, useC2, useC3, useC4, useC5, useC6]

        for(var i=0;i<=5;i++){

            if (makeCArray[i] !== './undefined.png' || useCArray[i] !== './undefined.png' ) {
                var tr = document.createElement("tr")
                tr.setAttribute('id','tr'+i)  
                document.getElementById('modalTable').appendChild(tr);
        
                var td = document.createElement("td")
                td.setAttribute('id','td'+i+'1')
                td.setAttribute('class','text-center')
                document.getElementById('tr'+i).appendChild(td)  
        
                var img = document.createElement("img")
                img.setAttribute('id','use'+i)
                img.setAttribute('class','materialIcon')
                img.src = useCArray[i]
                document.getElementById('td'+i+'1').appendChild(img)
        
                var td = document.createElement("td")
                td.setAttribute('id','td'+i+'2')
                td.setAttribute('class','text-center')
                document.getElementById('tr'+i).appendChild(td)
        
                var img = document.createElement("img")
                img.setAttribute('id','make'+i)
                img.setAttribute('class','materialIcon')
                img.src = makeCArray[i]
                document.getElementById('td'+i+'2').appendChild(img)
                }
        }
        
        


        let nameContainer = document.getElementById('modalname')
        let iconContainer = document.getElementById('modalicon')
        let difContainer = document.querySelector('#modalDif')

             

        nameContainer.innerHTML = productName
        iconContainer.src = ("./buildings/" + icon + ".png")         
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
                    <button className = 'btn  ui-btn d-flex align-items-start mt-1 mb-1' onClick={(e) => {
                                        navigate('/guide');
                                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="calc(5px + 4vw)" height="calc(5px + 5vw)" fill="currentColor" className="bi bi-arrow-return-left white" viewBox="0 0 16 16">
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
 
    
         <div className='container text-center mt-2'>  <h1 className='header1'>Selecione um Edificio</h1></div>   

          <div className='container text-center'> 
          <div className='row darkbg mb-2 h-3'>
            <div className='col p-0 h-3'>
                <button className='btn ui-btn w-100 h-100 p-0' onClick={(e) => {
                                    handleSelect('left')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-arrow-left white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </button>
            </div>
            <div className='col h-3'>
        
                    <p className='mt-3'>{index+1} / 3</p>
              
            </div>
            <div className='col p-0 h-3'>
                <button className='btn ui-btn w-100 h-100' onClick={(e) => {
                                    handleSelect('right')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-arrow-right white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
          </div>                   
          </div>                    
      

        

        <Carousel  activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item interval={33000}> 
        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de cevada', '3t1s', null, buildprops.cevadafarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>cevada</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de trigo', '2t2s', null, buildprops.wheatfarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>trigo</p></button>                              
                            </div>
                        </div>                                                    
        </div>    

        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de linho', '2t2s', null, buildprops.linenfarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>linho</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de uva', '2t2s', null, buildprops.grapefarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>uva</p></button>                              
                            </div>
                        </div>                                                    
        </div>

        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de ovelhas', '3',buildprops.sheepfarmU , buildprops.sheepfarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>ovelha</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de galinhas', '3', buildprops.chickenfarmU,buildprops.chickenfarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>galinha</p></button>                              
                            </div>
                        </div>                                                    
        </div>

        
        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de porcos', '3', buildprops.pigfarmU, buildprops.pigfarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>porco</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de vacas', '3', buildprops.cowfarmU, buildprops.cowfarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>vaca</p></button>                              
                            </div>
                        </div>                                                    
        </div>  

        
        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de cana de acucar', '3', buildprops.sugarcanefarmU, buildprops.sugarcanefarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>cana </p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de abobora', '3', buildprops.pumpkinfarmU, buildprops.pumpkinfarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>abobora</p></button>                              
                            </div>
                        </div>                                                    
        </div>              
      </Carousel.Item>    

       <Carousel.Item interval={33000}> 
       <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-woodcutter', 'lenharia','3', buildprops.woodcutterU, buildprops.woodcutterM);
                                }}>  <img src={"./buildings/m-woodcutter.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>troncos</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-sawmill', 'serraria', '3', buildprops.sawmillU, buildprops.sawmillM);
                                }}>  <img src={"./buildings/m-sawmill.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>tabua</p></button>                              
                            </div>
                        </div>                                                    
        </div>  

          <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-carpentry', 'carpintaria', '3', buildprops.carpentryU, buildprops.carpentryM);
                                }}>  <img src={"./buildings/m-carpentry.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>varios</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-quarry', 'pedreira', '3',  buildprops.quarryU, buildprops.quarryM);
                                }}>  <img src={"./buildings/m-quarry.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>pedra</p></button>                              
                            </div>
                        </div>                                                    
        </div>   
        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-mina', 'mina de ferro', '3',  buildprops.ironmineU, buildprops.ironmineM);
                                }}>  <img src={"./buildings/m-mina.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>ferro</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-mina', 'mina de carvao', '3', buildprops.coalmineU, buildprops.coalmineM);
                                }}>  <img src={"./buildings/m-mina.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>carvao</p></button>                              
                            </div>
                        </div>                                                    
        </div>    

        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-mina', 'mina de diamante', '3', null, buildprops.diamondmineM);
                                }}>  <img src={"./buildings/m-mina.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>diamante</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-mina', 'mina de ouro', '3', null, buildprops.goldmineM);
                                }}>  <img src={"./buildings/m-mina.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>ouro</p></button>                              
                            </div>
                        </div>                                                    
        </div>

        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-mina', 'mina de silica', '3', null, buildprops.silicamineM);
                                }}>  <img src={"./buildings/m-mina.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>silica</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-metalurgist', 'metalurgica', '3', buildprops.metalurgistU, buildprops.metalurgistM);
                                }}>  <img src={"./buildings/m-metalurgist.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>varios</p></button>                              
                            </div>
                        </div>                                                    
        </div>

        
      

        
                 
      </Carousel.Item> 

       <Carousel.Item interval={33000}> 

       <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-blacksmith', 'ferreiro', '3t1s', buildprops.blacksmithU,buildprops.blacksmithM);
                                }}>  <img src={"./buildings/m-blacksmith.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>armamento</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-glasshouse', 'vidraceiro', '3', buildprops.glasshouseU, buildprops.glasshouseM);
                                }}>  <img src={"./buildings/m-glasshouse.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>vidro</p></button>                              
                            </div>
                        </div>                                                    
        </div>  
        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-tailoring', 'alfaiate', '3', buildprops.tailoringU, buildprops.tailoringM);
                                }}>  <img src={"./buildings/m-tailoring.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>roupas</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-jeweler', 'joalheiro', '3', buildprops.jewelerU, buildprops.jewelerM);
                                }}>  <img src={"./buildings/m-jeweler.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>joias</p></button>                              
                            </div>
                        </div>                                                    
        </div>    

        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-fishermans', 'pesqueiro', '3', buildprops.fishermansU, buildprops.fishermansM);
                                }}>  <img src={"./buildings/m-fishermans.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>peixe</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-destilery', 'destilaria', '3', buildprops.destileryU, buildprops.destileryM);
                                }}>  <img src={"./buildings/m-destilery.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>aguardente</p></button>                              
                            </div>
                        </div>                                                    
        </div>

        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-drinkhouse', 'casa de bebidas', '3', buildprops.drinkhouseU, buildprops.drinkhouseM);
                                }}>  <img src={"./buildings/m-drinkhouse.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>bebidas</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-windmill', 'moinho', '3', buildprops.windmillU, buildprops.windmillM);
                                }}>  <img src={"./buildings/m-windmill.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>farinha</p></button>                              
                            </div>
                        </div>                                                    
        </div>

        
     

        
        <div className="row ">
                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-bakery', 'padaria', '3', buildprops.bakeryU, buildprops.bakeryM);
                                }}>  <img src={"./buildings/m-bakery.png"} className='buildIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>alimentos</p></button>                              
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(cheeseDep, 'm-farm', 'fazenda de algodao', '3', null, buildprops.cottonfarmM);
                                }}>  <img src={"./buildings/m-farm.png"} className='buildIcon' alt='logo' />    
                                        <p className = 'mb-0 redbg white'>algodao</p></button>                              
                            </div>
                        </div>                                                    
        </div>              
      </Carousel.Item>                                        

     
    </Carousel>

    <div className='container text-center'> 
          <div className='row darkbg mb-2 h-3'>
            <div className='col p-0 h-3'>
                <button className='btn ui-btn w-100 h-100 p-0' onClick={(e) => {
                                    handleSelect('left')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-arrow-left white    " viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </button>
            </div>
            <div className='col h-3'>
        
                    <p className='mt-3'>{index+1} / 3</p>
              
            </div>
            <div className='col p-0 h-3'>
                <button className='btn ui-btn w-100 h-100' onClick={(e) => {
                                    handleSelect('right')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-arrow-right white" viewBox="0 0 16 16">
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

    <Modal show={show} onHide={handleClose} onShow={renderModal}  centered >
        <Modal.Header closeButton>
          <Modal.Title id ='modalhead w-100' >
                <div className='row m-2'> 
                <div className='col darkerbg'>
               
                </div>

               

             
                
                </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

      

        

        <div className='row'>
        <h4 className ='useMyFont self-align-center text-center white mt-1 darkbg' id ='modalname'> 
                    Mage Hat
                </h4>
            <div className='col text-center center'>
            <div id ='' className ='text-center mt-3'>
                                <button className= 'btn  ui-btn  mb-2 ' >  
                                <img src={"./mage_hat.png"} className='bigIcon modalicon' id = 'modalicon' alt='logo' /> 
                                </button>                               
                            </div>                       
            </div>
          
        </div>

        <div className='row mt-2 darkbg'>
       
                        <div className='col text-center'> <h3 className='useMyFont mb-1 mt-1 white '>Produtos:</h3></div>
                          

  
        </div>

        <table className="table  table-bordered mt-3 table-custom1">
           
            <tbody  id='modalTable'>
                <tr>
                
                <td className='useMyFont text-center bdep letterspacing white' id='tb1'><h3 className='m-0'>usa</h3></td>
                <td className='useMyFont text-center bdep letterspacing white' id='tb2'><h3 className='m-0'>faz</h3> </td>
               
                </tr>
               
               
             
            </tbody>
        </table>
            
           
        </Modal.Body>
            <Modal.Footer>
        <Button  variant="dark " onClick={handleClose}> <p className='useMyFont text-center letterspacing'>Fechar</p></Button>
      </Modal.Footer>
       
    </Modal>

   
</div>
</div>
   
  );

}


export default BuildingGuide;