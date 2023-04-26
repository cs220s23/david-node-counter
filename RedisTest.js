import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', "\x00");
const value = await client.get('key');
console.log(value);
await client.disconnect();
