FROM node:alpine3.15

WORKDIR /app

COPY package.json .

RUN npm install -g npm@8.18.0

RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "run", "dev"]
