import React, { useEffect, componentDidMount } from 'react';
import {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'
import './App.css';
import { checkIfUserExists, checkifUserIsInRoom, createUser, enterRoom, getRoomData, getUserData } from './local/functions';


export let usernameValue = 'default_name'

export const userIdValue = (Math.floor(Math.random() * 999999999))

export let currentUserId = 0



const CreateUser = () =>{  
  
    const socket = new WebSocket("wss://localhost:10000")

    socket.onopen = () => {
      console.log('socket1 open')
      socket.send('message1')
    }

    socket.onmessage = () => {
      console.log('received message from server')
      
    }
    
 
    const [code, setCode] = useState(3)
    const [roomId, setRoomId] = useState()
    const [userName, setUserName] = useState(0)
    const [show, setShow] = useState(false)

    const [userId, setUserId] = useState((Math.floor(Math.random() * 999999999)))

    const modalShow = () => {
      setShow(true)
    }

    const handleClose = () => {
      document.querySelector('#errorContainer').classList.add('d-none')
      setShow(false)
    }

    useEffect(()=> {
      const text = document.querySelector("#circletext");
      text.innerHTML = text.innerText
      .split("")
      .map(
      (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
      )
      .join("");  
    }
    )

    useEffect(() => {      

      checkIfUserExists(sessionStorage.getItem('userid')).then(data => setCode(data))

      if (code === true) {navigate('../home')}  

      if (!sessionStorage.getItem("userid")) {
        console.log('seting new ckie')
       
        sessionStorage.setItem("userid", userId)
      }

      if (sessionStorage.getItem("userid")) {
        setUserId(sessionStorage.getItem("userid"))
        console.log('userid setted to ='+sessionStorage.getItem("userid"))
      }
    }, [code]) 

    function limit()
{
    var max_chars = 16;
    var element = document.querySelector('#namebox')

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}  

    const navigate = useNavigate();

    const updateInput = async (event, type) => { 
      
      switch (type) {
        case 'userName': {
          setUserName(event.target.value)
          usernameValue = event.target.value
          break;
        }
        default:          
          break;
      }           
     }
  
    const enterButtonFunction = async () => {
      if (sessionStorage.getItem('userid') && userName !== 0) {
        console.log(userName+' - '+sessionStorage.getItem('userid'))
        createUser(sessionStorage.getItem('userid'), userName)
        sessionStorage.setItem('username',userName)
        navigate('../home')
      }  
      
      if (userName === 0) {
        document.querySelector('#errorContainer').classList.remove('d-none')
      }
   
    }

  return (
    <div className='App fade-in-fwd'>           
    <header className='App-header'>
    
    <div className="container text-center p-10 App-newbox" >
    <div className="container text-center " >
            <div className="row g-0 text-center">
                                    <div className='col'></div>
               
                <div className="col center puff-in-center">
                 <div className="circle1 m-0">
                    <img src={"./logo512.png"} className='App-logo ' alt='logo' />
                    <div className="text" id='circletext'>
                        <p>
                        - MERCHANTS - MERCHANTS - MERCHANTS
                        </p>
                    </div>
                </div>
                </div> 
                <div className='col'></div>  
               
            </div>
    </div>



              

        <button type="button" className="btn ui-btn useMyFont custom mt-3 mb-3" onClick={(e) => { modalShow();  }}>
        <h1 className ='useMyFont white'> entrar</h1>
        </button>

        <h3 className ='useMyFont white d-none'> ou </h3>

        <button type="button" className="btn ui-btn useMyFont custom mt-1 mb-3 d-none" onClick={(e) => { enterButtonFunction();  }}>
        <h1 className ='useMyFont white'> continuar como: default name </h1>
        </button>

        </div>
    </header>

    <Modal show={show} onHide={handleClose}   centered >
        
        <Modal.Body>      
        <div className='row '>
            <div className='col center'>
             
            <h1 className='App-title useMyFont white darkbg '>Nome</h1>        
        
            <form>       
              <div className='row mt-2 mb-2'>
              <label>       
              <input type="text" className='namebox useMyFont h2 text-center' name="name" id ='namebox' onKeyDown={(e) => {limit(this)}} onKeyUp={(e) => {limit(this)}} onChange={(e) => { updateInput(e, 'userName');  }}/>
              </label>
              </div>     
            </form> 

            <h1 className='App-title useMyFont white darkbg'>genero</h1>

            <div className='row m-0 height1 psides-5'>
              <div className='col height1 ps-4'>
                <button className='genderbtn'>
                <img className=' gendericon' src={'/ui/male.png'} alt='male' />
                </button>
            
              </div>
              
              <div className='col height1 pe-4'>
              <button className='genderbtn'>
                <img className=' gendericon' src={'/ui/female.png'} alt='female' />
                </button>
              </div>
             
            
              
              </div>
            </div>
        </div> 

        <div className='row  darkbg mt-2'>
            <div className='col center'>
                <button className='btn ui-btn' onClick={(e)=>{enterButtonFunction()}}>
                  <h4 className='useMyFont white'>entrar</h4> 
                </button>
            </div>
        </div>   

         <div className='row  mt-2  fade-in-fwd2 shake-horizontal d-none' id='errorContainer'>
            <div className='col redbg center'>
                  <h5 className='useMyFont white mt-2'>nome invalido</h5>               
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






</div>
  );
}

export default CreateUser;