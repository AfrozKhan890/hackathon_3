"use client";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { dataset, projectId } from '../env'; // Ensure these values are set in your env file
import { client } from './client'; // Ensure client is properly set up

// Create the image URL builder
const builder = imageUrlBuilder(client);

// Function to get the image URL
export const urlFor = (source: SanityImageSource) => {
  // Add transformation options here if required
  return builder.image(source).auto('format').fit('max'); // Ensures optimal image formatting
};
