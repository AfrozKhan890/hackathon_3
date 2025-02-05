// fetchSales.js
import { client } from '@/sanity/lib/client';


export const fetchSales = async () => {
  const query = '*[_type == "sales"]'; // Fetch all sales
  const sales = await client.fetch(query);
  return sales;
};
