const socketIO = require('socket.io');
const Message = require('./models/Message');

module.exports = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', async (data) => {
      const message = new Message(data);
      await message.save();
      io.emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};
