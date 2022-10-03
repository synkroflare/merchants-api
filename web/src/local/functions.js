export const setUser2Actions = (userid) => {

    fetch('http://192.168.0.10:3030/user/update/'+userid,
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },                   
      body: JSON.stringify({actions: 2, roomId: 1})                
    }         
    )  
    
}



export const getUserActions = (userid) => {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.0.10:3030/user/read/'+userid,
    { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }                
    }         
    ) 
    .then(response => response.json())
    .then(function(data) {    
      resolve((JSON.parse(data.actions)))
    })     
  })
}

export const checkIfItsYourTurn = (userid) => {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.0.10:3030/room/list',
      {  method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(function(data) {
      var result = userid - data[0].activeUserId
      resolve(result)
    })
  })
}

export const passTurn = async (userid) => {
    fetch('http://192.168.0.10:3030/room/passturn',
      {  method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({userId: userid})
    }
    )   
}

export const getActiveUserSlot = () => {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.0.10:3030/room/list',
      {  method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(function(data) {
      var result = data[0].activeUserSlot
      resolve(result)
    })
  })
}

export const enterRoom = async () => {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.0.10:3030/room/enter',
      {  method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(function(data) {
      resolve(data)
    })
  })

}

export const checkIfRoomLeader = async (userid) => {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.0.10:3030/room/list',
      {  method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(function(data) {
       resolve(userid - data[0].slot1Id)
    })
  })
}

export const setActivePlayer1 = async (userid) => {  

  fetch('http://192.168.0.10:3030/room/update',
    {  method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({activeUserSlot: 1, activeUserId: userid})
  }
  )   
}

export const checkIfGameStarted = async () => {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.0.10:3030/room/list',
      {  method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(function(data) {
       resolve(data[0].status)
    })
  })
}

export const getActiveUserName = async () => {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.0.10:3030/room/list',
      {  method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(function(data) {
       resolve(data[0].activeUserName)
    })
  })
}

export const getActiveUserId = async () => {  
  return new Promise((resolve, reject) => {
    fetch('http://192.168.0.10:3030/room/list',
      {  method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(function(data) {
       resolve(data[0].activeUserId)
    })
  })
}

export const sub1UserAction = async (userid) => {  
  console.log(userid)
  return new Promise((resolve, reject) => {
     fetch('http://192.168.0.10:3030/user/subaction/'+ userid ,
      {  method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(function(data) {
       resolve(data.actions)
    })
  })
}

export const setRoomOnline = async () => {  

  fetch('http://192.168.0.10:3030/room/update',
    {  method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({status: true})
  }
  )   
}

export const setRoomOffline = async () => {  

  fetch('http://192.168.0.10:3030/room/update',
    {  method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({status: false})
  }
  )   
}

export const getCompanyListDs = async (userid) => {
  return new Promise( (resolve, reject) => {
    fetch('http://192.168.0.10:3030/company/listds/'+userid,
    {  method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  )
  .then(response => response.json())
  .then(function(data){
    resolve(data)
  }) 
  }  ) 
}

export const getRoomData = async () => {
  return new Promise( (resolve, reject) => {
    fetch('http://192.168.0.10:3030/room/list/',
    {  method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  )
  .then(response => response.json())
  .then(function(data){
    resolve(data)
  }) 
  }) 
}



export const setUserLocation = async (userid, location) => {
  return new Promise((resolve, reject) => {
     fetch('http://192.168.0.10:3030/user/update/'+ userid,
      {  method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({location: location, roomId: 1, actions: 2})
    }
    )
   
  })
}

export const getUserData = (userid) => {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.0.10:3030/user/read/'+userid,
    { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }                
    }         
    ) 
    .then(response => response.json())
    .then(function(data) {    
      resolve(data)
    })     
  })
}

export const checkIfUserExists = (userid) => {
  return new Promise ((resolve, reject) => {
  
    fetch('http://192.168.0.10:3030/user/check/'+userid,
    { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }                
    }         
    )
    .then(response => response.json())
    .then(function(data){
      resolve(data)
    })
  })
  }

       
  


export const setLocations = () => {
  
  fetch('http://192.168.0.10:3030/user/setlocations/',
  { 
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }                
  }         
  )     
}

export const checkifUserIsInRoom = (userid) => {
  return new Promise ((resolve, reject) => {
  
    fetch('http://192.168.0.10:3030/room/list',
    { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }                
    }         
    )
    .then(response => response.json())
    .then(function(data){
      if (userid == data[0].slot1Id) {resolve(true)}
      if (userid == data[0].slot2Id) {resolve(true)}
      if (userid == data[0].slot3Id) {resolve(true)}
      if (userid == data[0].slot4Id) {resolve(true)}
      if (userid == data[0].slot5Id) {resolve(true)}
      if (userid == data[0].slot6Id) {resolve(true)}
      if (userid == data[0].slot7Id) {resolve(true)}
      if (userid == data[0].slot8Id) {resolve(true)}
      else {resolve(false)}
      
    })
  })
  }


  export const createUser = (userid, username) => {

    fetch('http://192.168.0.10:3030/user',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },                   
      body: JSON.stringify({userId: Number(userid), roomId: 0, name: username})                
    }         
    )  
    
}

export const getUserDiscoveredCount = (userid) => {
  return new Promise ((resolve,reject) => {
    fetch('http://192.168.0.10:3030/user/read/'+userid,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }               
    }         
    )
    .then(response => response.json())
    .then(function(data){
      var counter = 0
      if (data.BPD1 === true) counter++
      if (data.BPD2 === true) counter++
      if (data.BPD3 === true) counter++
      if (data.BPD4 === true) counter++
      if (data.BPD5 === true) counter++
      if (data.BPD6 === true) counter++
      if (data.BPD7 === true) counter++
      if (data.BPD8 === true) counter++
      if (data.BPD9 === true) counter++
      if (data.BPD10 === true) counter++
      if (data.BPD11 === true) counter++
      if (data.BPD12 === true) counter++
      if (data.BPD13 === true) counter++
      if (data.BPD14 === true) counter++
      if (data.BPD15 === true) counter++
      if (data.BPD16 === true) counter++
      if (data.BPD17 === true) counter++
      if (data.BPD18 === true) counter++
      if (data.BPD19 === true) counter++
      if (data.BPD20 === true) counter++
      if (data.BPD21 === true) counter++
      if (data.BPD22 === true) counter++
      if (data.BPD23 === true) counter++
      if (data.BPD24 === true) counter++
      if (data.BPD25 === true) counter++
      if (data.BPD26 === true) counter++
      if (data.BPD27 === true) counter++
      if (data.BPD28 === true) counter++
      if (data.BPD29 === true) counter++
      if (data.BPD30 === true) counter++
      resolve(counter)
    })  
  }

  )

}


export const wipeData = () => {

  fetch('http://192.168.0.10:3030/company/wipe',
  {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }               
  }         
  )  
  
}




