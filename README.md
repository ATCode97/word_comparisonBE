# NC News Backend Express Server

A RESTful server built using knex, express. Gives access to a database containing all the words that has been compared with each other

Hosted on heroku at https://wordcomparisonbe.herokuapp.com/api

## Setup

In order to use this repo you first need to clone this repo off github and cd in your desired

```
first, cd in to the directory you want this repo in and git clone <your forked repo's-url>
second, cd in to the file
once you in the repo you need to run npm install to get all the dependencies
```

## Available Endpoints for GET All

### Api - /api

responds with a json representation of all the available endpoints of the api

### Words - /api/words

responds with an array of objects that contains and a list of primary words and secondary words that have been posted on the frontend

https://wordcomparisonbe.herokuapp.com/api/words

### POST words - /api/words

Responds with the post word object, on a key of wordsObj.

the request body should be - an object with the following properties:

- `primary_words`
- `secondary_words`

e.g request body: {
"primary_words": "tar",
"secondary_words": "rat"
}

https://wordcomparisonbe.herokuapp.com/api/words

# TESTING

In oder to test that each endpoint works, mocha and chai is need to run the app.spec.js test file

```
npm install
npm test
```
