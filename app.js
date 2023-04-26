import { createClient } from 'redis';
const client = createClient({
    socket: {
        host: 'redis',
        port: '6379'
    }
});

client.connect();
client.on('error', err => console.log('Redis Server', err));

client.incr('counter');

console.log(client.get('counter'));


