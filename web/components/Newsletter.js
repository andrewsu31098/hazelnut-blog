import styles from "../styles/components/Newsletter.module.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";

function Newsletter(props) {
  return (
    <div className={styles.NewsletterContainer}>
      <div className={styles.Newsletter}>
        <div className={styles.NewsletterHeader}>
          <img src="/mini-hazelnut.png" />
          <h4>MY NEWSLETTER</h4>
        </div>

        <p>
          Join my newsletter for coding tutorials, productivity book-reviews,
          and all future blogs!
        </p>
        <div>
          <MailchimpSubscribe url="https://gmail.us13.list-manage.com/subscribe/post?u=2682f729984b2da34b48cfc20&amp;id=42443def2e&amp;f_id=00aad7e2f0" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
