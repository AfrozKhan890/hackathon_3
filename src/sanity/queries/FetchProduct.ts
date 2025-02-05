import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { Product } from "@/utils/types";

export const getAllProducts = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == "product"]{
    _id,
  name,
  description,
  price,
  tags,
  sizes,
  "imageUrl": image.asset->url,
  rating,
  discountpercentage,
  category,
  isFeaturedProduct,
  stockLevel,
}
`);
  try {
    const products = await sanityFetch({ query: ALL_PRODUCTS_QUERY });

    return products.data || [];
  } catch (error) {
    console.error("error fetching all products " + error);
    return [];
  }
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const PRODUCT_QUERY_BY_ID =
    defineQuery(`*[_type == "product" && _id == $id][0]{
      _id,
  name,
  description,
  price,
  tags,
  sizes,
  "imageUrl": image.asset->url,
  rating,
  discountpercentage,
  category,
  isFeaturedProduct,
  stockLevel,
  }`);
  try {
    const product = await sanityFetch({
      query: PRODUCT_QUERY_BY_ID,
      params: { id },
    });
    return (product.data as Product) || null;
  } catch (error) {
    console.error("Error fetching product by ID: " + error);
    return null;
  }
};

export const getFeaturedProduct = async () => {
  const FEATURED_PRODUCT_QUERYa =
    defineQuery(`*[_type == "product" && "featured" in tags]{
    _id,
  name,
  description,
  price,
  tags,
  sizes,
  "imageUrl": image.asset->url,
  rating,
  discountpercentage,
  category,
  isFeaturedProduct,
  stockLevel,
  }`);
  try {
    const product = await sanityFetch({ query: FEATURED_PRODUCT_QUERYa });
    return product.data || null;
  } catch (error) {
    console.error("Error fetching product by ID: " + error);
    return null;
  }
};
