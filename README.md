# Around the U.S. Front End + Back End

## Web Development course at Yandex Practicum
I am participating in an excellent web development course at [Yandex Practicum](https://practicum.yandex.com/) right now.
You get a very good introduction into many web development topics on their learning platform. After mastering the
according lessons, you have to proof your newly acquired skills in your own projects.

## Getting into the backend
This is a long term project we are working on. First we implemented it in plain HTML, CSS and Javascript. 
Then we migrated it to React. This is the backend part of the application. 

### Functionality

This projects implements various HTTP endpoints:
* User
    * create user
    * get all users
    * get user by id
    * update user attributes
    * update avatar link
    * create card
    * get all cards
    * delete card
    * like card
    * dislike card

### Technologies

In detail the following technologies and methods have been used:
* Javascript
    * Node.js
    * Express.js
* Database
    * MongoDB with mongoose

## Directories

`/models` — database schemas and models

`/controllers` — communication with the database

`/routes` — routing HTTP requests.

All other directories are optional and may be created by the developer if necessary. 

## Running the Project

`npm run start` — to launch the server.

`npm run dev` — to launch the server with the hot reload feature.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
