//AQui vamos a segmentar la logica de todos los metodos o eventos de los sockets en clases
//Esta clase va ser genial porque voy a tener control absoluto de cada uno de los clientes que se vayan conectando
class Sockets {

   constructor(io){
      this.io = io;
      this.socketEvents();
   }

   //este método va tener todos los eventos
   socketEvents(){
      //On connection debera ser el primero(este estaba predefinido ya)
      this.io.on('connection', (socket) => {
      //Escuchar evento:mensaje-to-server
      socket.on('mensaje-to-server',(data) => {
         console.log( data )
         this.io.emit('mensaje-from-server', data)
      })
   });
   }
}

module.exports = Sockets;