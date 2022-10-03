import React from 'react';
import {useEffect, useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import './App.css';
import {getCompanyListDs} from './local/functions'

const ListDsScreen = () =>{        
    
    const navigate = useNavigate(); 
    
    const [modalShow, setModalShow] = useState(false)
    const [material1, setMaterial1] = useState('')
    const [material2, setMaterial2] = useState('')
    const [blueprintShow, setBlueprintShow] = useState(false)
    const [discoveredBps, setDiscoveredBps] = useState(0)
    const [buildingName, setBuildingName] = useState('')
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        renderList()
        setFirstRender(false)

      }, []);

    const openModal = async (ev) => {     
        setMaterial1(ev.getAttribute('material1'))
        setMaterial2(ev.getAttribute('material2'))
        setBuildingName(ev.getAttribute('name'))
    }

    useEffect(() => {
        if (!firstRender) setModalShow(true);        
     }, [buildingName]);


    const handleClose = async () => {
        setModalShow(false)
        setBlueprintShow(false)
    } 

    const showBlueprint = async () => {
       setBlueprintShow(!blueprintShow)
        
        if (!blueprintShow) {
            document.querySelector('#material1').style.display = 'block'
        document.querySelector('#material1').src = './' + material1 + '.png'

        document.querySelector('#material2').style.display = 'block'
        document.querySelector('#material2').src = './' + material2 + '.png'
        }

        if (blueprintShow) {
        document.querySelector('#material1').style.display = 'none'
        document.querySelector('#material2').style.display = 'none'
        }      
    }

    const renderModalProps = () => {
        document.querySelector("#buildModalIcon").src = "./buildings/" +buildingName+".png"
    }


    const renderList = async () => {

        const listDsData = await getCompanyListDs(sessionStorage.getItem('userid'))
        var blueprintArray = []

       for(let i =0;i<=28;i++) {
        if (listDsData[i] !== null) {
            blueprintArray.push(listDsData[i])
        }
       }
        setDiscoveredBps(blueprintArray.length)

        for (let i=1;i<=blueprintArray.length;i+=2) {
        var tr = document.createElement("tr");
        tr.setAttribute("id", "tr"+i);       
        document.getElementById("blueprintsTable").appendChild(tr);

        var td = document.createElement("td");
        td.setAttribute("id", "td1"+i);
        td.setAttribute("class", "");
        td.setAttribute("material1", blueprintArray[i-1].slot1);
        td.setAttribute("material2", blueprintArray[i-1].slot2);
        td.setAttribute("name", blueprintArray[i-1].name);
     
        document.getElementById("tr"+i).appendChild(td);
        
        var img = document.createElement("img");
        img.setAttribute("id", "td3");
        img.setAttribute("class", "buildIcon p-0 myGlower ");
        img.src = './buildings/' + blueprintArray[i-1].name + '.png' 
        document.getElementById("td1"+i).appendChild(img);

        var td = document.createElement("td");
        td.setAttribute("id", "td2"+i);
        td.setAttribute("class", "");
        document.getElementById("tr"+i).appendChild(td);
       
        if (blueprintArray[i]) { 
            td.setAttribute("material1", blueprintArray[i].slot1);
            td.setAttribute("material2", blueprintArray[i].slot2);
            td.setAttribute("name", blueprintArray[i].name);                    
            var img = document.createElement("img");
            img.setAttribute("id", "td3");
            img.setAttribute("class", "buildIcon p-0 myGlower ");
            img.src = './buildings/' + blueprintArray[i].name + '.png' 
            document.getElementById("td2"+i).appendChild(img);
        }
        }  

        if (blueprintArray.length === 0) {
        var tr = document.createElement("hr");   
        document.getElementById("blueprintsTable").appendChild(tr);

        var tr = document.createElement("tr");
        tr.setAttribute("id", "tr");  
        tr.setAttribute("class", "white mt-4 mb-3");  
        tr.innerHTML = 'nenhuma blueprint descoberta'   
        document.getElementById("blueprintsTable").appendChild(tr);

        var tr = document.createElement("hr");   
        document.getElementById("blueprintsTable").appendChild(tr);

        }
        
        setEventListeners()
    }

    const setEventListeners = () => {
        for(let i =1;i<=30;i+=2){
            try {
            document.querySelector("#td1"+i).onclick = function() {openModal(this)}
            document.querySelector("#td2"+i).onclick = function() {openModal(this)}
            }
            catch{}
            
        }     
    }

  return (
    <div className='App'> 
    <div className='container-fluid p-0 mb-4'> 
    <nav className="navbar navbar-expand-lg bg-light fixed-bottom ">
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
    <div className="container text-center  App-newbox " >
    <div className="container text-center " >
    <div className='container ui-ribbon2  mt-2 center '>   <h1 className='App-title center pt-2 '> suas blueprints</h1></div>

    </div>
        
              

        <table className="table darkbg border-white mb-4 " >
            <thead>
          
            </thead>
            <tbody id='blueprintsTable'>
            </tbody>
        </table>

        <div className='mb-sm-4'></div>
        <div className='mb-sm-4'></div>
        <div className='mb-sm-4'></div>

      

        
        </div>
    </header>

    <Modal show={modalShow} onHide={handleClose} onShow={renderModalProps}  centered >
        
        <Modal.Body>      
        <div className='row '>
            <div className='col center'>
                <img src={'./buildings/ferreiro.png'} className='bigIcon' alt='building' id='buildModalIcon'/>
            </div>
        </div> 

        <div className='row  mt-2'>
            <div className='col center'>
                <button className='btn ui-btn' onClick={(e)=>{showBlueprint()}}> <h4 className='useMyFont white'>mostrar blueprint</h4> </button>
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
</div>   
  );
}

export default ListDsScreen;