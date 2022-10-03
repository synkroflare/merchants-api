
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
    goldDep
    
} from './constants/global';

import * as global from './constants/global'

const ProductGuide = () =>{ 

    
    
    const [show, setShow] = useState(false);
    const [modalIndex, setModalIndex] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);       
    }

    const [index, setIndex] = useState(0);  

    const [color, setColor] = useState('yellow')
    const [dif, setDif] = useState('medio')
    const [points, setPoints] = useState('0')
    const [icon, setIcon] = useState('./2x')
    const [dependencies, setDependencies] = useState([]) 
    const [dependencies2, setDependencies2] = useState([]) 

    const [productName, setProductName] = useState('nome')

    const handleSelect = (selectedIndex, e) => {
        switch (index){
            case 0:
                setIndex(1)
                break;
            case 1:
                setIndex(0)
                break;    
        }
      }   
    const navigate = useNavigate(); 
    
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

    const setModalProps = async (dependencies2, dependencies1, icon1, name1, dif1, color1, points1) => {
        
        setDependencies(dependencies1)
        setDependencies2(dependencies2) 
        setIcon(icon1)
        setProductName(name1)         
        setDif(dif1)
        setColor(color1)
        setPoints(points1)
        

    }

    function modalOperation(dependencies2, dependencies1, icon1, name1, dif1, color1, points1) {
        setModalProps(dependencies2, dependencies1, icon1, name1, dif1, color1, points1  )
        handleShow()
    }    
          
    function renderModal() {    
        document.getElementById('row2').style.display ='table-row' 
        document.getElementById('row3').style.display ='table-row' 
        document.getElementById('row4').style.display ='table-row' 

        let nameContainer = document.getElementById('modalname')
        let iconContainer = document.getElementById('modalicon')
        let difContainer = document.querySelector('#modalDif')
        let pointsContainer = document.getElementById('modalpoints')
  
        let depContainer1 = document.querySelector('#bdep1')   
        let depContainer2 = document.querySelector('#bdep2')   
        let depContainer3 = document.getElementById('bdep3')   
        let depContainer4 = document.getElementById('bdep4')  
        let depContainer5 = document.querySelector('#bdep5')   
        let depContainer6 = document.getElementById('bdep6')   
        let depContainer7 = document.getElementById('bdep7')   
        let depContainer8 = document.getElementById('bdep8') 
        
        depContainer1.classList.add('buildIcon')
        depContainer2.classList.add('buildIcon')
        depContainer3.classList.add('buildIcon')
        depContainer4.classList.add('buildIcon')
        depContainer5.classList.add('buildIcon')
        depContainer6.classList.add('buildIcon')
        depContainer7.classList.add('buildIcon')
        depContainer8.classList.add('buildIcon')

        depContainer1.classList.remove('materialIcon')
        depContainer2.classList.remove('materialIcon')
        depContainer3.classList.remove('materialIcon')
        depContainer4.classList.remove('materialIcon')
        depContainer5.classList.remove('materialIcon')
        depContainer6.classList.remove('materialIcon')
        depContainer7.classList.remove('materialIcon')
        depContainer8.classList.remove('materialIcon')
       
        depContainer1.src = './buildings/'+dependencies[0]+'.png'
        depContainer2.src = './buildings/'+dependencies[1]+'.png'
        depContainer3.src = './buildings/'+dependencies[2]+'.png'
        depContainer4.src = './buildings/'+dependencies[3]+'.png'
        depContainer5.src = './buildings/'+dependencies[4]+'.png'
        depContainer6.src = './buildings/'+dependencies[5]+'.png'
        depContainer7.src = './buildings/'+dependencies[6]+'.png'
        depContainer8.src = './buildings/'+dependencies[7]+'.png'

        if (dependencies[6] === undefined && dependencies[7] === undefined) {
            document.getElementById('row4').style.display ='none'             
        }

        if (dependencies[4] === undefined && dependencies[5] === undefined) {
            document.getElementById('row3').style.display ='none' 
        }
        
        if (dependencies[2] === undefined && dependencies[3] === undefined) {
            document.getElementById('row2').style.display ='none' 
        }
         
        nameContainer.innerHTML = productName
        iconContainer.src = ("./" + icon + ".png")
        difContainer.src = ("./difficulty/" + dif + ".png")
      //  difContainer.style.color = color
        pointsContainer.innerHTML = points        
    }

    const removeTableAnimation = async () => {
        document.querySelector('#modalTable').classList.remove('fade-in-fwd3')
    }
    
    const modalChange = async () => {
        if (modalIndex === 0) {
            document.getElementById('row4').style.display ='table-row'  
            document.getElementById('row3').style.display ='table-row'  
            document.getElementById('row2').style.display ='table-row'  

            document.querySelector('#modalTable').classList.add('fade-in-fwd3')
            const timeout = setTimeout(removeTableAnimation, 200)

            let depContainer1 = document.querySelector('#bdep1')   
            let depContainer2 = document.querySelector('#bdep2')   
            let depContainer3 = document.getElementById('bdep3')   
            let depContainer4 = document.getElementById('bdep4')  
            let depContainer5 = document.querySelector('#bdep5')   
            let depContainer6 = document.getElementById('bdep6')   
            let depContainer7 = document.getElementById('bdep7')   
            let depContainer8 = document.getElementById('bdep8')          
           
            depContainer1.src = './'+dependencies2[0]+'.png'
            depContainer2.src = './'+dependencies2[1]+'.png'
            depContainer3.src = './'+dependencies2[2]+'.png'
            depContainer4.src = './'+dependencies2[3]+'.png'
            depContainer5.src = './'+dependencies2[4]+'.png'
            depContainer6.src = './'+dependencies2[5]+'.png'
            depContainer7.src = './'+dependencies2[6]+'.png'
            depContainer8.src = './'+dependencies2[7]+'.png'

            depContainer1.classList.remove('buildIcon')
            depContainer2.classList.remove('buildIcon')
            depContainer3.classList.remove('buildIcon')
            depContainer4.classList.remove('buildIcon')
            depContainer5.classList.remove('buildIcon')
            depContainer6.classList.remove('buildIcon')
            depContainer7.classList.remove('buildIcon')
            depContainer8.classList.remove('buildIcon')

            depContainer1.classList.add('materialIcon')
            depContainer2.classList.add('materialIcon')
            depContainer3.classList.add('materialIcon')
            depContainer4.classList.add('materialIcon')
            depContainer5.classList.add('materialIcon')
            depContainer6.classList.add('materialIcon')
            depContainer7.classList.add('materialIcon')
            depContainer8.classList.add('materialIcon')
    
            if (dependencies2[6] === undefined && dependencies2[7] === undefined) {
                document.getElementById('row4').style.display ='none'  
            }
    
            if (dependencies2[4] === undefined && dependencies2[5] === undefined) {
                document.getElementById('row3').style.display ='none'  
            }
            
            if (dependencies2[2] === undefined && dependencies2[3] === undefined) {
                document.getElementById('row2').style.display ='none'  
            }

            setModalIndex(1)
            return

        }
        if (modalIndex === 1){
            document.querySelector('#modalTable').classList.add('fade-in-fwd3')
            const timeout = setTimeout(removeTableAnimation, 200)
            renderModal()            
            setModalIndex(0)
            return
        }
    }
    
    

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////  

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
                <div className="col-6">
                    <button className = 'btn  ui-btn d-flex align-items-start mt-1 mb-1 white' onClick={(e) => {
                                        navigate('/guide');
                                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="calc(5px + 4vw)" height="calc(5px + 5vw)" fill="currentColor" className="white bi bi-arrow-return-left" viewBox="0 0 16 16">
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

    <div className='container-fluid p-0 '>      
    <header className='App-header'>
    <div className="container App-newbox d-flex align-items-baseline" >
 
    
         <div className='container text-center mt-2'>  <h1 className='header1'>Selecione um Produto</h1></div>   

          <div className='container text-center'> 
          <div className='row darkbg mb-2 h-3'>
            <div className='col p-0 h-3'>
                <button className='btn ui-btn w-100 h-100 p-0' onClick={(e) => {
                                    handleSelect(1)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-arrow-left white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 20 8z"/>
                    </svg>
                </button>
            </div>
            <div className='col h-3'>
        

              
            </div>
            <div className='col p-0 h-3'>
                <button className='btn ui-btn w-100 h-100' onClick={(e) => {
                                    handleSelect(1)}}>
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
                        <div className="col pe-1">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.cheeseDepP,cheeseDep, 'cheese', 'Queijo', '3', 'white', '5');
                                }}>  <img src={"./cheese.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>5</p></button>                              
                            </div>
                        </div>
                        <div className="col ps-1 pe-1">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.milkDepP, milkDep, 'milk', 'Leite', '2', 'white', '2');
                                }}>  <img src={"./milk.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>2</p></button>                              
                            </div>
                        </div>
                        <div className="col ps-1">
                            <div id =''>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.eggDepP,eggDep, 'egg', 'Ovo', '1', 'white', '1');
                                }}>  <img src={"./egg.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>1</p></button>                  
                            </div>
                        </div>                
        </div>    

        <div className="row ">
                        <div className="col pe-1">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.beerDepP,beerDep, 'beer', 'Cerveja', '3', 'white', '5');
                                }}>  <img src={"./beer.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>5</p></button>                              
                            </div>
                        </div>
                        <div className="col hide ps-1 pe-1">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.teaDepP,teaDep, 'tea', 'Cha', '2', 'white', '2');
                                }}>  <img src={"./tea.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>2</p></button>                             
                            </div>
                        </div>
                        <div className="col custom ps-1">
                            <div id =''>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.pingaDepP,pingaDep, 'pinga', 'Aguardente', '3', 'white', '3');
                                }}>  <img src={"./pinga.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>5</p></button>                  
                            </div>
                        </div>                
        </div>

        <div className="row ">
                        <div className="col pe-1">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.gloveDepP,gloveDep, 'glove', 'Luvas', '2', 'white', '2');
                                }}>  <img src={"./glove.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>2</p></button>                             
                            </div>
                        </div>
                        <div className="col hide pe-1 ps-1">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.tunicDepP,tunicDep, 'tunic', 'Tunica Real', '4', 'white', '10');
                                }}>  <img src={"./tunic.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>10</p></button>                              
                            </div>
                        </div>
                        <div className="col custom ps-1">
                            <div id =''>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.helmetDepP,helmetDep, 'helmet', 'Elmo Real', '5', 'white', '20');
                                }}>  <img src={"./helmet.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>20</p></button>                   
                            </div>
                        </div>                
        </div>

        
        <div className="row ">
                        <div className="col pe-1">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.coinDepP,coinDep, 'coin', 'Moedas', '3', 'white', '5');
                                }}>  <img src={"./gold_coin.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>5</p></button>                              
                            </div>
                        </div>
                        <div className="col hide pe-1 ps-1 ">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.ironarmorDepP,ironarmorDep, 'iron_armor', 'Armadura de Ferro', '4', 'white', '10');
                                }}>  <img src={"./iron_armor.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>10</p></button>                             
                            </div>
                        </div>
                        <div className="col custom ps-1">
                            <div id =''>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.diamondDepP,diamondDep, 'diamond', 'Diamante cru', '3', 'white', '3');
                                }}>  <img src={"./diamond.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>5</p></button>                   
                            </div>
                        </div>                
        </div>   

        
        <div className="row ">
                        <div className="col pe-1">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.pieDepP,pieDep, 'pie', 'Torta de Abobora', '5', 'white', '20');
                                }}>  <img src={"./pie.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>20</p></button>                               
                            </div>
                        </div>
                        <div className="col hide pe-1 ps-1">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.cakeDepP,cakeDep, 'cake', 'Bolo', '5', 'white', '20');
                                }}>  <img src={"./cake.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>20</p></button>                              
                            </div>
                        </div>
                        <div className="col custom ps-1 mb-4">
                            <div id =''>
                            <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.crownDepP,crownDep, 'crown', 'Coroa', '5', 'white', '20');
                                }}>  <img src={"./crown.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>20</p></button>                     
                            </div>
                        </div>                
        </div>            
      </Carousel.Item>                       

      <Carousel.Item interval={33000}>
        <div className="row ">
                        <div className="col">
                            <div id ='getid'>
                                <button className= 'btn  ui-btn  mb-2' id = 'button1' onClick={(e) => {
                                    modalOperation(global.breadDepP,breadDep, 'bread', 'Pao', '2', 'white', '2');
                                }}>  <img src={"./bread.png"} className='productIcon' alt='logo' /> 
                                        <p className = 'mb-0 redbg white'>2</p></button>                               
                            </div>
                        </div>
                        <div className="col hide ">
                            <div id ='getid'>
                                <button className= 'btn  ui-btn  mb-2' id = 'button2' onClick={(e) => {
                                    modalOperation(global.wineDepP,wineDep, 'wine', 'Garrafa de vinho', '3', 'yellow', '5');
                                }}>  <img src={"./wine.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white letterspacing2'>5</p></button>                               
                            </div>
                        </div>
                        <div className="col custom">
                            <div id =''>
                                <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.hammerDepP,hammerDep, 'hammer', 'Marreta', '2', 'white', '2');
                                }}>   <img src={"./hammer.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>2 </p></button>                    
                            </div>
                        </div>                
        </div>    

        <div className="row ">
                        <div className="col">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.woodenshieldDepP, woodenshieldDep, 'wooden_shield', 'Escudo de madeira', '1', 'white', '1');
                                }}>   <img src={"./wooden_shield.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>1 </p></button>                             
                            </div>
                        </div>
                        <div className="col hide ">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.leathersuitDepP,leathersuitDep, 'leather_suit', 'camisa de couro', '1', 'white', '1');
                                }}>   <img src={"./leather_suit.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>1 </p></button>                                
                            </div>
                        </div>
                        <div className="col custom">
                            <div id =''>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.bowDepP,bowDep, 'bow', 'arco', '3', 'white', '5');
                                }}>   <img src={"./bow.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>5 </p></button>                    
                            </div>
                        </div>                
        </div>

        <div className="row ">
                        <div className="col">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.quiverDepP,quiverDep, 'quiver', 'aljava', '5', 'white', '20');
                                }}>   <img src={"./quiver.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>20 </p></button>                              
                            </div>
                        </div>
                        <div className="col hide ">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.pykeDepP,pykeDep, 'pyke', 'alabarda', '4', 'white', '10');
                                }}>   <img src={"./pyke.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>10 </p></button>                                
                            </div>
                        </div>
                        <div className="col custom">
                            <div id =''>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.ironshieldDepP,ironshieldDep, 'iron_shield', 'Escudo', '3', 'white', '5');
                                }}>   <img src={"./iron_shield.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>5 </p></button>                         
                            </div>
                        </div>                
        </div>

        
        <div className="row ">
                        <div className="col">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.linencapeDepP,linencapeDep, 'linen_cape', 'capa de linho', '2', 'white', '2');
                                }}>   <img src={"./linen_cape.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>2</p></button>                               
                            </div>
                        </div>
                        <div className="col hide ">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.coatDepP,coatDep, 'coat', 'casaco', '3', 'white', '5');
                                }}>   <img src={"./coat.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>5</p></button>                               
                            </div>
                        </div>
                        <div className="col custom">
                            <div id =''>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.magerobeDepP,magerobeDep, 'mage_robe', 'manto de mago', '5', 'white', '20');
                                }}>   <img src={"./mage_robe.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>20 </p></button>                    
                            </div>
                        </div>                
        </div>   

        
        <div className="row ">
                        <div className="col">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.magehatDepP,magehatDep, 'mage_hat', 'chapeu de mago', '5', 'white', '20');
                                }}>   <img src={"./mage_hat.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>20 </p></button>                              
                            </div>
                        </div>
                        <div className="col hide ">
                            <div id ='getid'>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.diamondringDepP,diamondringDep, 'diamond_ring', 'anel de diamante', '4', 'white', '10');
                                }}>   <img src={"./diamond_ring.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>10 </p></button>                               
                            </div>
                        </div>
                        <div className="col custom">
                            <div id =''>
                            <button className= 'btn  ui-btn  mb-2 pb-2' id = 'button3' onClick={(e) => {
                                    modalOperation(global.goldDepP,goldDep, 'gold', 'ouro cru', '2', 'white', '2');
                                }}>   <img src={"./gold.png"} className='productIcon' alt='logo' />
                                        <p className = 'mb-0 redbg white'>2 </p></button>                     
                            </div>
                        </div>                
        </div>            
      </Carousel.Item>  
    </Carousel>
                                
        
       
        

      

     
    </div>
    <div className='mb-5'></div>
    <div className='mb-5'></div>


    </header>

    <Modal show={show} onHide={handleClose} onShow={renderModal}  centered >
 
        <Modal.Body>      
        <table className="table table-dark mb-0 myGlower" id='modalTable'>           
            <tbody onClick={(e)=>{modalChange()}}>
                <tr>                
                <td className='useMyFont text-center bdep letterspacing'>
                    <img className='buildIcon' id ='bdep1'/>
                </td>
                <td className='useMyFont text-center bdep letterspacing' >
                <img className='buildIcon' id ='bdep2'/></td>             
                </tr>
                <tr id='row2'>            
                <td className='useMyFont text-center bdep letterspacing'>
                <img className='buildIcon' id ='bdep3'/>
                </td>
                <td className='useMyFont text-center bdep letterspacing'id=''>
                <img className='buildIcon' id ='bdep4'/></td>           
                </tr>
                <tr id='row3'>            
                <td className='useMyFont text-center bdep letterspacing'id=''>
                <img className='buildIcon' id ='bdep5'/>                
                </td>
                <td className='useMyFont text-center bdep letterspacing mt-auto mb-auto'id=''>
                <img className='buildIcon' id ='bdep6'/>
                </td>
                </tr>
                <tr id='row4'>             
              <td className='useMyFont text-center bdep letterspacing'id=''>
              <img className='buildIcon' id ='bdep7'/>
              </td>
              <td className='useMyFont text-center bdep letterspacing'id=''>
              <img className='buildIcon' id ='bdep8'/>
              </td>
              </tr>
            </tbody>
        </table>

       
        <div className='row'>
        <h4 className ='useMyFont self-align-center text-center white mt-1 mb-0' id ='modalname'> 
                    Mage Hat
                </h4>
            <div className='col-5'>
            <div id ='' className ='text-center mt-1'>
                                <button className= 'btn  ui-btn  mb-2 ' >  
                                <img src={"./mage_hat.png"} className='guideIcon modalicon' id = 'modalicon' alt='logo' /> 
                                </button>                               
                            </div>                       
            </div>
            <div className='col-7  text-center d-flex align-items-center' align="center">               
            <div className='row '>
                        <div className='col text-center '><h3 className='useMyFont white'>Dificuldade: </h3></div>
                        <div className='col text-center '><img src={"./difficulty/star4c.png"} className='difIcon' id = 'modalDif' alt='logo' />  </div>                     
                        </div>                                                                    
            </div>
        </div>
        <div className='row mt-2 darkbg'>       
            <div className='col text-center'> <h3 className='useMyFont mb-1 mt-1 white '>Pontos:</h3></div>
            <div className='col text-center'> <h3 className='useMyFont mb-1 mt-1 white'id = 'modalpoints'>20</h3></div>    
        </div>   

       

        </Modal.Body>
            <Modal.Footer>
        <Button  variant="dark " className='ui-btn' onClick={handleClose}> <p className='useMyFont text-center letterspacing'>Fechar</p></Button>
      </Modal.Footer>       
    </Modal>

</div>
</div>
   
  );

}


export default ProductGuide;