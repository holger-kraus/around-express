# Around the U.S. Front End + Back End

## Web Development course at Yandex Practicum
I am participating in an excellent web development course at [Yandex Practicum](https://practicum.yandex.com/) right now.
You get a very good introduction into many web development topics on their learning platform. After mastering the
according lessons, you have to proof your newly acquired skills in your own projects.

## Getting into the backend
This is a long term project we are working on. First we implemented it in plain HTML, CSS and Javascript. 
Then we migrated it to React. This repo represents the version where we implement our first own API in the backend. Therefore
the React files are just the ones from the build copied over here.

### Functionality

The website is a profile page. It contains a set of photographies that can be liked by users. The page also contains
an edit functionality where the user can change the name and the about me information. The edit form pops up in a modal
dialogue. Furthermore, the user can add further images by providing their URIs. He also can remove images again from the
photo grid. If he clicks on one of the photo cards, the photo enlarges and is displayed as the main element on the
screen.

### Technologies

In detail the following technologies and methods have been used:
* Semantic HTML like
    * sections
    * header
    * footer
    * main area
    * headlines
    * paragraphs
    * lists
    * links
* BEM Methodology (Block, Element, Modifier)
    * How to organize CSS сlasses
    * How to organize CSS files
* CSS techniques like
    * box model
    * flexbox
    * positioning
    * media queries
* Javascript
    * React components
    * React hooks
    * Node.js
    * Express.js

## Directories

`/public` — static files from the build of the React front-end app.

`/data` — JSON files to temporarily emulate database integration.

`/routes` — routing files.

All other directories are optional and may be created by the developer if necessary. 

## Running the Project

`npm run start` — to launch the server.

`npm run dev` — to launch the server with the hot reload feature.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
