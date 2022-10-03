import React, { useEffect } from 'react';
import {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import './App.css';
import { getUserData, checkIfGameStarted, checkIfRoomLeader, getRoomData, setRoomOnline, setUserLocation, setLocations } from './local/functions';
import {locations} from './constants/global'
import * as global from './constants/global'

const PreGameBonus = () =>{
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

     const imperiodetremecemBonus = global.imperiodetremecemBonus                                        
     const reinodearagonBonus = global.reinodearagonBonus
     const imperiodafrancaBonus = global.imperiodafrancaBonus
     const principadodemoscowBonus = global.principadodemoscowBonus
     const moldaviaBonus = global. moldaviaBonus
     const ducadodeatenasBonus = global.ducadodeatenasBonus
     const imperiodosmarmelucosBonus = global.imperiodosmarmelucosBonus
     const reinohungaroBonus = global.reinohungaroBonus
     const reinodaimericiaBonus = global.reinodaimericiaBonus
     const inglaterraBonus = global.inglaterraBonus
     const reinodaarmeniaBonus = global.reinodaarmeniaBonus



  
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

      setTimeout(showButton,4000)

      getRoomDataF()

      const userLocation = sessionStorage.getItem('userlocation')
      const location2 = userLocation.replace(/ /g,'')
      
      document.querySelector('#countrybox').style.backgroundColor = sessionStorage.getItem('usercolor')
      document.querySelector('#bonusbox').style.backgroundColor = sessionStorage.getItem('usercolor')
      document.querySelector('#countrybox').innerText = userLocation

      document.querySelector('#messagebox').innerText = 'a alta burguesia de ' +userLocation+', concede a '+sessionStorage.getItem('username')+', como incentivo em sua jornada mercantil:'
      document.querySelector('#bonusbox').innerText = eval((location2)+"Bonus")
      const interval = setInterval(() => {        
      }, time);   
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, []) 
    
    function showButton() {
      document.querySelector('#button1').classList.remove('opacity-0')
      document.querySelector('#button1').classList.add('fade-in-fwd')
    }

    

    function goToGame() {
      navigate('/gamehome')
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
    <div className="container text-center p-10 App-newbox darkerbg mb-4" >
    <h1 className='App-title useMyFont mt-3 '>Iniciando jogo</h1>
        <div className='dot-flashing mb-4'></div>  
    </div>
    <div className="container text-center p-10 App-newbox  darkerbg" >
    <div className='row mb-4 mt-3'>
          <div className='col fade-in-fwd2'>
            <h1 className='display-1' id='countrybox'> INGLATERRA</h1>
          </div>
       </div>
       <div className='row fade-in-fwd2'>
          <div className='col p-4'>
            <h3 className='justify-text frontstroke' id='messagebox'></h3>
          </div>
       </div>

       <div className='row fade-in-fwd2'>
          <div className='col p-2'>
            <h3 className='justify-text frontstroke' id='bonusbox'></h3>
          </div>
       </div>

       <div className='row  mt-4 me-0 ms-0 w-100 mb-3 opacity-0'  id='button1'>
          <div className='col-7 '>
          </div>
          <div className='col-5 '>
            <button className='ui-btn btn white' onClick={(e)=>{goToGame()}}><h2 className='white'>iniciar</h2></button>
          </div>
       </div>
        

      

        </div>
    </header>
</div>


  );
}

export default PreGameBonus;