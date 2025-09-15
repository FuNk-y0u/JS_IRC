const express = require('express');
const {createServer} = require('http');
const {WebSocketServer} = require('ws');

const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + '/public/dashboard.html');
});

app.get("/sv_name", (req, res) => {
   res.send(JSON.stringify(
       {
           name: "Discussion"
       }
   )
   ); 
});

const server = createServer(app);

const wss = new WebSocketServer({server: server});

var server_connections = [];

wss.on("connection", (ws) => {
    server_connections.push(ws);

    ws.on("message", (data) => {
        for(const val of server_connections) {
            val.send(data.toString());
        }
    });

    ws.on("close", () => {
    });
});

server.listen(3000, () => {
    console.log("SERVER STARTED AT LOCALHOST:3000");
});
