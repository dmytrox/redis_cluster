# Redis master-slave cluster with eviction strategies

To start the app run this command: 
```
make up
```

To put dummy data to the db tun
```
node app/app.js
```

To change eviction strategy run this command: 
```
make redis-eviction eviction=prefered_eviction
```

To run redis benchmark run this command: 
```
make redis-benchmark
```

To get redis stats run this command: 
```
make redis-stats
```

To reset redis stats run this command: 
```
make redis-reset-stats
```


## Tests

### noeviction
stats
```
evicted_keys:0
keyspace_hits:421561
keyspace_misses:15
```
benchmark
```
PING_INLINE: 833333.38 requests per second, p50=0.463 msec         
PING_MBULK: 1052631.62 requests per second, p50=0.367 msec
SET: 497512.44 requests per second, p50=0.951 msec                   
GET: 775193.81 requests per second, p50=0.527 msec                    
INCR: 552486.19 requests per second, p50=0.791 msec
LPUSH: 543478.25 requests per second, p50=0.831 msec                   
RPUSH: 507614.22 requests per second, p50=0.855 msec                    
LPOP: 473933.66 requests per second, p50=0.887 msec                    
RPOP: 462962.94 requests per second, p50=0.911 msec                    
SADD: 751879.69 requests per second, p50=0.543 msec
HSET: 505050.50 requests per second, p50=0.919 msec                    
SPOP: 826446.31 requests per second, p50=0.495 msec                    
ZADD: 657894.75 requests per second, p50=0.663 msec
ZPOPMIN: 826446.31 requests per second, p50=0.487 msec                    
LPUSH (needed to benchmark LRANGE): 492610.84 requests per second, p50=0.919 msec
LRANGE_100 (first 100 elements): 114025.09 requests per second, p50=2.135 msec                    
LRANGE_300 (first 300 elements): 24881.81 requests per second, p50=9.759 msec                     
LRANGE_500 (first 500 elements): 14374.01 requests per second, p50=15.263 msec                    
LRANGE_600 (first 600 elements): 10165.70 requests per second, p50=28.847 msec                    
MSET (10 keys): 182149.36 requests per second, p50=2.663 msec 
```
### allkeys-lru
stats
```
evicted_keys:0
keyspace_hits:531864
keyspace_misses:15
```
benchmark
```
PING_INLINE: 666666.62 requests per second, p50=0.591 msec         
PING_MBULK: 980392.19 requests per second, p50=0.383 msec                    
SET: 558659.19 requests per second, p50=0.775 msec
GET: 787401.56 requests per second, p50=0.479 msec                    
INCR: 568181.81 requests per second, p50=0.791 msec
LPUSH: 469483.56 requests per second, p50=0.959 msec                   
RPUSH: 529100.56 requests per second, p50=0.807 msec                   
LPOP: 495049.50 requests per second, p50=0.903 msec                    
RPOP: 515463.91 requests per second, p50=0.847 msec                    
SADD: 746268.62 requests per second, p50=0.575 msec
HSET: 507614.22 requests per second, p50=0.919 msec                    
SPOP: 892857.12 requests per second, p50=0.399 msec
ZADD: 641025.62 requests per second, p50=0.687 msec                  
ZPOPMIN: 806451.62 requests per second, p50=0.503 msec                    
LPUSH (needed to benchmark LRANGE): 485436.91 requests per second, p50=0.887 msec
LRANGE_100 (first 100 elements): 111234.70 requests per second, p50=2.183 msec                    
LRANGE_300 (first 300 elements): 26198.59 requests per second, p50=9.303 msec                     
LRANGE_500 (first 500 elements): 14174.34 requests per second, p50=15.935 msec                    
LRANGE_600 (first 600 elements): 10155.38 requests per second, p50=27.279 msec                    
MSET (10 keys): 177935.95 requests per second, p50=2.591 msec   
```
### allkeys-lfu
stats
```
evicted_keys:0
keyspace_hits:534261
keyspace_misses:15
```
benchmark
```
PING_INLINE: 970873.81 requests per second, p50=0.439 msec         
PING_MBULK: 892857.12 requests per second, p50=0.439 msec
SET: 502512.56 requests per second, p50=0.911 msec                   
GET: 729927.06 requests per second, p50=0.575 msec                    
INCR: 555555.56 requests per second, p50=0.711 msec
LPUSH: 452488.69 requests per second, p50=0.983 msec                   
RPUSH: 537634.38 requests per second, p50=0.783 msec                   
LPOP: 529100.56 requests per second, p50=0.847 msec                    
RPOP: 543478.25 requests per second, p50=0.863 msec                    
SADD: 847457.62 requests per second, p50=0.495 msec
HSET: 483091.78 requests per second, p50=0.951 msec                    
SPOP: 892857.12 requests per second, p50=0.463 msec
ZADD: 649350.62 requests per second, p50=0.663 msec                   
ZPOPMIN: 854700.88 requests per second, p50=0.447 msec
LPUSH (needed to benchmark LRANGE): 476190.50 requests per second, p50=0.935 msec                   
LRANGE_100 (first 100 elements): 115606.94 requests per second, p50=2.111 msec                    
LRANGE_300 (first 300 elements): 26730.82 requests per second, p50=9.127 msec                     
LRANGE_500 (first 500 elements): 15571.47 requests per second, p50=13.727 msec                    
LRANGE_600 (first 600 elements): 12642.23 requests per second, p50=18.031 msec                    
MSET (10 keys): 171526.58 requests per second, p50=2.759 msec   
```
### volatile-lru
stats
```
evicted_keys:0
keyspace_hits:531561
keyspace_misses:15
```
benchmark
```
PING_INLINE: 787401.56 requests per second, p50=0.487 msec         
PING_MBULK: 869565.19 requests per second, p50=0.399 msec
SET: 526315.81 requests per second, p50=0.831 msec                  
GET: 680272.12 requests per second, p50=0.511 msec                    
INCR: 546448.06 requests per second, p50=0.807 msec                    
LPUSH: 423728.81 requests per second, p50=0.951 msec                    
RPUSH: 510204.09 requests per second, p50=0.839 msec
LPOP: 465116.28 requests per second, p50=0.943 msec                   
RPOP: 507614.22 requests per second, p50=0.903 msec                    
SADD: 709219.88 requests per second, p50=0.583 msec                    
HSET: 485436.91 requests per second, p50=0.951 msec
SPOP: 826446.31 requests per second, p50=0.431 msec                   
ZADD: 675675.69 requests per second, p50=0.639 msec
ZPOPMIN: 746268.62 requests per second, p50=0.471 msec                   
LPUSH (needed to benchmark LRANGE): 495049.50 requests per second, p50=0.943 msec                    
LRANGE_100 (first 100 elements): 113636.37 requests per second, p50=2.143 msec                    
LRANGE_300 (first 300 elements): 25380.71 requests per second, p50=9.751 msec                     
LRANGE_500 (first 500 elements): 14938.75 requests per second, p50=15.719 msec                    
LRANGE_600 (first 600 elements): 11122.23 requests per second, p50=23.375 msec                    
MSET (10 keys): 177304.97 requests per second, p50=2.703 msec
```
### volatile-lfu
stats
```
evicted_keys:0
keyspace_hits:5539107
keyspace_misses:15
```
benchmark
```
PING_INLINE: 757575.75 requests per second, p50=0.463 msec        
PING_MBULK: 934579.44 requests per second, p50=0.383 msec
SET: 507614.22 requests per second, p50=0.895 msec                   
GET: 847457.62 requests per second, p50=0.495 msec                    
INCR: 555555.56 requests per second, p50=0.831 msec
LPUSH: 448430.47 requests per second, p50=1.015 msec                   
RPUSH: 529100.56 requests per second, p50=0.879 msec                   
LPOP: 476190.50 requests per second, p50=0.967 msec                    
RPOP: 561797.75 requests per second, p50=0.727 msec                    
SADD: 826446.31 requests per second, p50=0.511 msec
HSET: 467289.72 requests per second, p50=0.991 msec                    
SPOP: 909090.94 requests per second, p50=0.399 msec
ZADD: 649350.62 requests per second, p50=0.679 msec                   
ZPOPMIN: 862069.00 requests per second, p50=0.415 msec                    
LPUSH (needed to benchmark LRANGE): 465116.28 requests per second, p50=0.999 msec
LRANGE_100 (first 100 elements): 113250.28 requests per second, p50=2.111 msec                    
LRANGE_300 (first 300 elements): 25900.03 requests per second, p50=9.391 msec                     
LRANGE_500 (first 500 elements): 15544.85 requests per second, p50=14.375 msec                    
LRANGE_600 (first 600 elements): 9166.74 requests per second, p50=33.855 msec                     
MSET (10 keys): 177304.97 requests per second, p50=2.703 msec 
```
### allkeys-random
stats 
```
evicted_keys:0
keyspace_hits:5069107
keyspace_misses:15
```
benchmark
```
PING_INLINE: 909090.94 requests per second, p50=0.463 msec        
PING_MBULK: 909090.94 requests per second, p50=0.407 msec
SET: 476190.50 requests per second, p50=0.919 msec                   
GET: 694444.50 requests per second, p50=0.551 msec                    
INCR: 574712.69 requests per second, p50=0.767 msec                    
LPUSH: 462962.94 requests per second, p50=0.983 msec
RPUSH: 487804.88 requests per second, p50=0.927 msec                   
LPOP: 500000.00 requests per second, p50=0.895 msec                    
RPOP: 537634.38 requests per second, p50=0.863 msec                    
SADD: 840336.12 requests per second, p50=0.511 msec
HSET: 515463.91 requests per second, p50=0.919 msec                    
SPOP: 925925.88 requests per second, p50=0.439 msec
ZADD: 671140.94 requests per second, p50=0.639 msec                   
ZPOPMIN: 793650.75 requests per second, p50=0.479 msec                    
LPUSH (needed to benchmark LRANGE): 425531.91 requests per second, p50=1.079 msec                    
LRANGE_100 (first 100 elements): 108108.11 requests per second, p50=2.239 msec                    
LRANGE_300 (first 300 elements): 27654.87 requests per second, p50=8.831 msec                     
LRANGE_500 (first 500 elements): 13625.83 requests per second, p50=19.007 msec                    
LRANGE_600 (first 600 elements): 9787.61 requests per second, p50=31.359 msec                     
MSET (10 keys): 178571.42 requests per second, p50=2.791 msec
```
### volatile-random
stats
```
evicted_keys:0
keyspace_hits:5539107
keyspace_misses:15
```
benchmark
```
PING_INLINE: 806451.62 requests per second, p50=0.535 msec        
PING_MBULK: 1000000.00 requests per second, p50=0.399 msec
SET: 480769.22 requests per second, p50=0.943 msec                   
GET: 769230.81 requests per second, p50=0.511 msec                    
INCR: 552486.19 requests per second, p50=0.807 msec
LPUSH: 485436.91 requests per second, p50=0.943 msec         
RPUSH: 500000.00 requests per second, p50=0.871 msec                   
LPOP: 487804.88 requests per second, p50=0.927 msec                    
RPOP: 505050.50 requests per second, p50=0.855 msec                    
SADD: 740740.69 requests per second, p50=0.463 msec
HSET: 490196.09 requests per second, p50=0.959 msec                   
SPOP: 826446.31 requests per second, p50=0.447 msec                    
ZADD: 709219.88 requests per second, p50=0.623 msec
ZPOPMIN: 970873.81 requests per second, p50=0.415 msec                    
LPUSH (needed to benchmark LRANGE): 507614.22 requests per second, p50=0.919 msec
LRANGE_100 (first 100 elements): 110132.16 requests per second, p50=2.215 msec                    
LRANGE_300 (first 300 elements): 25859.84 requests per second, p50=9.407 msec                     
LRANGE_500 (first 500 elements): 13633.26 requests per second, p50=18.687 msec                    
LRANGE_600 (first 600 elements): 9614.46 requests per second, p50=31.855 msec                     
MSET (10 keys): 170068.03 requests per second, p50=2.815 msec 
```
### volatile-ttl
stats
```
evicted_keys:0
keyspace_hits:4737077
keyspace_misses:15
```
benchmark
```
PING_INLINE: 840336.12 requests per second, p50=0.399 msec         
PING_MBULK: 990099.00 requests per second, p50=0.391 msec
SET: 515463.91 requests per second, p50=0.871 msec                   
GET: 657894.75 requests per second, p50=0.615 msec                    
INCR: 584795.31 requests per second, p50=0.743 msec
LPUSH: 492610.84 requests per second, p50=0.951 msec                   
RPUSH: 505050.50 requests per second, p50=0.871 msec                   
LPOP: 487804.88 requests per second, p50=0.927 msec                    
RPOP: 520833.34 requests per second, p50=0.879 msec                    
SADD: 719424.44 requests per second, p50=0.591 msec
HSET: 473933.66 requests per second, p50=0.943 msec                    
SPOP: 854700.88 requests per second, p50=0.471 msec                    
ZADD: 649350.62 requests per second, p50=0.655 msec
ZPOPMIN: 806451.62 requests per second, p50=0.471 msec                    
LPUSH (needed to benchmark LRANGE): 458715.59 requests per second, p50=1.047 msec                    
LRANGE_100 (first 100 elements): 109409.20 requests per second, p50=2.207 msec                    
LRANGE_300 (first 300 elements): 26525.20 requests per second, p50=9.223 msec                     
LRANGE_500 (first 500 elements): 14753.62 requests per second, p50=15.151 msec                    
LRANGE_600 (first 600 elements): 10695.19 requests per second, p50=23.423 msec                    
MSET (10 keys): 180180.17 requests per second, p50=2.695 msec 
```
