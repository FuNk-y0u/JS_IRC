module.export  = function socket_init(connection, ws_context){
    ws_context.push(connection);
}
