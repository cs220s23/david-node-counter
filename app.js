const redis = require('redis');
const { JSDOM } = require('jsdom');
const http = require("http");
const client = redis.createClient();

// http server for displaying on a webpage
const server = http.createServer((req , res) => {
    const dom = new JSDOM('<html><body></body></html>');
    const body = dom.window.document.body;
    const num = '16';
    const h1 = dom.window.document.createElement('h1');
    h1.textContent = "Counter: " + num;

    body.appendChild(h1);

    const newHtml = dom.serialize();

    // res.writeHead = (200, {'Content-Type': 'type/html'});
    res.write(newHtml);
    res.end();
})

// Redis database client
client.on('error', err => console.log('Redis Client Error', err));

client.connect();

client.set('counter', 0);


async function increment() {
    // increment counter by 1 (why doesn't this work???)
    client.incr('counter');
}

server.listen(3000, () => {
    console.log("listening on port 3000")
});

// increment();
