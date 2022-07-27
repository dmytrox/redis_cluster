up:
	docker-compose up -d
	
rebuild:
	docker-compose build 

redis-eviction:
	docker-compose exec redis-master redis-cli CONFIG SET maxmemory-policy $(eviction)
	docker-compose exec redis-slave redis-cli CONFIG SET maxmemory-policy $(eviction)

redis-reset-stats:
	docker-compose exec redis-master redis-cli CONFIG RESETSTAT

redis-benchmark:
	docker-compose exec redis-master redis-benchmark -q -n 100000 -c 50 -P 10	

redis-stats:
	docker-compose exec redis-master redis-cli INFO stats