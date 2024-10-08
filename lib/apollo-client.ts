import { ApolloClient, InMemoryCache } from "@apollo/client";

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  throw new Error("NEXT_PUBLIC_WORDPRESS_API_URL is not defined");
}

const client = new ApolloClient({
  uri: WORDPRESS_API_URL,
  cache: new InMemoryCache(),
});

export default client;
