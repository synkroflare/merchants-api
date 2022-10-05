import React, { useEffect } from 'react';
import {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'
import './App.css';
import { checkIfGameStarted, checkIfRoomLeader, setRoomOnline, setLocations, getUserData } from './local/functions';

const Lobby = () =>{    
    
    
    const [code, setCode] = useState(1)
    const [roomId, setRoomId] = useState()
    const [userName, setUserName] = useState(0)
    const [show,setShow] = useState(false)
    const [locationUpdated, setLocationUpdated] = useState(false)

    const [user1Id,setuser1Id] = useState()
    const [user2Id,setuser2Id] = useState()
    const [user3Id,setuser3Id] = useState()
    const [user4Id,setuser4Id] = useState()
    const [user5Id,setuser5Id] = useState()
    const [user6Id,setuser6Id] = useState()
    const [user7Id,setuser7Id] = useState()
    const [user8Id,setuser8Id] = useState()

    let socket = new WebSocket("ws://merchants-api.onrender.com:8082");
    

   

    let player1Name = 'vaga 1'
    let player2Name = 'vaga 2'
    let player3Name = 'vaga 3'
    let player4Name = 'vaga 4'
    let player5Name = 'vaga 5'
    let player6Name = 'vaga 6'
    let player7Name = 'vaga 7'
    let player8Name = 'vaga 8'

    const imperiodetremecemColor = 'MidnightBlue'
    const imperiodafrancaColor = 'MidnightBlue'
    const reinodearagonColor = 'FireBrick'
    const principadodemoscowColor = 'FireBrick'
    const moldaviaColor = 'MidnightBlue'
    const ducadodeatenasColor = 'DarkTurquoise'
    const imperiodosmarmelucosColor = 'DarkOrange'
    const reinohungaroColor = 'ForestGreen'
    const reinodaimericiaColor = 'black'
    const inglaterraColor = 'FireBrick'
    const reinodaarmeniaColor = 'DeepPink'

    const handleClose = () => {
      setShow(false)
    }
    
    
    
    useEffect(() =>  {      

      const interval = setInterval(() => {
        
        const checkRoomLeader = checkIfRoomLeader(sessionStorage.getItem("userid"))
        checkRoomLeader.then(value => {
          if (value === 0) {
            document.querySelector('#startbtn').disabled = false
            document.querySelector('#settingsbtn').disabled = false
          }
          if (value !== 0) {
            document.querySelector('#startbtn').disabled = true
            document.querySelector('#settingsbtn').disabled = true
          }
           
        }
        )

        const checkIfGameStartedC = checkIfGameStarted()
        checkIfGameStartedC.then(value => {
          if (value == true) {
            navigate('/pregame')
          }
        }
        )
     
        fetch('https://merchants-api.onrender.com/room/list',
        {                
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        }
        )                             
        .then(response => response.json())  
        .then(function(data) {
          
          setuser1Id(data[0].slot1Id)
          setuser2Id(data[0].slot2Id)
          setuser3Id(data[0].slot3Id)
          setuser4Id(data[0].slot4Id)
          setuser5Id(data[0].slot5Id)
          setuser6Id(data[0].slot6Id)
          setuser7Id(data[0].slot7Id)
          setuser8Id(data[0].slot8Id)

          player1Name = data[0].slot1Name
          player2Name = data[0].slot2Name
          player3Name = data[0].slot3Name
          player4Name = data[0].slot4Name 
          player5Name = data[0].slot5Name
          player6Name = data[0].slot6Name
          player7Name = data[0].slot7Name
          player8Name = data[0].slot8Name                      
        })

        document.querySelector('#slot1').innerHTML = player1Name
        document.querySelector('#slot2').innerHTML = player2Name
        document.querySelector('#slot3').innerHTML = player3Name
        document.querySelector('#slot4').innerHTML = player4Name
        document.querySelector('#slot5').innerHTML = player5Name
        document.querySelector('#slot6').innerHTML = player6Name
        document.querySelector('#slot7').innerHTML = player7Name
        document.querySelector('#slot8').innerHTML = player8Name
        

        if (player1Name == 'default_blank_name') {
          document.querySelector('#slot1').innerHTML = 'vaga 1'
          document.querySelector('#slotbox1').style.backgroundColor = 'rgb(0,0,0,0.5)'
        }

        if (player2Name == 'default_blank_name') {
          document.querySelector('#slot2').innerHTML = 'vaga 2'
          document.querySelector('#slotbox2').style.backgroundColor = 'rgb(0,0,0,0.5)'
        }

        if (player3Name == 'default_blank_name') {
          document.querySelector('#slot3').innerHTML = 'vaga 3'
          document.querySelector('#slotbox3').style.backgroundColor = 'rgb(0,0,0,0.5)'
        }

        if (player4Name == 'default_blank_name') {
          document.querySelector('#slot4').innerHTML = 'vaga 4'
          document.querySelector('#slotbox4').style.backgroundColor = 'rgb(0,0,0,0.5)'
        }

        if (player5Name == 'default_blank_name') {
          document.querySelector('#slot5').innerHTML = 'vaga 5'
          document.querySelector('#slotbox5').style.backgroundColor = 'rgb(0,0,0,0.5)'
        }

        if (player6Name == 'default_blank_name') {
          document.querySelector('#slot6').innerHTML = 'vaga 6'
          document.querySelector('#slotbox6').style.backgroundColor = 'rgb(0,0,0,0.5)'
        }

        if (player7Name == 'default_blank_name') {
          document.querySelector('#slot7').innerHTML = 'vaga 7'
          document.querySelector('#slotbox7').style.backgroundColor = 'rgb(0,0,0,0.5)'
        }

        if (player8Name == 'default_blank_name') {
          document.querySelector('#slot8').innerHTML = 'vaga 8'
          document.querySelector('#slotbox8').style.backgroundColor = 'rgb(0,0,0,0.5)'
        }        
      }, 100);
    
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])

    socket.onmessage = function(event) {
      console.log("here", event.data);
      if (event.data === 'sm=lobby:update user locations') {
        updateCountrySlot()
      }      
    };    
    
    useEffect(()=>{
      updateCountrySlot()
    },[user1Id, user2Id, user3Id, user4Id, user5Id, user6Id, user7Id, user8Id, locationUpdated]
    )

    const updateCountrySlot = async () => {
      const userIdArray = [user1Id, user2Id, user3Id, user4Id, user5Id, user6Id, user7Id, user8Id]
      
      var idata = await getUserData(sessionStorage.getItem('userid'))
      sessionStorage.setItem('userlocation',idata.location)
      sessionStorage.setItem('usercolor',idata.color)

      for (var i=0;i<=7;i++){
        if(userIdArray[i]) {
          var udata = await getUserData(userIdArray[i])
          document.querySelector('#countryslot'+(i+1)).innerText = udata.location
          try {document.querySelector('#slotbox'+(i+1)).style.backgroundColor = udata.color} catch{console.log('error on '+i)}
          var text = (udata.location+'Color').replace(/ /g,'')
          document.querySelector('#countrybox'+(i+1)).style.backgroundColor = udata.color
          document.querySelector('#countrybox'+(i+1)).classList.add('myGlower-white2')
         if(userIdArray[i].location === 'default' || !userIdArray[i]) {
          document.querySelector('#countryslot'+(i+1)).innerText = ''
          document.querySelector('#countrybox'+(i+1)).style.backgroundColor = 'rgb(211,211,211,0.3)'
          document.querySelector('#countrybox'+(i+1)).classList.remove('myGlower-white2')
         }                    
        }
      }
    }

    const navigate = useNavigate();

    const WebSocketSend = (data) => {
      socket.send(data)
    } 

  return (
    <div className='App'> 
     <nav className="navbar navbar-expand-lg bg-light fixed-bottom">
            <div className="container-fluid w-100">            
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
               

                  <div className="col-7">
                    <div className=" navbar-right pull-right" ><h1 className ='useMyFont mt-1 mb-1'>Merchants</h1></div>                    
                </div>              
            </div>           
            </div>        
        </nav>             
    <header className='App-header'>
    <div className="container text-center p-10 App-newbox" >
      <div className='row w-100'>
        <div className='col-2  mt-3'>
        <button className = 'btn  ui-btn d-flex align-items-start ' id='settingsbtn' onClick={(e)=>{setShow(true)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill white" viewBox="0 0 16 16">
           <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
          </svg>
        </button>  
        </div>
        <div className='col-8'>
          <h1 className='App-title useMyFont mt-3'>Sala de Espera</h1>
        </div>
        <div className='col-2'>
          <h1 className='App-title useMyFont mt-3'></h1>
        </div>
      </div>


       
      
        
   

        <button type="button mb-2" className="btn ui-btn useMyFont custom " id='startbtn' onClick={(e) => {
          setRoomOnline()
          }} >
        <h1 className ='useMyFont white'> Iniciar Partida</h1>
        </button>

        

        <div className='row mt-2'>
          <div className='col '>
            <div className='lobbybox container ' id='slotbox1'>
              <div className=' vertical-center'>
               <span className='text-center' id='slot1'>vaga 1</span>
              </div>           
            </div>

            <div className='lobbybox2 container ' id='countrybox1'>
              <div className=' vertical-center'>
               <span className='text-center vertical-center fade-in-fwd2 frontstroke' id='countryslot1'></span>
              </div>           
            </div>
          </div>
          <div className='col'>
            <div className='lobbybox container' id='slotbox2'>
              <div className=' vertical-center'>
               <span className='text-center ' id='slot2'>vaga 2</span>
              </div>
           
            </div>
            <div className='lobbybox2 container' id='countrybox2'>
              <div className=' vertical-center'>
               <span className='text-center vertical-center fade-in-fwd2 frontstroke' id='countryslot2'></span>
              </div>           
            </div>
          </div>         
        </div>

        <div className='row mt-2'>
          <div className='col'>
            <div className='lobbybox container' id='slotbox3'>
              <div className=' vertical-center'>
               <span className='text-center ' id='slot3'>vaga 3</span>
              </div>
           
            </div>
            <div className='lobbybox2 container' id='countrybox3'>
              <div className=' vertical-center'>
               <span className='text-center frontstroke' id='countryslot3'></span>
              </div>           
            </div>
          </div>
          <div className='col'>
            <div className='lobbybox container' id='slotbox4'>
              <div className=' vertical-center'>
               <span className='text-center ' id='slot4'>vaga 4</span>
              </div>
           
            </div>
            <div className='lobbybox2 container' id='countrybox4'>
              <div className=' vertical-center'>
               <span className='text-center vertical-center frontstroke' id='countryslot4'></span>
              </div>           
            </div>
          </div>         
        </div>

        <div className='row mt-2'>
          <div className='col'>
            <div className='lobbybox container' id='slotbox5'>
              <div className=' vertical-center'>
               <span className='text-center 'id='slot5'>vaga 5</span>
              </div>
           
            </div>
            <div className='lobbybox2 container' id='countrybox5'>
              <div className=' vertical-center'>
               <span className='text-center vertical-center frontstroke' id='countryslot5'></span>
              </div>           
            </div>
          </div>
          <div className='col'>
            <div className='lobbybox container' id='slotbox6'>
              <div className=' vertical-center'>
               <span className='text-center 'id='slot6'>vaga 6</span>
              </div>
           
            </div>
            <div className='lobbybox2 container' id='countrybox6'>
              <div className=' vertical-center'>
               <span className='text-center vertical-center frontstroke' id='countryslot6'></span>
              </div>           
            </div>
          </div>         
        </div>

        <div className='row mt-2 mb-2' >
          <div className='col'>
            <div className='lobbybox container' id='slotbox7'>
              <div className=' vertical-center'>
               <span className='text-center 'id='slot7'>vaga 7</span>
              </div>
           
            </div>
            <div className='lobbybox2 container' id='countrybox7'>
              <div className=' vertical-center'>
               <span className='text-center vertical-center frontstroke' id='countryslot7'></span>
              </div>           
            </div>
          </div>
          <div className='col'>
            <div className='lobbybox container' id='slotbox8'>
              <div className=' vertical-center'>
               <span className='text-center 'id='slot8'>vaga 8</span>
              </div>
           
            </div>
            <div className='lobbybox2 container' id='countrybox8'>
              <div className=' vertical-center'>
               <span className='text-center vertical-center frontstroke' id='countryslot8'></span>
              </div>           
            </div>
          </div>         
        </div>
      

        </div>
    </header>
    <Modal show={show} onHide={handleClose}    centered >
        
        <Modal.Body>      
        <div className='row '>
            <div className='col center lightbluebg'>
            <h1 className='App-title useMyFont white vertical-center2'>configuracoes da partida</h1>        
        
           
            </div>
        </div>

        <div className='row  mt-2 mb-0 fade-in-fwd2 p-3 ' id='errorContainer'>
          <div className='col-10  center'>
            <h5 className='useMyFont white mt-2' id='messageContainer'>um jogador por pais</h5>               
          </div>
          <div className='col-2  center'>
            <div className="form-check form-switch">
              <input className="form-check-input"   type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>              
          </div>
        </div>

        <div className='row  mt-0 mb-2 fade-in-fwd2 pt-0 p-3' id='errorContainer'>
          <div className='col-10  center p-0'>
            <h5 className='useMyFont white mt-2' id='messageContainer'>sortear paises para jogadores</h5>               
          </div>
          <div className='col-2 p-0  center'>
            <button className='ui-btn btn' onClick={(e)=> {
              setLocations()
              WebSocketSend('cm=lobby:update user locations')
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise white" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
              </svg> 
            </button>             
          </div>
        </div>

        <div className=''>
            <div className='row mt-2 darkbg '>              
            <div className='col d-flex justify-content-center mb-3'>
            </div>   
            </div>   
        </div>

       

        </Modal.Body>
            <Modal.Footer>
        <Button className='ui-btn' variant='dark' onClick={handleClose}> <p className='useMyFont text-center letterspacing button1 '>Fechar</p></Button>
      </Modal.Footer>       
    </Modal>
</div>


  );
}

export default Lobby;