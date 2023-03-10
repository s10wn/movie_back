import { createSchema, createYoga } from "graphql-yoga";
import { readFileSync } from 'node:fs'
import { createServer } from "node:http";
import resolvers from "./graphql/resolver";


const typeDefs = readFileSync('./graphql/schema.graphql', 'utf8')

const schema = createSchema({ typeDefs, resolvers })
const yoga = createYoga({ schema })
const server = createServer(yoga)
 
server.listen(4000, () => {
  console.log('GraphQL Server is listening on http://localhost:4000/graphql');
})