const redis = require('redis');
const {createClient} = require("redis");
const client = createClient({
    socket: {
        host: 'redis',
        port: '6379'
    }
});
// Set a key-value pair
client.set('myKey', 'myValue', function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log('Result:', result);
    }
});

// Get the value of a key
client.get('myKey', function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log('Value:', result);
    }
});

// Increment a counter
client.incr('myCounter', function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log('Counter:', result);
    }
});
//
// // Close the Redis connection
// client.quit();