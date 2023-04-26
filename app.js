const redis = require('redis');
const client = redis.createClient({
    socket: {
        host: 'redis',
        port: '6379'
    },
});

client.connect();
client.on('error', err => console.log('Redis Server', err));

async function increment() {
    client.incr('counter');
}

increment();
console.log(client.get('counter'));


