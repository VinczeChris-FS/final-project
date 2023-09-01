# Final Project

This repo is for my Final Project for the _Full Sail University_ Web Development Bachelor of Science degree.

_Note_: The app is named _fs-final-project_ on Heroku.

## Usage

### Start new Node.js app

Make sure to include root `.gitignore`.

```
npm init -y
```

### Install nodemon package from NPM

'Node Monitor' globally installed

```
npm i -g nodemon
```

### To run

```
cd backend
node index.js
```

OR update _package.json_.

```
     "start": "cd backend && node index.js",
```

```
npm start
```

### To run using nodemon

```
cd backend
nodemon index.js
```

OR update _package.json_.

```
    "dev": "cd backend && nodemon index.js",
```

```
npm run dev

```

## Dependencies

```

npm install express morgan cors

```

## Allow React and Node.js apps to be deployed together

Update _backend/index.js_ to access built React app using `express.static` for static files.

```
app.use(express.static(path.resolve(__dirname, "../frontend/build")));
```

Set scripts for `npm run build`.

```
    "build": "cd frontend && npm install && npm run build"

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

### Local project URL

- http://localhost:3001/
- http://localhost:3001/api/books

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

### Heroku URL

https://fs-final-project-2e686e59bee6.herokuapp.com/

## Pro Tip

In VS Code, you can open any file by its name when you type `CMD+P` (Quick Open).
