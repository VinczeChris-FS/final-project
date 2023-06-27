# Frontend (React app)

## Usage

### Crete a new React app

Using Create React App in the current directory.

```
cd frontend
npx create-react-app ./
```

### To run:

```
cd frontend
npm start
```

## Dependency

```
cd frontend
npm install axios
```

## Dev Dependency

```
cd frontend
npm install json-server -D
```

Update _package.json_.

```
    "server": "json-server --watch db.json --port 8000"
```

### To run fake REST API:

_Note:_ Gets data from `db.json`.

```
cd frontend
npm run server
```

## App URLs

- http://localhost:3000/
- http://localhost:8000/books

## References

- [Create React App](https://create-react-app.dev/docs/getting-started/)
- [JSON Server](https://www.npmjs.com/package/json-server)
- [How To Use Axios With React: The Definitive Guide 2021](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)
