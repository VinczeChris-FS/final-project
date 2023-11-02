# Final Project

This repo is for my Final Project for the _Full Sail University_ Web Development Bachelor of Science degree.

_Note_: The app is named _fs-final-project_ on Heroku.

## Usage

### Create a new branch

```
git branch api
```

### Switch Branches

Merge with `main` branch on `GitHub` with Pull Request.

```
git switch api
```

### Start new Node.js app

Make sure to include root `.gitignore` for `node_modules`, `.env`, etc.

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

npm install express morgan cors mongoose dotenv

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

### Local project URLs

- http://localhost:3001/
- http://localhost:3001/api/books

## ESlint, Prettier, & Airbnb JavaScript Style Guide

### Dev dependencies

```
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

```
npx install-peerdeps --dev eslint-config-airbnb
```

### Create ESLint config file

```
npm init @eslint/config
```

### Constomize ESLint / Airbnb Style Guide rules

In `.eslintrc.js` document.

```
  rules: {
    quotes: "off",
    "no-unused-vars": "warn",
    "no-console": "off",
  },
```

## Deploy on Heroku

### Create new Heroku app

- From dashboard, New > Create New App.
- Deploy > Deployment Method > GitHub
- Enable Automatic Deploys

### View Heroku logs

Heroku Dashboard > More > View Logs.

````

heroku logs --app fs-final-project

```

### Heroku Config Vars

Update environment variables from `.env` files on Heroku:

`Settings > Config Vars > Reveal Config Vars`

- DATABASE_URL
- REACT_APP_API_URL

_Note_ In MongoDB Atlas (cloud MongoDB database), make sure can access database from any IP address:

`Network Access > Edit`

### Heroku URLs

- https://fs-final-project-2e686e59bee6.herokuapp.com/
- https://fs-final-project-2e686e59bee6.herokuapp.com/api/books

## Pro Tip

In VS Code, you can open any file by its name when you type `CMD+P` (Quick Open).
```
````
