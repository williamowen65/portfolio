FROM node

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm run extra

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
