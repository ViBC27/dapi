import http from 'http';
import io from 'socket.io';
import app from './app';

const server = http.createServer(app);
const myio = io(server);

myio.on('connection', () => {
  console.log('a user connected');
});

server.listen(3000, () => console.log('Active in 3000'));
