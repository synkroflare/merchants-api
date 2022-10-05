import React, { useEffect } from 'react';
import {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'
import './App.css';
import { checkIfUserExists, checkifUserIsInRoom, enterRoom, getRoomData, getUserData, wipeData } from './local/functions';


export let usernameValue = 'default_name'
export let currentUserId = 0

const Home = () =>{    
    
 
    const [code, setCode] = useState(1)
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')
    const [adminModalShow, setAdminModalShow] = useState(false)
    const userName = sessionStorage.getItem('username')
    let emptySlot = 0
    const userId = sessionStorage.getItem('userid')
    useEffect(() => {    
      
     
    }, [])

    //////// adicionei a condition array acima por recomendação do terminal.

    const navigate = useNavigate();

    const updateInput = async (event, type) => {       
      switch (type) {
        case 'code': {
          setCode(event.target.value)
          break;       
        }
        default:
          console.log('default')
          break;
      }           
     }

    const errorModal = (message) => {
      setMessage(message)
      setShow(true)
    }

    const handleClose = () => {
      setShow(false)
    }   

    const handleCloseAdminModal = () => {
      setAdminModalShow(false)
    }

    const renderModal = () => {
      document.querySelector('#messageContainer').innerHTML = message
    }

    useEffect(()=> {      
      const text = document.querySelector("#circletext");
      text.innerHTML = text.innerText
      .split("")
      .map(
      (char, i) => `<span style="transform:rotate(${i * 11}deg)">${char}</span>`
      )
      .join("");  
    }, [show]
    )            
    
    const handleClick = async (code) => {
      
      const roomData = await getRoomData()

      if (!roomData[0]) {
        await handleClick1(code)
        handleClick2(code)  
        navigate('/lobby');
      }

      if (roomData[0]) {
        errorModal('Ja existe uma sala em andamento')
      }
     
     
    }

    const handleClick2 = async (code) => {  
      fetch('https://merchants-api.onrender.com/room/update',
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },                   
        body: JSON.stringify({activeUserId: Number(userId)})                
      }         
      )  
    }
    
    const handleClick1 = async (code) => {
    
            
            fetch('https://merchants-api.onrender.com/company',
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({code: code})
            }
            )           


            fetch('https://merchants-api.onrender.com/room',
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({slot1Name: sessionStorage.getItem('username'), slot1Id: Number(sessionStorage.getItem('userid')), code: code, status: false})
            }            
            )   
                 
            navigate('/lobby')
       } 
       
       
       const handleClickConect = async () => {
        const roomData = await getRoomData()
        
        if (!roomData[0]) {
          errorModal('nao ha nenhuma sala, considere criar uma')
          return
        }

        if (sessionStorage.getItem("userid") && roomData[0]) {                        
          const userData = await checkIfUserExists(sessionStorage.getItem("userid"))              

              if (userData === true)  {
                const userIsInRoom = await checkifUserIsInRoom(sessionStorage.getItem('userid'))

                if (userIsInRoom) {
                  if (roomData[0].status === false) {
                    navigate('/lobby')
                    return
                  }
                  if (roomData[0].status === true) {
                    navigate('/gamehome')
                    return
                  }
                 
                }
                
                if (!userIsInRoom){
                  if (roomData[0].status === false) {
                    fetch('https://merchants-api.onrender.com/room/list',
                      {
                      
                      }            
                      )
                      .then(response => response.json() 
                      .then  (function(data) {
                        if (data[0].slot8Name === "default_blank_name" ) emptySlot = 8
                        if (data[0].slot7Name === "default_blank_name" ) emptySlot = 7
                        if (data[0].slot6Name === "default_blank_name" ) emptySlot = 6
                        if (data[0].slot5Name === "default_blank_name" ) emptySlot = 5
                        if (data[0].slot4Name === "default_blank_name" ) emptySlot = 4
                        if (data[0].slot3Name === "default_blank_name" ) emptySlot = 3
                        if (data[0].slot2Name === "default_blank_name" ) emptySlot = 2
                        updateRoom()
                        enterRoom()
                        console.log(emptySlot)                                
                        navigate('/lobby')
                      }))
                  }

                  if (roomData[0].status === true) {
                    errorModal('a partida ja esta em andamento')
                  }

                }
              }  
              
              if (userData === false) {
                navigate('/createuser')
              }
    }

        if (!sessionStorage.getItem("userid")) {

          
          await enterRoom()
          
          fetch('https://merchants-api.onrender.com/user',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: userName, roomId: 0, userId: Number(userId)})                
          }         
          ) 
          sessionStorage.setItem("userid", userId); 
          sessionStorage.setItem("username", userName);
          fetch('https://merchants-api.onrender.com/room/list',
          {
           
          }            
          )
          .then(response => response.json() 
           .then  (function(data) {
            if (data[0].slot8Name === "default_blank_name" ) emptySlot = 8
            if (data[0].slot7Name === "default_blank_name" ) emptySlot = 7
            if (data[0].slot6Name === "default_blank_name" ) emptySlot = 6
            if (data[0].slot5Name === "default_blank_name" ) emptySlot = 5
            if (data[0].slot4Name === "default_blank_name" ) emptySlot = 4
            if (data[0].slot3Name === "default_blank_name" ) emptySlot = 3
            if (data[0].slot2Name === "default_blank_name" ) emptySlot = 2
            updateRoom()

         

            console.log(emptySlot)                
           
            navigate('/lobby')
          }))
        }
       
              
              
            
         }
    
    const updateRoom = () => {
      console.log('entered updateroom')
      switch (emptySlot) {
        case 2: 
        fetch('https://merchants-api.onrender.com/room/update',
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },                   
          body: JSON.stringify({slot2Name: userName,slot2Id: Number(userId)})                
        }         
        )  
          break;
        case 3: 
        fetch('https://merchants-api.onrender.com/room/update',
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },                   
          body: JSON.stringify({slot3Name: userName,slot3Id: Number(userId)})                
        }         
        )  
          break;
        case 4: 
        fetch('https://merchants-api.onrender.com/room/update',
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },                   
          body: JSON.stringify({slot4Name: userName,slot4Id: Number(userId)})                
        }         
        )  
          break;
        case 5: 
        fetch('https://merchants-api.onrender.com/room/update',
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },                   
          body: JSON.stringify({slot5Name: userName,slot5Id: Number(userId)})                
        }         
        )  
          break;
        case 6:
          fetch('https://merchants-api.onrender.com/room/update',
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },                   
          body: JSON.stringify({slot6Name: userName,slot6Id: Number(userId)})                
        }         
        )   
          break;
        case 7: 
        fetch('https://merchants-api.onrender.com/room/update',
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },                   
          body: JSON.stringify({slot7Name: userName,slot7Id: Number(userId)})                
        }         
        )  
          break;
        case 8: 
        fetch('https://merchants-api.onrender.com/room/update',
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },                   
          body: JSON.stringify({slot8Name: userName,slot8Id: Number(userId)})                
        }         
        )  
          break;  
        default:
          console.log('full room')
          break;
      }
    }

  return (
    <div className='App'>
      <nav className="navbar navbar-expand-lg bg-light  fixed-bottom">
            <div className="container-fluid w-100">            
            <div className="row w-100 m-0">
                <div className="col-5">
                    <button className = 'btn  ui-btn d-flex align-items-start mt-1 mb-1' onClick={(e) => {
                                        navigate('/');
                                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="calc(5px + 4vw)" height="calc(5px + 5vw)" fill="currentColor" className="bi bi-arrow-return-left white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    </button>    
                </div>                
               

                  <div className="col-7 d-flex justify-content-center">
                    <div className=" navbar-right pull-right tracking-in-expand center" ><h1 className ='useMyFont  m-0 center'>Merchants</h1></div>                    
                </div>              
            </div>           
            </div>        
     </nav>  
      <nav className="navbar navbar-expand-lg bg-light  fixed-top">
            <div className="container-fluid w-100">            
            <div className="row w-100 m-0">
                <div className="col-5">
                    <button className = 'btn  ui-btn d-flex align-items-start mt-1 mb-1' onClick={(e) => {
                                        setAdminModalShow(true);
                                    }}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill white" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
                    </button>    
                </div>                
               

                  <div className="col-7 d-flex justify-content-center">
                    <div className=" navbar-right pull-right tracking-in-expand center" ><h1 className ='useMyFont  m-0 center'>Merchants</h1></div>                    
                </div>              
            </div>           
            </div>        
     </nav>          
    <header className='App-header '>
    <div className="container text-center p-10 App-newbox slide-in-fwd" >
        
    <div className="container text-center " >
            <div className="row g-0 text-center">
                                    <div className='col'></div>
               
                <div className="col center puff-in-center">
                 <div className="circle1 m-0">
                    <img src={"./logo512.png"} className='App-logo ' alt='logo' />
                    <div className="text" id='circletext'>
                        <p>
                        - Navegar - Construir - Produzir 
                        </p>
                    </div>
                </div>
                </div> 
                <div className='col'></div>  
               
            </div>
    </div>
        <h1 className='App-title useMyFont'>Bem vindo a Merchants</h1>
        
        

        <button type="button" className="btn ui-btn useMyFont custom" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <h1 className ='useMyFont white'> Criar Partida</h1>
        </button>

        <button type="button" className="btn ui-btn useMyFont custom mt-3 mb-3" onClick={(e) => {
                      handleClickConect();
                  }}>
        <h1 className ='useMyFont white'> Conectar</h1>
        </button>

        

       

        </div>
    </header>

   


<div className="modal fade dark " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" modal-color='black'>
    <div className="modal-content">      
      <div className="modal-body">
      <h5 className='App-desc useMyFont text-light frontstroke'>Insira um numero para criar um novo jogo</h5>
        <form>
          <div className='row'>
          <label>
          <input type="text" name="name" onChange={(e) => { updateInput(e, 'code');  }}/>
          </label>
          </div>

               

        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark useMyFont" data-bs-dismiss="modal">
          <span className= 'useMyFont'>
            Cancelar
          </span>
        </button>
        <button type="button" className="btn btn-dark useMyFont" onClick={(e) => {
                      handleClick(code);
                  }} data-bs-dismiss="modal">  <span className= 'useMyFont'>
                  Iniciar
                </span></button>
      </div>
    </div>
  </div>
</div>



    <Modal show={show} onHide={handleClose} onShow={renderModal}   centered >
        
        <Modal.Body>      
        <div className='row '>
            <div className='col center redbg'>
            <h1 className='App-title useMyFont white'>erro</h1>        
        
           
            </div>
        </div> 

         

         <div className='row  mt-2  fade-in-fwd2 shake-horizontal ' id='errorContainer'>
            <div className='col  center'>
                  <h5 className='useMyFont white mt-2' id='messageContainer'>nome invalido</h5>               
            </div>
        </div>                         
        

        <div className=''>
            <div className='row mt-2 darkbg '>   
            <div className='col d-flex justify-content-center mb-2'>
                <img className=' myGlower3 m-0  center white hidden tracking-in-expand materialIcon slide-in-right' id='material1' src={''}/> 
            </div>   
            <div className='col d-flex justify-content-center mb-2'>
                <img className='myGlower2 m-0  center white hidden tracking-in-expand materialIcon slide-in-left' id='material2' src={''}/> 
            </div>   
            </div>   
        </div>

       

        </Modal.Body>
            <Modal.Footer>
        <Button className='ui-btn' variant='dark' onClick={handleClose}> <p className='useMyFont text-center letterspacing button1 '>Fechar</p></Button>
      </Modal.Footer>       
    </Modal>

    <Modal show={adminModalShow} onHide={handleCloseAdminModal}   centered >
        
        <Modal.Body>      
        <div className='row '>
            <div className='col center redbg'>
            <h1 className='App-title useMyFont white'>admin menu</h1>        
        
           
            </div>
        </div> 

         

         <div className='row  mt-2  fade-in-fwd2 ' id='errorContainer'>
            <div className='col  center'>
                  <button className='useMyFont white mt-2 ui-btn ' id='messageContainer' onClick={(e)=>{wipeData()}}>
                    <h3>wipe all data</h3>
                  </button>               
            </div>
        </div>                         
        

        <div className=''>
            <div className='row mt-2 darkbg '>   
            <div className='col d-flex justify-content-center mb-2'>
                <img className=' myGlower3 m-0  center white hidden tracking-in-expand materialIcon slide-in-right' id='material1' src={''}/> 
            </div>   
            <div className='col d-flex justify-content-center mb-2'>
                <img className='myGlower2 m-0  center white hidden tracking-in-expand materialIcon slide-in-left' id='material2' src={''}/> 
            </div>   
            </div>   
        </div>

       

        </Modal.Body>
            <Modal.Footer>
        <Button className='ui-btn' variant='dark' onClick={handleCloseAdminModal}> <p className='useMyFont text-center letterspacing button1 '>Fechar</p></Button>
      </Modal.Footer>       
    </Modal> 

</div>




  );
}

export default Home;