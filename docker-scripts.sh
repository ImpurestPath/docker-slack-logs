#!/bin/bash

if [[ $2 == "jenkins" ]] || [[ $2 == "artifactory" ]]; then
printf '%s\n' "Forbidden service" >&2
exit 1
fi

case $1 in 

"logs" ) 
docker service logs $2 2>&1| tail -n 200
;;

"status" )
docker service ps --no-trunc $2
;;

*)
printf '%s\n' "Unknown command $1" >&2
exit 1
;;

esac