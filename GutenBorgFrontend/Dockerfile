FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY build /usr/src/app
RUN npm install -g local-web-server

EXPOSE 8000
CMD [ "ws", "--https" ]