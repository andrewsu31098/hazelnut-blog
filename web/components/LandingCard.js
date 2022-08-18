import MailchimpSubscribe from "react-mailchimp-subscribe";

import landingStyles from "../styles/components/LandingCard.module.scss";
import btnStyles from "../styles/components/Button.module.scss";

function LandingCard(props) {
  function alertOnClick(e) {
    alert("Worked");
  }

  return (
    <section className={landingStyles.LandingCard}>
      <div className={landingStyles.LandingInnerBox}>
        <h1>Welcome to my website.</h1>
        <p>Join my newsletter to see coding tutorials, reviews, and more :)</p>
        <div className={landingStyles.LandingLinks}>
          <a href="#getStarted" className={btnStyles["btn-primary"]}>
            Get Started
          </a>
          <a href="/newsletter" className={btnStyles["btn-secondary"]}>
            Join Newsletter
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingCard;
