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
- http://localhost:8000/

## References

- [Create React App](https://create-react-app.dev/docs/getting-started/)
- [JSON Server](https://www.npmjs.com/package/json-server)
