//1---- Servidor de Express
const express = require('express');   
const path = require('path');
//2-Servidor de sockets
const http = require('http');
//3-Configuracion del servidor socket
const socketio = require('socket.io');
const Sockets = require('./sockets');
const cors = require('cors')

class Server {
   constructor() {
      this.app  = express();
      this.port = process.env.PORT || 8080;
      //Http server
      this.server = http.createServer(this.app);
      //Configuraciones de sockets
      this.io =socketio(this.server,{/*aqui podemos mandar configuraciones del socket server*/});
   }
   //funciones middleware irna en este método
   middlewares(){
      //indicamos el directorio publico
      this.app.use(express.static(path.resolve(__dirname,'../public')));
      //habilitamos las CORS
      this.app.use(cors());

   }
   //vamos a extraer en clases la logica de los metodos socket
   configurarSockets() {
      new Sockets(this.io)
   }
	//este metodo levanta el servidor
   execute(){
      //Inicializar Middlewares
      this.middlewares();
      //Inicializar sockets
      this.configurarSockets();
      //Inicializar Server
      this.server.listen(this.port, () => {
         console.log(`Server corriendo en puerto: ${this.port}`)
      })
   }
}

//Como estamos trabajando en Node debemos exportarla con module.exports
//Si no hay asignacion es exportacion por defecto
module.exports = Server;