const redis = require('redis');
const { JSDOM } = require('jsdom');
const http = require("http");
const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});



// Redis database client
client.on('error', err => console.log('Redis Server Error', err));
client.connect();
client.set('counter', 'Hello World');

// http server for displaying on a webpage
const server = http.createServer((req , res) => {
    const dom = new JSDOM('<html><body></body></html>');
    const body = dom.window.document.body;
    const num = client.get('counter');
    const h1 = dom.window.document.createElement('h1');
    h1.textContent = "Counter: " + num;

    body.appendChild(h1);

    const newHtml = dom.serialize();

    res.write(newHtml);
    res.end();
})



async function increment() {
    // increment counter by 1 (why doesn't this work???)
    client.incr('counter');
}

server.listen(3000, () => {
    console.log("listening on port 3000")
});

// increment();
