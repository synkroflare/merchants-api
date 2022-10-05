import React from 'react';
import { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import './App.css';
import {userIdValue} from './Home'
import { getUserActions, passTurn, sub1UserAction } from './local/functions';

const BlueprintSearch = () =>{    

    const socket = new WebSocket("ws://merchants-api.onrender.com:8082")

    socket.onopen = () => {
        console.log('open')        
    }

    socket.onmessage = (event) => {
        console.log(JSON.parse(event.data).message)
    }

    let code = 0
    let ingredient1 = ''
    let ingredient2 = ''
    let buttonStateArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let selectedCounter = 0
    let button1 = ''
    let lastButton = ''
    let preLastButton = ''
    let lastButtonId = 0
    let preLastButtonId = 0

    const navigate = useNavigate();

    const [showFoundModal, setShowFoundModal] = useState(false);
    const [showCluesModal, setShowCluesModal] = useState(false);
    
    const handleCloseFoundModal = () => {        
       setShowFoundModal(false);
       setFoundBdName1('undefined')
       setFoundBdName2('undefined')
       setFoundBdName3('undefined')
       setFoundBdName4('undefined')
       setFoundBdName5('undefined')
       setFoundBdName6('undefined')
       setFoundBdName7('undefined')
       setFoundBdName8('undefined')  
       window.location.reload();

    }

    const handleCloseCluesModal = () => {        
       setShowCluesModal(false);
       setClueName1('undefined')
       setClueName2('undefined')
       setClueName3('undefined')
       setClueName4('undefined')
       setClueName5('undefined')
       setClueName6('undefined')
       setClueName7('undefined')
       setClueName8('undefined')
       setClueName9('undefined')
       setClueName10('undefined')
       
       setClueIngredient1('undefined')
       setClueIngredient2('undefined')
       setClueIngredient3('undefined')
       setClueIngredient4('undefined')
       setClueIngredient5('undefined')
       setClueIngredient6('undefined')
       setClueIngredient7('undefined')
       setClueIngredient8('undefined') 
       setClueIngredient9('undefined')
       setClueIngredient10('undefined')
       window.location.reload();
    }

    const handleShowFoundModal = () => setShowFoundModal(true);
    const handleShowCluesModal = () => setShowCluesModal(true);

    const [foundPermit, setFoundPermit] = useState(false)
    const [cluePermit, setCluePermit] = useState(false)

    const [foundBdName1, setFoundBdName1] = useState('undefined')
    const [foundBdName2, setFoundBdName2] = useState('undefined')
    const [foundBdName3, setFoundBdName3] = useState('undefined')
    const [foundBdName4, setFoundBdName4] = useState('undefined')
    const [foundBdName5, setFoundBdName5] = useState('undefined')
    const [foundBdName6, setFoundBdName6] = useState('undefined')
    const [foundBdName7, setFoundBdName7] = useState('undefined')
    const [foundBdName8, setFoundBdName8] = useState('undefined')

    const foundBdNameArray = [foundBdName1, foundBdName2, foundBdName3, foundBdName4, foundBdName5, foundBdName6, foundBdName7, foundBdName8]

    const [clueName1, setClueName1] = useState('undefined')
    const [clueName2, setClueName2] = useState('undefined')
    const [clueName3, setClueName3] = useState('undefined')
    const [clueName4, setClueName4] = useState('undefined')
    const [clueName5, setClueName5] = useState('undefined')
    const [clueName6, setClueName6] = useState('undefined')
    const [clueName7, setClueName7] = useState('undefined')
    const [clueName8, setClueName8] = useState('undefined')
    const [clueName9, setClueName9] = useState('undefined')
    const [clueName10, setClueName10] = useState('undefined')

    const [clueIngredient1, setClueIngredient1] = useState('undefined')
    const [clueIngredient2, setClueIngredient2] = useState('undefined')
    const [clueIngredient3, setClueIngredient3] = useState('undefined')
    const [clueIngredient4, setClueIngredient4] = useState('undefined')
    const [clueIngredient5, setClueIngredient5] = useState('undefined')
    const [clueIngredient6, setClueIngredient6] = useState('undefined')
    const [clueIngredient7, setClueIngredient7] = useState('undefined')
    const [clueIngredient8, setClueIngredient8] = useState('undefined')
    const [clueIngredient9, setClueIngredient9] = useState('undefined')
    const [clueIngredient10, setClueIngredient10] = useState('undefined')

    useEffect(() => {
        updateSearchButton();
      }, []); 
      
    useEffect(() =>  {        
    const interval = setInterval( async () => {
    
    for( var i =0; i <= buttonStateArray.length; i++) {
        if (buttonStateArray[i+1] == 0) {
            try{
            var btn = document.getElementsByClassName("ui-btn")               
            btn[i].classList.remove("ui-btn-selected")
            }
            catch{}
        }

        if (buttonStateArray[i+1] == 1) {
            try{
            var btn = document.getElementsByClassName("ui-btn")               
            btn[i].classList.add("ui-btn-selected")                
            }   
            catch{}
        }
    }      

    }, 211);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])   

    const renderModalBPD = async () => {

        

        var bNamesArray = []
        const userName = sessionStorage.getItem('username')
        const userLocation = sessionStorage.getItem('userlocation')

        for (var i =0;i<=7;i++){
            if (foundBdNameArray[i] !== 'undefined') {
                bNamesArray.push(foundBdNameArray[i])
            }
        }

        if (bNamesArray.length === 1) {
            socket.onopen = () => socket.send(JSON.stringify({
                type: 'newBlueprintDiscoveredNotification',
                message: userName+' do '+userLocation+' descobriu '+bNamesArray[0]+'!',
                color: sessionStorage.getItem('usercolor')
            }))
        }

        if (bNamesArray.length === 2) {
            socket.onopen = () => socket.send(JSON.stringify({
                type: 'newBlueprintDiscoveredNotification',
                message: userName+' do '+userLocation+' descobriu '+bNamesArray[0]+' e '+bNamesArray[1]+'!',
                color: sessionStorage.getItem('usercolor')
            }))
        }

        if (bNamesArray.length > 2) {
            socket.onopen = () => socket.send(JSON.stringify({
                type: 'newBlueprintDiscoveredNotification',
                message: userName+' do '+userLocation+' descobriu '+bNamesArray[0]+', '+bNamesArray[1]+' e + '+(bNamesArray.length-2)+'!',
                color: sessionStorage.getItem('usercolor')
            }))
        }

        
        if (foundBdName1 !== 'undefined') {
        var div = document.createElement("div");
        div.setAttribute("id", "rowc1");
        div.setAttribute("class", " row");     
        document.getElementById("row1").appendChild(div);       

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col useMyFont frontstroke btn ");     
        div.setAttribute("src", "./buildings/" + foundBdName1+ ".png"); 
       //div.setAttribute("onClick", "navigate('./listds')");
        div.onclick = function() {navigate('../listds');};
        div.style.width = "5vw"
        div.style.height = "33vw"
        document.getElementById("rowc1").appendChild(div);

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col useMyFont frontstroke btn");     
        div.setAttribute("src", "./buildings/" + foundBdName2+ ".png"); 
        div.onclick = function() {navigate('../listds');};
        div.style.width = "5vw"
        div.style.height = "33vw"
        document.getElementById("rowc1").appendChild(div);
        }

        if (foundBdName3 !== 'undefined') {
        var div = document.createElement("div");
        div.setAttribute("id", "rowc2");
        div.setAttribute("class", " row");     
        document.getElementById("row1").appendChild(div);       

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col useMyFont frontstroke btn");     
        div.setAttribute("src", "./buildings/" + foundBdName3+ ".png"); 
        div.onclick = function() {navigate('../listds');};
        div.style.width = "5vw"
        div.style.height = "33vw"
        document.getElementById("rowc2").appendChild(div);

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col useMyFont frontstroke btn ");     
        div.setAttribute("src", "./buildings/" + foundBdName4+ ".png");
        div.onclick = function() {navigate('../listds');};        
        div.style.width = "5vw"
        div.style.height = "33vw"
        document.getElementById("rowc2").appendChild(div);
        }

        if (foundBdName5 !== 'undefined') {
            var div = document.createElement("div");
        div.setAttribute("id", "rowc3");
        div.setAttribute("class", " row");     
        document.getElementById("row1").appendChild(div);       

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col useMyFont frontstroke btn ");     
        div.setAttribute("src", "./buildings/" + foundBdName5+ ".png");
        div.onclick = function() {navigate('../listds');};
        div.style.width = "5vw"
        div.style.height = "33vw"
        document.getElementById("rowc3").appendChild(div);

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col useMyFont frontstroke btn");     
        div.setAttribute("src", "./buildings/" + foundBdName6+ ".png"); 
        div.onclick = function() {navigate('../listds');};
        div.style.width = "5vw"
        div.style.height = "33vw"
        document.getElementById("rowc3").appendChild(div);
        }

        if (foundBdName7 !== 'undefined') {
            var div = document.createElement("div");
        div.setAttribute("id", "rowc4");
        div.setAttribute("class", " row");     
        document.getElementById("row1").appendChild(div);       

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col useMyFont frontstroke btn");     
        div.setAttribute("src", "./buildings/" + foundBdName7+ ".png"); 
        div.onclick = function() {navigate('../listds');};
        div.style.width = "5vw"
        div.style.height = "33vw"
        document.getElementById("rowc4").appendChild(div);

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col useMyFont frontstroke btn ");     
        div.setAttribute("src", "./buildings/" + foundBdName8+ ".png"); 
        div.onclick = function() {navigate('../listds');};
        div.style.width = "5vw"
        div.style.height = "33vw"
        document.getElementById("rowc4").appendChild(div);
        }
    }

    const renderModalClues = async () => {

        if (clueName1 !== 'undefined') {

        var div = document.createElement("div");
        div.setAttribute("id", "rowc1");
        div.setAttribute("class", " darkbg row d-flex justify-content-center");     
        document.getElementById("row1clues").appendChild(div);       

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " darkbg d-flex justify-content-center col w-50 useMyFont frontstroke btn pt-2 pe-0 ps-0 ms-1");     
        div.setAttribute("src", "./buildings/" + clueName1+ ".png");
        div.onclick = function() {navigate('../listds');}; 
        div.onclick = function() {navigate('../listds');};
        div.style.width = "5vw"
        div.style.height = "33vw"
        document.getElementById("rowc1").appendChild(div);

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 h-40 center");     
        div.setAttribute("src", "./" + clueIngredient1+ ".png");
        div.onclick = function() {navigate('../listds');}; 
        div.style.width = "5px"
        div.style.height = "73px"
        document.getElementById("rowc1").appendChild(div);

        var div = document.createElement("img");
        div.setAttribute("id", "colc2");
        div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 h-40 center");     
        div.setAttribute("src", "./unknow.png"); 
        div.style.width = "5px"
        div.style.height = "73px"
        document.getElementById("rowc1").appendChild(div);

        }

        if (clueName2 !== 'undefined') {

            var div = document.createElement("div");
            div.setAttribute("id", "rowc2");
            div.setAttribute("class", " row justify-content-center darkbg");     
            document.getElementById("row1clues").appendChild(div);    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-50 useMyFont frontstroke btn pt-2 pe-0 ps-0 ms-1");     
            div.setAttribute("src", "./buildings/" + clueName2+ ".png"); 
           
            div.style.width = "5vw"
            div.style.height = "33vw"
            document.getElementById("rowc2").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 h-40 center");     
            div.setAttribute("src", "./" + clueIngredient2+ ".png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc2").appendChild(div);   
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 h-40 center");     
            div.setAttribute("src", "./unknow.png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc2").appendChild(div);
    
        }

        if (clueName3 !== 'undefined') {

            var div = document.createElement("div");
            div.setAttribute("id", "rowc3");
            div.setAttribute("class", " row");     
            document.getElementById("row1clues").appendChild(div);       
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-50 useMyFont frontstroke btn pt-2 pe-0 ps-0 ms-1");     
            div.setAttribute("src", "./buildings/" + clueName3+ ".png");           
            div.style.width = "5vw"
            div.style.height = "33vw"
            document.getElementById("rowc3").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./" + clueIngredient3+ ".png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc3").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./unknow.png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc3").appendChild(div);
    
        }

        if (clueName4 !== 'undefined') {

            var div = document.createElement("div");
            div.setAttribute("id", "rowc4");
            div.setAttribute("class", " row");     
            document.getElementById("row1clues").appendChild(div);       
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-50 useMyFont frontstroke btn pt-2 pe-0 ps-0 ms-1 ");     
            div.setAttribute("src", "./buildings/" + clueName4+ ".png"); 
            div.style.width = "5vw"
            div.style.height = "33vw"
            document.getElementById("rowc4").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./" + clueIngredient4+ ".png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc4").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./unknow.png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc4").appendChild(div);
    
        }

        if (clueName5 !== 'undefined') {
            var div = document.createElement("div");
            div.setAttribute("id", "rowc5");
            div.setAttribute("class", " row");     
            document.getElementById("row1clues").appendChild(div);       
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-50 useMyFont frontstroke btn pt-2 pe-0 ps-0 ms-1");     
            div.setAttribute("src", "./buildings/" + clueName5+ ".png"); 
           // div.setAttribute("onClick", "navigate('./listds')");
            div.onclick = function() {navigate('../listds');};
            div.style.width = "5vw"
            div.style.height = "33vw"
            document.getElementById("rowc5").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./" + clueIngredient5+ ".png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc5").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./unknow.png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc5").appendChild(div);    
        }

        if (clueName6 !== 'undefined') {
            var div = document.createElement("div");
            div.setAttribute("id", "rowc6");
            div.setAttribute("class", " row");     
            document.getElementById("row1clues").appendChild(div);       
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-50 useMyFont frontstroke btn pt-2 pe-0 ps-0 ms-1");     
            div.setAttribute("src", "./buildings/" + clueName6+ ".png"); 
           // div.setAttribute("onClick", "navigate('./listds')");
            div.onclick = function() {navigate('../listds');};
            div.style.width = "5vw"
            div.style.height = "33vw"
            document.getElementById("rowc6").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./" + clueIngredient6+ ".png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc6").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./unknow.png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc6").appendChild(div);    
        }

        if (clueName7 !== 'undefined') {
            var div = document.createElement("div");
            div.setAttribute("id", "rowc1");
            div.setAttribute("class", " row");     
            document.getElementById("row1clues").appendChild(div);       
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-50 useMyFont frontstroke btn pt-2 pe-0 ps-0 ms-1");     
            div.setAttribute("src", "./buildings/" + clueName7+ ".png"); 
           // div.setAttribute("onClick", "navigate('./listds')");
            div.onclick = function() {navigate('../listds');};
            div.style.width = "5vw"
            div.style.height = "33vw"
            document.getElementById("rowc1").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./" + clueIngredient7+ ".png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc1").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./unknow.png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc1").appendChild(div);    
        }

        if (clueName8 !== 'undefined') {
            var div = document.createElement("div");
            div.setAttribute("id", "rowc1");
            div.setAttribute("class", " row");     
            document.getElementById("row1clues").appendChild(div);       
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-50 useMyFont frontstroke btn pt-2 pe-0 ps-0 ms-1");     
            div.setAttribute("src", "./buildings/" + clueName8+ ".png"); 
           // div.setAttribute("onClick", "navigate('./listds')");
            div.onclick = function() {navigate('../listds');};
            div.style.width = "5vw"
            div.style.height = "33vw"
            document.getElementById("rowc1").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", " col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./" + clueIngredient8+ ".png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc1").appendChild(div);
    
            var div = document.createElement("img");
            div.setAttribute("id", "colc2");
            div.setAttribute("class", "redbg col w-25 useMyFont frontstroke  pe-1 ps-1 mt-4 h-40 center");     
            div.setAttribute("src", "./unknow.png"); 
            div.style.width = "5px"
            div.style.height = "73px"
            document.getElementById("rowc1").appendChild(div);    
        }
    }

    const updateInput1 = async (ingredient, buttonIdName, buttonIdInt) => {

        if (buttonStateArray[9] === 1){
            button1 = document.querySelector('#button9')
            button1.style.backgroundColor = 'rgb(33,37,41)'
            buttonStateArray[9] = 0 
            ingredient2 = ''
            selectedCounter--   
                           
            
        }
        
        switch (buttonStateArray[buttonIdInt]) {            
            case 1 : 
                if (buttonIdInt !== 9 && buttonStateArray[9] == 1) {
                    button1 = document.querySelector('#button9')
                    button1.style.backgroundColor = 'rgb(33,37,41)'
                    buttonStateArray[9] = 0 
                    ingredient2 = ''
                    selectedCounter--                                     
                    
                }           
                if(ingredient1 === ingredient) ingredient1 = ''
                if(ingredient2 === ingredient) ingredient2 = ''

                button1 = document.querySelector(buttonIdName)
                button1.style.backgroundColor = 'rgb(33,37,41)'
                buttonStateArray[buttonIdInt] = 0
                if (selectedCounter > 0) selectedCounter--
                updateSearchButton()
                if (ingredient1 === '' && ingredient2 !== '' && selectedCounter === 1) {
                   
                    ingredient1 = ingredient2
                    ingredient2 = ''                
                }              
                
                break;      
            
            case 0 :
                preLastButton = lastButton
                preLastButtonId = lastButtonId 
                lastButton = buttonIdName
                lastButtonId = buttonIdInt

               

                if (selectedCounter == 2) {
                    ingredient2 = ingredient
                    button1 = document.querySelector(preLastButton)
                    button1.style.backgroundColor = 'rgb(33,37,41)'
                    buttonStateArray[preLastButtonId] = 0

                    button1 = document.querySelector(buttonIdName)
                    button1.style.backgroundColor = 'rgb(111,111,111)'
                    buttonStateArray[buttonIdInt] = 1                    
                    
                    
                    updateSearchButton()                 
                    break;
                }
                          
                if (ingredient2 == '' && selectedCounter < 2) {
                    switch (ingredient1) {
                        case '':
                            
                            ingredient1 = ingredient
                           
                            break;
                        default:
                            
                            ingredient2 = ingredient
                           
                            break;
                    }                    
                }            
                
                button1 = document.querySelector(buttonIdName)
                button1.style.backgroundColor = 'rgb(111,111,111)'
                buttonStateArray[buttonIdInt] = 1
                if (selectedCounter <= 2) selectedCounter++
           
                updateSearchButton()
                
                
                break;
        }      
    }

    const resetButtons = async () => {
        selectedCounter = 0
        for (let i=1;i<=9;i++) {
            buttonStateArray[i] = 0
        }
        

    }

    const updateSearchButton = async (event) => {        
        button1 = document.querySelector('#buttonSearch')
        if (selectedCounter == 2) { 
            button1.disabled  = false
        }
        else {
            button1.disabled  = true
        }
    }

    const button9Function = async () => { 
        
        if (selectedCounter >= 1) {
            switch (buttonStateArray[9]) {
                case 0:
                    if (selectedCounter == 2) {
                        ingredient2 = ''
                        button1 = document.querySelector(lastButton)
                        button1.style.backgroundColor = 'rgb(33,37,41)'
                        buttonStateArray[lastButtonId] = 0
                        selectedCounter--
                    }                  
                    button1 = document.querySelector('#button9')
                    button1.style.backgroundColor = 'rgb(111,111,111)'
                    buttonStateArray[9] = 1
                    selectedCounter++
                    ingredient2 = ingredient1          
                    updateSearchButton()
                    break;
                case 1:

                    button1 = document.querySelector('#button9')
                    button1.style.backgroundColor = 'rgb(33,37,41)'
                    buttonStateArray[9] = 0 
                    ingredient2 = ''
                    selectedCounter--                  
                    updateSearchButton()  
                    break;                    
            }            
            
        }
       
    }
    
    const handleClick = async (code) => {
        { 
            await sub1UserAction(sessionStorage.getItem('userid'))

            const remActions = await getUserActions(sessionStorage.getItem('userid'))
            
            if (remActions <= 0) {
                await passTurn(sessionStorage.getItem('userid'))
                document.querySelector('#buttonSearch').disabled = true
            }            
            
            const element1 = document.querySelector('#getid .getest1');
            const element2 = document.querySelector('#getid2 .getest2');
            const element3 = document.querySelector('#getid3 .getest');

            const element4 = document.querySelector('#getid4 .getest');
            const element5 = document.querySelector('#getid5 .getest');
            const element6 = document.querySelector('#getid6 .getest'); 

            const element7 = document.querySelector('#getid7 .getest');
            const element8 = document.querySelector('#getid8 .getest');
            const element9 = document.querySelector('#getid9 .getest'); 

            const element10 = document.querySelector('#getid10 .getest');
            const element11 = document.querySelector('#getid11 .getest');
            const element12 = document.querySelector('#getid12 .getest');

            const element13 = document.querySelector('#getid13 .getest');
            const element14 = document.querySelector('#getid14 .getest');
            const element15 = document.querySelector('#getid15 .getest');

            const element16 = document.querySelector('#getid16 .getest');
            const element17 = document.querySelector('#getid17 .getest');
            const element18 = document.querySelector('#getid18 .getest');

            let element1Array = [element1, element2, element3]
            let element2Array = [element4, element5, element6]
            let element3Array = [element7, element8, element9]
            let element4Array = [element10, element11, element12]
            let element5Array = [element13, element14, element15]
            let element6Array = [element16, element17, element18]
            
            let arrayArray = [element1Array, element2Array, element3Array, element4Array, element5Array, element6Array]
            fetch('https://merchants-api.onrender.com/company/read/'+sessionStorage.getItem('userid')+'/' + ingredient1 + '-' + ingredient2,
            {                                
            }
            )  
            .then(response => response.json())    
            .then(function(data)  { 
                
                var iteratorCounter = 0
                var permission = false
                var cluePermission = false
                var provisoryClueIngredient = null
                var shouldOpenFoundModal = false
                var shouldOpenClueModal = false

                for (let i = 1; i <= 6; i++) {                  
                    if (data[i-1] !== undefined) { 

                    if (ingredient1 === data[i-1].slot1 && ingredient2 === data[i-1].slot2){ 
                        setFoundPermit(true) 
                        permission = true                       
                    }
                    if (ingredient1 === data[i-1].slot2 && ingredient2 === data[i-1].slot1){ 
                        setFoundPermit(true)
                        permission = true                       
                    }

                    if (ingredient1 === data[i-1].slot1 && ingredient2 !== data[i-1].slot2){ 
                        setCluePermit(true) 
                        cluePermission = true
                        provisoryClueIngredient = ingredient1
                    }
                    if (ingredient1 === data[i-1].slot2 && ingredient2 !== data[i-1].slot1){ 
                        setCluePermit(true)
                        cluePermission = true
                        provisoryClueIngredient = ingredient1
                    }

                    if (ingredient2 === data[i-1].slot1 && ingredient1 !== data[i-1].slot2){ 
                        setCluePermit(true) 
                        cluePermission = true
                        provisoryClueIngredient = ingredient2
                    }
                    if (ingredient2 === data[i-1].slot2 && ingredient1 !== data[i-1].slot1){ 
                        setCluePermit(true)
                        cluePermission = true
                        provisoryClueIngredient = ingredient2
                    }

                    if (permission) {
                        shouldOpenFoundModal = true
                        switch (iteratorCounter) {
                            case 0:   
                                iteratorCounter++                         
                                                          
                                setFoundBdName1(data[i-1].name)
                                permission = false
                            break;
                            case 1:
                                iteratorCounter++ 
                                setFoundBdName2(data[i-1].name)
                                permission = false
                            break;
                            case 2:
                                iteratorCounter++ 
                                setFoundBdName3(data[i-1].name)
                                permission = false
                            break;
                            case 3:
                                iteratorCounter++ 
                                setFoundBdName4(data[i-1].name)
                                permission = false
                            break;
                            case 4:   
                            iteratorCounter++                                                                            
                            setFoundBdName5(data[i-1].name)
                            permission = false
                            break;
                            case 5:
                                iteratorCounter++ 
                                setFoundBdName6(data[i-1].name)
                                permission = false
                            break;
                            case 6:
                                iteratorCounter++ 
                                setFoundBdName7(data[i-1].name)
                                permission = false
                            break;
                            case 7:
                                iteratorCounter++ 
                                setFoundBdName8(data[i-1].name)
                                permission = false
                            break;                        
                        }                        
                    }

                    if (cluePermission) {
                        shouldOpenClueModal = true
                        switch (iteratorCounter) {
                            case 0:   
                                iteratorCounter++                                 
                                setClueName1(data[i-1].name)
                                setClueIngredient1(provisoryClueIngredient)
                                cluePermission = false                                
                            break;
                            case 1:
                                iteratorCounter++ 
                                setClueName2(data[i-1].name)
                                setClueIngredient2(provisoryClueIngredient)
                                cluePermission = false
                            break;
                            case 2:
                                iteratorCounter++ 
                                setClueName3(data[i-1].name)
                                setClueIngredient3(provisoryClueIngredient)
                                cluePermission = false
                            break;
                            case 3:
                                iteratorCounter++ 
                                setClueName4(data[i-1].name)
                                setClueIngredient4(provisoryClueIngredient)
                                cluePermission = false
                            break;   
                            case 4:   
                                iteratorCounter++                                 
                                setClueName5(data[i-1].name)
                                setClueIngredient5(provisoryClueIngredient)
                                cluePermission = false                                
                            break;
                            case 5:
                                iteratorCounter++ 
                                setClueName6(data[i-1].name)
                                setClueIngredient6(provisoryClueIngredient)
                                cluePermission = false
                            break;
                            case 6:
                                iteratorCounter++ 
                                setClueName7(data[i-1].name)
                                setClueIngredient7(provisoryClueIngredient)
                                cluePermission = false
                            break;
                            case 7:
                                iteratorCounter++ 
                                setClueName8(data[i-1].name)
                                setClueIngredient8(provisoryClueIngredient)
                                cluePermission = false
                            break;
                            case 8:
                                iteratorCounter++ 
                                setClueName9(data[i-1].name)
                                setClueIngredient9(provisoryClueIngredient)
                                cluePermission = false
                            break;
                            case 10:
                                iteratorCounter++ 
                                setClueName10(data[i-1].name)
                                setClueIngredient10(provisoryClueIngredient)
                                cluePermission = false
                            break;                        
                        }                        
                    }
                 
                   
                   

                    }
                }
                
                if (shouldOpenClueModal) { handleShowCluesModal()}
                if (shouldOpenFoundModal) { handleShowFoundModal()}
                resetButtons()

            })
           
            
        }}  

  return (
    <div className='App'>   
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
            <div className="row mt-2">
              
                <div className="col">
                    
                </div>
                <div className="col">
             
                </div>     
            </div>
    </div>
        
        <div className='container ui-ribbon  mt-2'>   <h1 className='App-title  mt-2 pb-3 pe-4 ps-4'> Pesquisar Blueprints</h1></div>
        <div className="row mt-2 ">
                <div className="col p-0">
                    <div id ='getid'>
                        <button className= 'btn ui-btn mb-2' id = 'button1' onClick={(e) => {
                                    updateInput1('log', '#button1', 1);
                                }}>  <img src={"./log.png"} className='productIcon mb-1' alt='logo' /> </button>                               
                    </div>
                </div>
                <div className="col hide p-0">
                    <div id ='getid'>
                        <button className= 'btn ui-btn  mb-2' id = 'button2' onClick={(e) => {
                                    updateInput1('stone', '#button2', 2);
                                }}>  <img src={"./stone.png"} className='productIcon mb-1' alt='logo' /></button>                               
                    </div>
                </div>
                <div className="col custom p-0">
                    <div id =''>
                        <button className= 'btn  ui-btn  mb-2' id = 'button3' onClick={(e) => {
                                    updateInput1('silica', '#button3', 3);
                                }}>   <img src={"./silica.png"} className='productIcon mb-1' alt='logo' /></button>                    
                    </div>
                </div>
                
        </div>

        <div className="row">
                <div className="col p-0">
                    <div id ='getid'>
                        <button className= 'btn ui-btn  mb-2' id = 'button4' onClick={(e) => {
                                    updateInput1('timber', '#button4', 4);
                                }}>  <img src={"./timber.png"} className='productIcon mb-1' alt='logo' /> </button>                               
                    </div>
                </div>
                <div className="col hide p-0 ">
                    <div id ='getid'>
                        <button className= 'btn  ui-btn  mb-2' id = 'button5' onClick={(e) => {
                                     updateInput1('coal', '#button5', 5);
                                }}>  <img src={"./coal.png"} className='productIcon mb-1' alt='logo' /></button>                               
                    </div>
                </div>
                <div className="col custom p-0">
                    <div id =''>
                        <button className= 'btn  ui-btn  mb-2' id = 'button6' onClick={(e) => {
                                     updateInput1('ironore', '#button6', 6);
                                }}>   <img src={"./ironore.png"} className='productIcon mb-1' alt='logo' /></button>                    
                    </div>
                </div>
                
        </div>

        <div className="row">
                <div className="col p-0">
                    <div id ='getid'>
                        <button className= 'btn  ui-btn  mb-2' id = 'button7' onClick={(e) => {
                                    updateInput1('glass', '#button7', 7);
                                }}>  <img src={"./glass.png"} className='productIcon mb-1' alt='logo' /> </button>                               
                    </div>
                </div>
                <div className="col hide p-0">
                    <div id ='getid'>
                        <button className= 'btn  ui-btn  mb-2' id = 'button8' onClick={(e) => {
                                    updateInput1('rope', '#button8', 8);
                                }}>  <img src={"./rope.png"} className='productIcon mb-1' alt='logo' /></button>                               
                    </div>
                </div>
                <div className="col custom p-0">
                    <div id =''>
                        <button className= 'btn  ui-btn  mb-2' id = 'button9' onClick={(e) => {
                                    button9Function();
                                }}>   <img src={"./2x.png"} className='productIcon mb-1' alt='logo' /></button>                    
                    </div>
                </div>
                
        </div>

        <div className="container text-center" >
                <div className="row">
                <div className="col">
                    <div id ='getid'>
                        <span className='getest1'></span>        
                    </div>
                </div>
                    <div className="col">
                        <div id ='getid2'>
                            <span className='getest2'></span>
                        </div>
                    </div>

            <div className="col">
            <div id ='getid3'>
                <span className='getest'></span>
            </div>
            </div>
            </div>

            <div className="row">
                <div className="col">
                    <div id ='getid4'>
                        <span className='getest'></span>        
                    </div>
                    </div>
                    <div className="col">
            <div id ='getid5'>
                <span className='getest'></span>
            </div>
            </div>

            <div className="col">
            <div id ='getid6'>
                <span className='getest'></span>
            </div>
            </div>
            </div>

            <div className="row">
                <div className="col">
                    <div id ='getid7'>
                        <span className='getest'></span>        
                    </div>
                </div>
                <div className="col">
                    <div id ='getid8'>
                        <span className='getest'></span>
                    </div>
                </div>
                <div className="col">
                    <div id ='getid9'>
                        <span className='getest'></span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id ='getid10'>
                        <span className='getest'></span>        
                    </div>
                </div>
                <div className="col">
                    <div id ='getid11'>
                        <span className='getest'></span>
                    </div>
                </div>
                <div className="col">
                    <div id ='getid12'>
                        <span className='getest'></span>
                    </div>
                </div>
            </div>      

            <div className="row">
                <div className="col">
                    <div id ='getid13'>
                        <span className='getest'></span>        
                    </div>
                </div>
                <div className="col">
                    <div id ='getid14'>
                        <span className='getest'></span>
                    </div>
                </div>
                <div className="col">
                    <div id ='getid15'>
                        <span className='getest'></span>
                    </div>
                </div>
            </div>     

            <div className="row">
                <div className="col">
                    <div id ='getid16'>
                        <span className='getest'></span>        
                    </div>
                </div>
                <div className="col">
                    <div id ='getid17'>
                        <span className='getest'></span>
                    </div>
                </div>
                <div className="col">
                    <div id ='getid18'>
                        <span className='getest'></span>
                    </div>
                </div>
            </div>              
        </div>      

       
        <br/> 

        <button className=' btn ui-btn2 btnsize2 white' id='buttonSearch' onClick={(e) => {handleClick()}}><h3 className='white'>PESQUISAR</h3> </button>         
       

      <Modal show={showFoundModal} onHide={handleCloseFoundModal} onShow={(e) => {renderModalBPD()}} >
      
        <Modal.Body>
        <div className='container '>
                    <div className='row mt-2'>
                        <div className='col center'>
                        <h3 className='white useMyFont letterspacing lead'>blueprints encontradas:</h3>
                        </div>
                    </div>

                    <div className='row mt-3' id='modalContainer'>
                        <div className='col center'>
                       
                        </div>
                    </div>

                    <div className='row ' >
                        <div className='col center' id='row1'>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='col center'  id='row2'>
                        </div>
                    </div>

                    <div className='row ' >
                        <div className='col center' id='row3'>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='col center'  id='row4'>
                        </div>
                    </div>
                </div>   
        </Modal.Body> 
        <Modal.Footer>
        <Button className='ui-btn' variant='dark' onClick={handleCloseFoundModal}> <p className='useMyFont text-center letterspacing button1 '>Fechar</p></Button>
      </Modal.Footer>  
                     
      </Modal>

      <Modal show={showCluesModal} onHide={handleCloseCluesModal} onShow={(e) => {renderModalClues()}} >
      
        <Modal.Body>
        <div className='container '>
                    <div className='row mt-2'>
                        <div className='col center'>
                        <h3 className='white useMyFont letterspacing lead'>blueprints quase encontradas</h3>
                        </div>
                    </div>

                    <div className='row mt-3' id='modalContainer2'>
                        <div className='col center'>
                       
                        </div>
                    </div>

                    <div className='row ' >
                        <div className='col ' id='row1clues'>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='col center'  id='row2'>
                        </div>
                    </div>

                    <div className='row ' >
                        <div className='col center' id='row3'>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='col center'  id='row4'>
                        </div>
                    </div>
                </div>   
        </Modal.Body> 
        <Modal.Footer>
        <Button className='ui-btn' variant='dark' onClick={handleCloseCluesModal}> <p className='useMyFont text-center letterspacing button1 '>Fechar</p></Button>
      </Modal.Footer>               
      </Modal>
   


                  <div className ='mb-5'></div>  
                  <div className ='mb-3'></div>  
                 
    </div>
    </header>   
</div>
  );
}

export default BlueprintSearch;