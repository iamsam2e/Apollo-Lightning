import { GET_PRODUCTS, ProductsQuery } from "../lib/queries";
import ProductSlider from "./components/ProductSlider";
import client from "../lib/apollo-client";

async function getProducts() {
  try {
    const { data } = await client.query<ProductsQuery>({
      query: GET_PRODUCTS,
    });
    return data.products.nodes;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  if (!products.length) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Welcome to Our E-Commerce Store
        </h1>
        <p>
          No products found or there was an error fetching products. Please
          check the console for more details.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Welcome to Our E-Commerce Store
      </h1>
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <ProductSlider products={products} />
    </div>
  );
}
