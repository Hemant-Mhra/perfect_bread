import { defineQuery } from "next-sanity";

export const POST_QUERY = defineQuery(`*[_type == "post"]{_id, title, "slug":slug.current, body, "imageUrl": mainImage.asset->url}`);

export const TIMELINE_QUERY = defineQuery(`*[_type == "timeline"]{year, title, description, "imageUrl": mainImage.asset->url, description}`)