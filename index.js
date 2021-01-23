const Server = require("./models/server");
require('dotenv').config();
const server = new Server();
server.execute()

/* 
io.on('connection', (socket) => {
  El objeto socket tiene varias propiedades,una importante es el id  
  console.log(socket.id,'socket')

  Emitimos un evento al mismo socket con socket.emit(eventName,payload to send)
   socket.emit('mensaje-bienvenida', {
      msg: 'Bienvenido al Server Socket.IO',
      fecha: new Date()
   })

   escuchamos un evento desde el server con socket.on(eventName,(data)=>{instructions})
      socket.on('mensaje-to-server',(data) => {
         io.emit('mensaje-from-server', data)
      })


}); */

