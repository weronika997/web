FROM node:15.14.0

RUN mkdir /home/app
RUN mkdir /home/app/src
WORKDIR /home/app

COPY ./app/. /home/app/
RUN mkdir /home/app/public
RUN mkdir /home/app/src/data

RUN npm install -g npm@6
RUN npm install