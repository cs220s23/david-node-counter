const redis = require('redis');
const {defineScript} = require("redis");
const client = redis.createClient();

client.on('error', err => console.log('Redis Client Error', err));

async function connect() {
    await client.connect();
}
async function increment() {
    await client.set('key', 0);
    const value = await client.get('key');
    client.incr('key')
    console.log(value);
}

async function disconnect() {
    // await client.disconnect();
    client.quit();
}

connect();
increment();
increment();
disconnect();
