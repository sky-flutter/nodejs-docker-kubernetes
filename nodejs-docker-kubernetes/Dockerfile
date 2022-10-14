FROM node:alpine

WORKDIR /app

COPY package.json /app/

RUN npm i

COPY . /app/

ENV PORT_NUMBER=3001

CMD [ "node","index.js" ]