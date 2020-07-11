const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http')
//inicializacion 
const app = express();
const server =  http.createServer(app);
const io = socketIO(server);

//socket
require("./socket")(io);
//middelware


//configuración
app.set('port',process.env.PORT || 3000);



//ubicacion de archivos
app.use(express.static(path.join(__dirname,'public')));

//iniciar servidor
server.listen(app.get('port'),()=>{
    console.log('servidor en el puerto ',app.get('port'));
});