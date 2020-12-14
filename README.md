# movies-listapp

![GitHub all releases](https://img.shields.io/github/downloads/donaldvallejo/movies-listapp/total?label=github&logo=github)
![Docker Build Status](https://img.shields.io/docker/build/donaldvallejo/movies-listapp)
![AUR last modified](https://img.shields.io/aur/last-modified/google-chrome)
![David](https://img.shields.io/david/dev/expressjs/express)
This MERN stack application is used as a todo list for movies.


To run this file locally without docker:
cd to server directory then run: 
npm start

cd to client directory then run: 
yarn start
Then check localhost:3000


To run build:
cd to client directory then run: 
docker build . -t movies 

cd to server directory then run: 
docker build . -t moviesbackend


To run docker compose:
from the parent folder run: docker-compose up
