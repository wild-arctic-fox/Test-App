#!/bin/bash

tcp_openned_ports_info=($(sudo netstat -tlnp | awk '{split($4,port,":"); print port[2]}'))

declare -p tcp_openned_ports_info | grep -q '^declare \-a' && echo array || echo no array

for i in ${tcp_openned_ports_info[@]}; do
    pid=$(sudo lsof -iTCP:$i -sTCP:LISTEN -P -n | awk 'NR==2{print $2}')
    echo "PID $pid PORT $i"
    if [ -n "$pid" ]; then
        echo "Killing $pid on port $i"
        sudo kill -9 $pid
    fi
done
