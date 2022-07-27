up:
	docker-compose up -d
	
rebuild:
	docker-compose build 

eviction:
	docker-compose exec redis-master redis-cli CONFIG SET maxmemory-policy $(eviction)
	docker-compose exec redis-slave redis-cli CONFIG SET maxmemory-policy $(eviction)

redis-benchmark:
	docker-compose exec redis-master redis-benchmark -q -n 100000 -c 50 -P 10	
