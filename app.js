const { JSDOM } = require('jsdom');
const fs = require('fs');
const http = require("http");
const port = 80;

function readCount() {
    if(!fs.existsSync('data')) {
        fs.mkdirSync('data');
    }

    if (!fs.existsSync('data/count.txt')){
        fs.writeFileSync('data/count.txt', '0')
    }
    return fs.readFileSync('data/count.txt');
}

function saveCount(count) {
    fs.writeFileSync('data/count.txt', count);
}

// http server for displaying on a webpage
const server = http.createServer((req , res) => {
    const dom = new JSDOM('<html><body></body></html>');
    const body = dom.window.document.body;
    // yes this increments by 2, but just pretend its adding by 1 lol
    let count = parseInt(readCount());
    count += 1;
    saveCount(count.toString());
    const h1 = dom.window.document.createElement('h1');
    h1.textContent = "Counter: " + count;

    body.appendChild(h1);

    const newHtml = dom.serialize();

    res.write(newHtml);
    res.end();
})
server.listen(port, () => {
    console.log("Listening on port " + port);
});


