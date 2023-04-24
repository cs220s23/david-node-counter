const port = 80
import Redis from "ioredis";
const redis = new Redis();

var num = redis.get('counter');

function  addOne() {
    if (num == null) {
        redis.set('counter', 0);
        num = redis.get('counter');
    }
    return redis.set('counter', num+1);
}
addOne();
