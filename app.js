const redis = require('redis');
const client = redis.createClient({
    socket: {
        host: 'redis',
        port: '6379'
    }
});

client.connect();
client.on('error', err => console.log('Redis Server', err));

client.incr('counter');

console.log(client.get('counter'));


