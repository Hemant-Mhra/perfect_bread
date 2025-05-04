import { createClient } from "contentful";

export const createContentClient = () => {
    console.log({accessToke:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN})
  return createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
};
const client = createContentClient();

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getData = async (dataType) => {
  const results = await getEntriesByType(dataType);
  // const blogPosts = results.map((data) => data.fields);
  return results;
};
