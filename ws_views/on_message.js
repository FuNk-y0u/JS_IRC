module.exports = function on_message(data, ws_context) {
    for(const connection of ws_context.connections){
        connection.send(data.toString());
    }
}
