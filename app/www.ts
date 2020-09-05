import app from './app';
import http from 'http';

const server = http.createServer(app);

server.listen(3000, () => {
  return console.log('Active in 3000');
});
