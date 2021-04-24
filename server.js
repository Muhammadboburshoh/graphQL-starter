const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require("graphql")

const app = express()

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      massage: {
        type: GraphQLString,
        resolve: () => 'hello world'
      }
    })
  })
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.listen(5000, () => console.log("localhost: 5000"))