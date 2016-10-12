# GraphQL sample

This project was built for presentation showing basic usage of GraphQL with express.

## Running the project

1. Install dependencies with `npm i`
2. Start sever with `npm start` or `npm run dev` (when you want to enable autorestarts)
3. Open page with GraphiQL editor at `http://localhost:3000/graphql`


Then you can run a sample query:
```
query GetEvents {
  event(limit:2) {
    id
    name
    description
  }
}
```
