// fetchShipments.js
import { client } from '@/sanity/lib/client';

export const fetchShipments = async () => {
  const query = '*[_type == "shipment"]'; // Fetch all shipments
  const shipments = await client.fetch(query);
  return shipments;
};
