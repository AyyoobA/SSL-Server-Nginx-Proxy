FROM --platform=Linux/amd64 node:alpine
# FROM node:alpine

WORKDIR /app

EXPOSE 3081

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]