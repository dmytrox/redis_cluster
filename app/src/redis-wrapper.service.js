import Redis from 'ioredis';

const slaves = [
  { ip: 'localhost', port: '6479', prio: 1 }
];

const redis = new Redis({
  port: '6379',
  host: 'localhost',
  preferredSlaves: slaves
});

redis.on('connect', function(err, res) {  
  if(err){
    console.log(err);
  } else {
    console.log("Redis connected!")
  }
});

redis.on('error', function(err) {
  if(err){
    console.log("Redis down!")
    console.log(err);
  }  
});

export class RedisWrapper {
  
  BETA = 1;

  TTL = 60;

  set(key, val, ttl = 60){
    redis.set(key, val, "EX", ttl);
  }
  
  async get(key)
  {
      const cache = await redis.get(key, (err) => {
        if (err) {
          console.error(err);
        }
      });

      let delta = cache?.delta;
      let expire = cache?.expire;
      let data =  cache?.data;
      
      if (!data || this.getCurrentTimeInSeconds() - delta * this.BETA * Math.log(Math.floor(Math.random() * 2)) >= expire){
          let start = this.getCurrentTimeInSeconds();        
          data = {test: "test"};   
          delta = this.getCurrentTimeInSeconds() - start;            
          expire = this.getCurrentTimeInSeconds() + this.TTL;
          this.set(key, {delta, expire, data}, this.TTL);
      }

      return data;
  }

  getCurrentTimeInSeconds(){
    return Math.round(Date.now() / 1000)
  }  
}