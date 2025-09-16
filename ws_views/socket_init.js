module.exports  = function socket_init(connection, ws_context){
    ws_context.connections.push(connection);
}
