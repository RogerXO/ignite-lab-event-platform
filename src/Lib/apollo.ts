import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5xy4b0pfd01xi5fsw9nh2/master',
    cache: new InMemoryCache()
})