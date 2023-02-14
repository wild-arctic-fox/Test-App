#!/usr/bin/env bash

docker-compose -f docker-compose.yaml down
echo "down success"

export IMAGE=$1
docker-compose -f docker-compose.yaml up --detach
echo "up success"