import 'dotenv/config'
import 'reflect-metadata'
import '../shared/container'
import { I18NextLanguageProvider } from '../shared/providers/LanguageProvider/implementations/I18NextLanguageProvider/I18NextLanguageProvider'
import { app } from '../shared/infra/http/httpServer'

const httpPort = process.env.EXPRESS_PORT
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

httpServer.listen(3030);
httpsServer.listen(3031);















const WebSocket =  require("ws")

const wss = new WebSocket.Server({ port:8082})

wss.broadcast = function(data) {
  wss.clients.forEach(client => client.send(data));
};

wss.on("connection", ws => {

   ws.on("close", ws => {
    })

    ws.on("message", message => {

    var data
      
      try{data = JSON.parse(message)}
        catch(e) {data = 'jsonparse-failed'}
      
      if (data.type == 'newBlueprintDiscoveredNotification') {
        wss.broadcast(JSON.stringify({
          type: 'newBlueprintDiscoveredNotification',
          message: data.message,
          color: data.color
      }))
      }

      if (message.toString() == 'cm=lobby:update user locations') {
        wss.broadcast('sm=lobby:update user locations')
      }
      

      else {
       

      }
      
  })
})





