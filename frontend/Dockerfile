FROM node:slim

# set working directory to /app
WORKDIR /app

# install dependencies
COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

# build production site
RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]