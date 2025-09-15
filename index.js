const express = require('express');
const app = require('./app.js');
const create_ws_server = require('./wss.js');

const index = require('./views/index.js');
const dashboard = require('./views/dashboard.js');
const sv_name = require('./views/sv_name.js');


const socket_init = require('./ws_views/socket_init.js');
const on_message = require('./ws_views/on_message.js');
const on_close = require('./ws_views/on_close.js');

// Creating HTTP server
app.use(express.static('public'));
app.get("/", index);
app.get("/dashboard", dashboard);
app.get("/sv_name", sv_name);

// Creating socket server
wss = create_wss_server(app);

var ws_context = {
    connections: []
};

wss.on("connection", (connection) => {

    socket_init(connection, ws_context);

    ws.on("message", (data) => {
        on_message(data, ws_context);
    });
    
    ws.on("close", () => {
        on_close(data, ws_context);
    });
});

server.listen(3000, () => {
    console.log("[INFO] HTTP SERVER STARTED AT http://localhost:3000");
    console.log("[INFO] SOCKET SERVER STARTED AT ws://localhost:3000");
});

