import groq from "groq";
import client from "../client";

import LandingCard from "../components/LandingCard.js";
import BlogSeries from "../components/BlogSeries.js";

function Index({ posts }) {
  return (
    <>
      <LandingCard />
      <BlogSeries posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
