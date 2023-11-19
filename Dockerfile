FROM node:18.18-alpine3.17

# Create app directory
RUN mkdir -p /server/app
WORKDIR /server/app

# Install app dependencies
COPY package*.json /server/app/
RUN npm install

# Bundle app source
COPY . /server/app

EXPOSE 8080
CMD [ "node", "app.js" ]