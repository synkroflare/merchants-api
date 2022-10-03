import React, { useEffect } from 'react';
import {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import './App.css';
import { getUserData, checkIfGameStarted, checkIfRoomLeader, getRoomData, setRoomOnline, setUserLocation, setLocations } from './local/functions';
import {locations} from './constants/global'

const PreGame = () =>{
    const navigate = useNavigate();
    const [roomData, setRoomData] = useState()
    const [max, setMax] = useState(10)

    let counterMax = false
    
    let rdata 
    let counter = 0
    let counterM = 10
    let show = false

    let time = 2500

    let user1data
    let user2data
    let user3data
    let user4data
    let user5data
    let user6data
    let user7data
    let user8data



  
    const getRoomDataF = async() => {
      rdata = await getRoomData() 
      user1data = await getUserData(rdata[0].slot1Id)  
      user2data = await getUserData(rdata[0].slot2Id)
      user3data = await getUserData(rdata[0].slot3Id)  
      user4data = await getUserData(rdata[0].slot4Id)
      user5data = await getUserData(rdata[0].slot5Id)  
      user6data = await getUserData(rdata[0].slot6Id)
      user7data = await getUserData(rdata[0].slot7Id)  
      user8data = await getUserData(rdata[0].slot8Id)      
        
      setRoomData(await getRoomData())
    }

    useEffect(() =>  { 

      getRoomDataF() 
      setTimeout(slide1, 1000)

      const interval = setInterval(() => {        
      }, time);   
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])  

    function slide1() {
      document.querySelector('#pgtxt1').innerHTML = 'NO MES '+rdata[0].initialMonth+ ' DE 1305, NA REGIAO DO MEDITERRANEO, MERCADORES DISPUTAM O DOMINIO DAS ROTAS COMERCIAIS DA REGIAO...'
      document.querySelector('#box1').classList.remove('d-none')
      setTimeout(slide2, 6500)

    }

    function slide2() {
      document.querySelector('#box1').classList.add('d-none')
      if (user1data) {
        document.querySelector('#pgtxt2').style.backgroundColor = user1data.color
        document.querySelector('#pgtxt2').innerHTML = user1data.name+ ' do '+user1data.location
      }
      if (user2data) {
        document.querySelector('#pgtxt3').style.backgroundColor = user2data.color
        document.querySelector('#pgtxt3').innerHTML = user2data.name+ ' do '+user2data.location
      }
      if (user3data) {
        document.querySelector('#pgtxt4').style.backgroundColor = user3data.color
        document.querySelector('#pgtxt4').innerHTML = user3data.name+ ' do '+user3data.location
      }
      if (user4data) {
        document.querySelector('#pgtxt5').style.backgroundColor = user4data.color
        document.querySelector('#pgtxt5').innerHTML = user4data.name+ ' do '+user4data.location
      }

      document.querySelector('#box2').classList.remove('d-none')
      if (user5data){setTimeout(slide3, 5000)}
      else {setTimeout(slide4, 5000)}

    }

    function slide3() {
      if (user5data) {
        document.querySelector('#pgtxt6').style.backgroundColor = user5data.color
        document.querySelector('#pgtxt6').innerHTML = user5data.name+ ' do '+user5data.location
      }
      if (user6data) {
        document.querySelector('#pgtxt7').style.backgroundColor = user6data.color
        document.querySelector('#pgtxt7').innerHTML = user6data.name+ ' do '+user6data.location
      }
      if (user7data) {
        document.querySelector('#pgtxt8').style.backgroundColor = user7data.color
        document.querySelector('#pgtxt8').innerHTML = user7data.name+ ' do '+user7data.location
      }
      if (user8data) {
        document.querySelector('#pgtxt9').style.backgroundColor = user8data.color
        document.querySelector('#pgtxt9').innerHTML = user8data.name+ ' do '+user8data.location
      }
      document.querySelector('#box2').classList.add('d-none')
      document.querySelector('#box3').classList.remove('d-none')
      setTimeout(slide4, 5000)

    }

    function slide4() {
      document.querySelector('#box2').classList.add('d-none')
      document.querySelector('#box3').classList.add('d-none')
      document.querySelector('#box4').classList.remove('d-none')
      setTimeout(goToGame, 5000)
    }

    function goToGame() {
      navigate('/pregamebonus')
    }

 

  return (
    <div className='App'> 
     <nav className="navbar navbar-expand-lg bg-light  fixed-bottom">
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
                    <div className=" navbar-right pull-right tracking-in-expand center" ><h1 className ='useMyFont p-1 m-0 center'>Merchants</h1></div>                    
                </div>              
            </div>           
            </div>        
     </nav>      
          
    <header className='App-header'>
    <div className="container text-center p-10 App-newbox darkerbg" >
    <h1 className='App-title useMyFont mt-3 '>Iniciando jogo</h1>
        <div className='dot-flashing mb-4'></div>  
        </div>
    <div className="container text-center p-10 App-newbox pregame-box darkerbg" >
       
              

       <div className='container '>

        <div className='row fade-in-fwd d-none ' id='box1'>
          <div className='col p-2'>
            <h2 className='frontstroke justify-text' id='pgtxt1'>
            </h2>
        </div>
        </div>

        <div className='row d-none ' id='box2'>
          <div className='col p-2'>
            <div className='row mt-4'>
              <h4 id='pgtxt2'> </h4>
            </div>
            <div className='row mt-3'>
              <h4 id='pgtxt3'> </h4>
            </div>
            <div className='row mt-3'>
              <h4 id='pgtxt4'> </h4>
            </div>
            <div className='row mt-3'>
              <h4 id='pgtxt5'> </h4>
            </div>
            
         </div>
        </div>

        <div className='row d-none  ' id='box3'>
          <div className='col p-2'>
            <div className='row'>
              <h4 id='pgtxt6'> </h4>
            </div>
            <div className='row mt-3'>
              <h4 id='pgtxt7'></h4>
            </div>
            <div className='row mt-3'>
              <h4 id='pgtxt8'></h4>
            </div>
            <div className='row mt-3'>
              <h4 id='pgtxt9'></h4>
            </div>
            
         </div>
        </div>

        <div className='row fade-in-fwd d-none ' id='box4'>
          <div className='col p-2'>
            <h2 className='frontstroke justify-text' id='pgtxt1'>
              "E tendo feito seu lar a beira-mar, como poderia ter medo das ondas crescentes?"
            </h2>
            <h2 className='frontstroke justify-text mt-2' id='pgtxt1'>
            - Akka Mahadevi, Imperio Chalukya Ocidental - seculo XII
            </h2>
        </div>
        </div>


                                    
       
       </div>

      

        </div>
    </header>
</div>


  );
}

export default PreGame;