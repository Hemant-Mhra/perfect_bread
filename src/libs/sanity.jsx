import { createClient } from "next-sanity";

//... 

const client = createClient({
  projectId: "o0riqxg0",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});