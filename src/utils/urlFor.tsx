import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url'

// Create the builder using Sanity's client config
const builder = imageUrlBuilder(client);

// Function to get the image URL
export const urlFor = (source: any) => {
  return builder.image(source).auto('format').fit('max'); // Optional image options
}
