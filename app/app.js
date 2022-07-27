import {RedisWrapper} from "./src/redis-wrapper.service.js";

const redisWrapper = new RedisWrapper();

const data = await redisWrapper.get("test");

console.log(data);