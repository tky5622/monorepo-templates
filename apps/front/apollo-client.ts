// ./apollo-client.js

import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.lens.dev',
  cache: new InMemoryCache(),
  //   link: new HttpLink(
  //     {
  //       onError: ({ graphQLErrors }) => console.log('graphQLErrors', graphQLErrors)
  //     }
  // )
})
export default client
