# Final Project

This repo is for my Final Project for the _Full Sail University_ Web Development Bachelor of Science degree.

_Note_: The app is named _fs-final-project_ on Heroku.

## Usage

### Allow React and Node.js apps to be deployed together

Update _backend/index.js_ to access built React app using `express.static` for static files.

### Root package.json

Create a new _package.json_ file at the root. Make sure to include root `.gitignore`.

```
npm init -y
```

Install Express.

```
npm install express
```

Set scripts for `npm start` and `npm run build`.

```
    "start": "cd server && node index.js",
    "build": "cd client && npm install && npm run build"
```

Add `engines` property for Node version.

```
    "engines": {
    "node": "18.15.0"
    }
```

### To run both React and Node.js apps (from root directory)

```
npm run build
npm start
```

## Local project URL

http://localhost:4001/

## Deploy on Heroku

### Create new Heroku app

- From dashboard, New > Create New App.
- Deploy > Deployment Method > GitHub
- Enable Automatic Deploys

### View Heroku logs

Heroku Dashboard > More > View Logs.

```
heroku logs --app fs-final-project
```

## Heroku URL

https://fs-final-project-2e686e59bee6.herokuapp.com/
