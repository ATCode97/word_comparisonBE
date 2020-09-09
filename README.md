# NC News Backend Express Server

A RESTful server built using knex, express. Gives access to a database containing all the words that have been compared with each other

Hosted on heroku at https://wordcomparisonbe.herokuapp.com/api

## Setup

IThese instructions will give you a copy of the project running on your local machine for development and testing purposes

Clone the repo and install the required dependencies:

```
$ git clone https://github.com/ATCode97/word_comparisonBE
$ cd into the repo and cd into fe-word-comparison
$ npm install
```

## Available Endpoints for GET All

### Api - /api

responds with a json representation of all the available endpoints of the api

### Words - /api/words

responds with an array of objects that contains a list of primary words and secondary words that have been posted on the frontend

- `sort_by`, which sorts the words by compared_at
- `order`, which can be set to `asc` or `desc` for ascending or descending (defaults to descending)

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

In order to test that each endpoint works, mocha and chai is need to run the app.spec.js test file

```
npm install
npm test
```

# Re-seed DB

To re-seed the database, you can run

```
npm seed:prod
```
