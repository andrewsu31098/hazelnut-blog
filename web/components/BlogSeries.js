import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import Link from "next/link";

import styles from "../styles/components/BlogSeries.module.scss";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function BlogSeries(props) {
  return (
    <div id="getStarted" className={styles.Container}>
      <div className={styles.BlogSeries}>
        {props.posts.length > 0 &&
          props.posts.map(
            (
              {
                _id,
                title = "",
                hook = "",
                slug = "",
                publishedAt = "",
                coverImage,
                mainImage,
              },
              index
            ) => {
              let date = new Date(publishedAt);

              const usedImage = coverImage ? coverImage : mainImage;
              return (
                <div className={styles.BlogCard} key={index}>
                  <img src={urlFor(usedImage)} />
                  <div>
                    <h3>
                      <Link href={`/blog/${slug.current}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>

                    <h4>{hook}</h4>

                    <span className="date">
                      Published on:{" "}
                      {date.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}

export default BlogSeries;
