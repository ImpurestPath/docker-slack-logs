FROM ubuntu:20.04

RUN apt update && apt install -y nodejs npm docker.io

RUN npm install

CMD [ "node", "server.js" ]