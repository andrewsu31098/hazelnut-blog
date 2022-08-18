// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";

import styles from "../../styles/pages/blog/slug.module.scss";
import AuthorCard from "../../components/AuthorCard.js";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};

const Blog = ({ post }) => {
  //Need to add this for next export.
  //Post is a dynamic variable that can't be handled.
  if (!post) return null;
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    mainImage,
    imageCredit,
    body = [],
  } = post;
  return (
    <article className={styles.blogBody}>
      <AuthorCard authorImage={authorImage} name={name} urlFor={urlFor} />
      <h1>{title}</h1>

      {categories && (
        <div>
          <span>Series » </span>
          {categories.map((category) => (
            <b>
              <span key={category}>{category}</span>
            </b>
          ))}
        </div>
      )}

      {mainImage && <img src={urlFor(mainImage).url()} />}
      <span>
        <PortableText value={imageCredit} components={ptComponents} />
      </span>
      <PortableText value={body} components={ptComponents} />
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage,
  imageCredit,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Blog;
