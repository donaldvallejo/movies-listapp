# movies-listapp

![GitHub all releases](https://img.shields.io/github/downloads/donaldvallejo/movies-listapp/total?label=github&logo=github)
![Docker Build Status](https://img.shields.io/docker/build/donaldvallejo/movies-listapp)
![AUR last modified](https://img.shields.io/aur/last-modified/google-chrome)
![David](https://img.shields.io/david/dev/expressjs/express)


This MERN stack application is used as a todo list for movies.


To run this file locally without docker:
<br>
cd to server directory then run: 
<br>
npm start

cd to client directory then run:
<br>
yarn start
<br>
Then check localhost:3000
<br>

<br>
To run build:
<br>
cd to client directory then run: 
<br>
docker build . -t movies 
<br>
<br>
cd to server directory then run: 
<br>
docker build . -t moviesbackend
<br>
<br>


To run docker compose:
<br>
from the parent folder run:
<br>
docker-compose up
<br>
<br>
<br>
Where im stuck:
<br>
i have both front and backend apps seaparated in caprovers deployment
<br>
<img src="readmeImages/caprover.png" alt="Caprover Apps">
<br>
<br>
The dns is waiting for my deployment
<br>
<img src="readmeImages/deployed.png" alt="Caprover Apps">
<br>
when i try to deploy im told that images cant mount so im stuck on my deployment.
