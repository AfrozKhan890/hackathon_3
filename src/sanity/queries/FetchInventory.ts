// fetchInventory.js
import { client } from '@/sanity/lib/client';

export const fetchInventory = async () => {
  const query = '*[_type == "inventory"]'; // Fetch all inventory
  const inventory = await client.fetch(query);
  return inventory;
};
