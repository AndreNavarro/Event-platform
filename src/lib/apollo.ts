import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u78n5d0kqg01uhegi14urj/master',
    cache: new InMemoryCache()
})