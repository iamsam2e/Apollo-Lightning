import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 4) {
      nodes {
        id
        name
      }
    }
  }
`;

export interface Product {
  id: string;
  name: string;
}

export interface ProductsQuery {
  products: {
    nodes: Product[];
  };
}
