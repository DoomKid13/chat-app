import { createServer } from 'node:http';
import { Server } from 'socket.io';

const server = createServer((req, res) => {
    res.end('Server is running! ' + new Date().toLocaleString());
});

const io = new Server(server, {
    cors: {
        origin: [
            'http://localhost:3000',
            'http://ajkipp.tplinkdns.com:3000',
            'http://192.168.0.249:3000'
        ]
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('create-something', (value) => {
        console.log(socket.handshake.address + '> ' + value);
        io.emit('foo', socket.handshake.address + '> ' + value);
    })
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});