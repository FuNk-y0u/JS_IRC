const {createServer} = require('http');
const {WebSocketServer} = require('ws');

module.export = function create_ws_server(app) {

    const server = createServer(app);
    const websocketserver = new WebSocketServer({
        server: server
    });

    return websocketserver;
};
