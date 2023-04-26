const { JSDOM } = require('jsdom');
const fs = require('fs');
const http = require("http");
const port = 80;

// function readCount() {
//     try {
//
//     }
// }

// http server for displaying on a webpage
const server = http.createServer((req , res) => {
    const dom = new JSDOM('<html><body></body></html>');
    const body = dom.window.document.body;
    // prioritizing docker/ec2 deployment, will implement this later
    const num = 15;
    const h1 = dom.window.document.createElement('h1');
    h1.textContent = "Counter: " + num;

    body.appendChild(h1);

    const newHtml = dom.serialize();

    res.write(newHtml);
    res.end();
})

server.listen(port, () => {
    console.log("Listening on port " + port);
});
