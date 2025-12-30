import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "pm3vs1kw", // We will get this in a second
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-12-29",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);