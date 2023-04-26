const redis = require('redis');
const { JSDOM } = require('jsdom');
const {createServer} = require("http");
const client = redis.createClient();
const dom = new JSDOM('<html><body></body></html>');

client.on('error', err => console.log('Redis Client Error', err));

client.connect();

client.set('counter', '0');


function increment() {
// Increment the value of the key by 1
    client.incr('counter');
}

function httpServer() {
    const server = createServer((req , res) => {
        const num = client.get('counter');
        const numHeader = dom.window.document.createElement('num');
        numHeader.textContext = "Counter: " + num;
    })
}

console.log(client.get('counter'))
increment();
