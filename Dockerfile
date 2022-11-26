FROM node:lts-bullseye

# create app directory
WORKDIR /usr/src/plooshi_docs

# install packages
COPY package*.json ./
RUN npm install

# copy source code
COPY . .

# run the server
EXPOSE 8080
CMD [ "node", "index.js" ]
