import 'dotenv/config'
import 'reflect-metadata'
import '../shared/container'
import { I18NextLanguageProvider } from '../shared/providers/LanguageProvider/implementations/I18NextLanguageProvider/I18NextLanguageProvider'
import { app } from '../shared/infra/http/httpServer'
import { Request, Response } from 'express'

import { createServer } from 'https';
import { readFileSync } from 'fs';
import { WebSocketServer } from 'ws';



const languageProvider = new I18NextLanguageProvider()

const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('key.pem');
const certificate = fs.readFileSync('cert.pem');

const credentials = {key: privateKey, cert: certificate};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

const port1 = 80
const port2 = 9999

const ws =  require('ws');
const wss = new ws.Server({port: 8082});

httpServer.listen(port1 , '0.0.0.0', ()  =>  {
  console.log('http online on port '+port1)
    
})  

httpsServer.listen(port2 , '0.0.0.0', ()  =>  {
  console.log('https online on port '+port2)
})

app.get('/' , (req,res)=>{
  console.log('health checked')
  res.sendStatus(200)
})



//wss.broadcast = function(data) {
 // wss.clients.forEach(client => client.send(data));
//};



wss.on("connection", wss => {
  console.log('user connected')

   wss.on("close", wss => {
    })

    wss.on("message", message => {
      console.log("receiving message from websocket-client")

    var data
      
      try{data = JSON.parse(message.toString())}
        catch(e) {data = 'jsonparse-failed'}
      
      if (data.type == 'newBlueprintDiscoveredNotification') {
       //   wss.broadcast(JSON.stringify({
       //   type: 'newBlueprintDiscoveredNotification',
       //   message: data.message,
       //   color: data.color
      //}))
      }

      if (message.toString() == 'cm=lobby:update user locations') {
       // wss.broadcast('sm=lobby:update user locations')
      }
      

      else {
       

      }
      
  })
})





