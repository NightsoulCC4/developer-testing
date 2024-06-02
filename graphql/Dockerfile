FROM node:20

WORKDIR /usr/src

COPY package*.json .

RUN npm install
COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm","run","serve"]
