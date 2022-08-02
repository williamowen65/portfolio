FROM node

WORKDIR /app

COPY package.json .

RUN sh "npm install --legacy-peer-deps"

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
