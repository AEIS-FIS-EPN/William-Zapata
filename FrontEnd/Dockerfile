FROM node:20.11.0-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN rm -rf .next
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
