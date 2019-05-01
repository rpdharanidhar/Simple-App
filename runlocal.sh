#!/bin/bash
# Env Variables for Node Js app
export VERSION=$(git describe --abbrev=0)
export LAST_COMMIT=$(git rev-parse --short HEAD)
# Env Variables for docker building
export GIT_VERSION=$(git describe --abbrev=0)
export GIT_COMMIT=$(git rev-parse --short HEAD)

if [ "$1" == "install" ]; then
    npm install
elif [ "$1" == "test" ]; then
    npm test
elif [ "$1" == "start" ]; then
    npm start
elif [ "$1" == "build" ]; then
    docker-compose build
elif [ "$1" == "run" ]; then
    docker run -p 8000:8000 mcallinan/simpleapp:latest
else
    echo "Error Option not found:"
    echo 'Available targets are:'
	echo ''
	echo '    install             Install Node Js Dependancies.'
	echo '    test                Test the Node Js app.'
    echo '    start               Start the Node Js app locally.'
	echo '    build               Build a docker image of the app'
	echo '    run                 Run the resulting docker image.'
	echo ''
	echo ''
fi