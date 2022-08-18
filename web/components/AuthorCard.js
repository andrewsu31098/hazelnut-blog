import styles from "../styles/components/AuthorCard.module.scss";

//AuthorCard requires you pass in {name, authorImage, and urlFor function}
//Just a consequence of the architecture of React, NextJS, and Sanity.

function AuthorCard(props) {
  return (
    <div className={styles.AuthorCard}>
      {props.authorImage && (
        <div>
          <img
            src={props.urlFor(props.authorImage).width(60).url()}
            alt={`${props.name}'s picture`}
          />
        </div>
      )}
      <div className={styles.AuthorInfo}>
        <p>{props.name}</p>

        <span>
          Fullstack Web Development. Coding Hobbyist. Ultimate One Piece fan.
        </span>
      </div>
    </div>
  );
}

export default AuthorCard;
