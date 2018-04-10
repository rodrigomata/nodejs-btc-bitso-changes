![Build Status](https://travis-ci.org/rodrigomata/nodejs-btc-bitso-changes.svg?branch=master)

# NodeJS BITSO Bitcoin changes
NodeJS application that shows Bitcoin's behaviour through the day

## Requirements

- [NodeJS](http://nodejs.org/) 8.x
- MongoDB

### Commit Style

Please consider the following git styles for commits:

http://udacity.github.io/git-styleguide/

### Installation

Clone the repository and install the dependencies:

```sh
$ git clone git@github.com:rodrigomata/nodejs-btc-bitso-changes.git
$ cd nodejs-btc-bitso-changes
$ npm i
```

Export your MongoDB URI:

```sh
$ export MONGO_URI='<URL>'
```

### Running Locally

```sh
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

### Run in Production

Navigate to [HerokuApp](https://guarded-retreat-91089.herokuapp.com/)

### Testing

```sh
$ npm test
```
PS: Integration tests have been disabled
TODO: Add Unit tests

## License

MIT
