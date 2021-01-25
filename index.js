const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('request:online-users',(data)=>{
    console.log('api hit'+data.token);
    socket.emit('response:online-users',[{user_id:"_2432444243"}])
  })
});



http.listen(3000, () => {
  console.log('listening on *:3000');
});