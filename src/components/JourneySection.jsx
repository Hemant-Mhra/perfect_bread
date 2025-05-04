import { sanityFetch } from "@/sanity/lib/live";
import { Heading, Timeline } from "./ui";
import { TIMELINE_QUERY } from "@/sanity/lib/queries";

export async function JourneySection() {
  const newData = await sanityFetch({query: TIMELINE_QUERY, cache: 'no-cache'})
  console.log(newData)
  const {data} = newData;
  return (
    <section id="#journey" className="my-10 flex flex-col gap-6 items-center">
      <Heading className="uppercase" color="accent">
        Perfect Journey
      </Heading>
      <div className="*:text-center text-accent max-w-6xl mx-auto">
        <p className="text-3xl font-light tracking-wider">
          OUR HOT BAKING STORY
        </p>
        <p className="text-4xl font-medium tracking-wide mt-2">
          CRAFTED <span className="text-3xl">BY</span>
          <strong>Mr. H.K BATRA!</strong>
        </p>
        <p className="text-3xl/tight font-light mt-4">
          In the continual process of creativity and innovation,
          <span className="font-semibold">PERFECT BAKE's</span> evolution and
          growth as a nationally recognized bakery brand over the last 20 years
          has been encapsulated through four distinctive generations.
        </p>
        <p className="text-3xl/tight font-light mt-4">
          Humble Beginnings: From the very beginning of our journey in 1993, We
          haven't lost our passion for great food. It's who we are as people, as
          bakers, and as family.
        </p>
      </div>
      <Timeline data={data}/>
    </section>
  );
}
