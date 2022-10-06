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

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('key.pem');
var certificate = fs.readFileSync('cert.pem');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

const port1 = 80
const port2 = 9999

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

const server = createServer({
  cert: readFileSync('./cert.pem'),
  key: readFileSync('./key.pem')
});
const wss = new WebSocketServer({ server })

//wss.broadcast = function(data) {
 // wss.clients.forEach(client => client.send(data));
//};

server.listen(8082);

wss.on("connection", wss => {
  console.log('user connected')

   wss.on("close", wss => {
    })

    wss.on("message", message => {

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





