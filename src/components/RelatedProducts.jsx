import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext"; // Importing the ShopContext to access global state like products
import { Title } from "../components/Title"; // Importing the Title component to render section titles
import { ProductItem } from "./ProductItem"; // Importing the ProductItem component to display each product

// Component to display related products based on category and subCategory
export const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext); // Accessing products from the ShopContext
  const [related, setRelated] = useState([]); // State to store related products

  useEffect(() => {
    // Filtering and setting related products when products, category, or subCategory change
    if (products.length > 0) {
      let productsCopy = [...products]; // Creating a copy of products
      productsCopy = productsCopy.filter((item) => item.category === category); // Filtering by category
      productsCopy = productsCopy.filter((item) => item.subCategory === subCategory); // Filtering by subCategory

      setRelated(productsCopy.slice(0, 5)); // Selecting up to 5 products for related items
    }
  }, [products, category, subCategory]); // Dependencies for the useEffect hook

  return (
    <div className="my-24">
      {/* Title section */}
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} /> {/* Using the Title component */}
      </div>

      {/* Grid to display related products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          // Rendering each related product using the ProductItem component
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};
