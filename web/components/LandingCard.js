import landingStyles from "../styles/components/LandingCard.module.scss";
import Button from "./Button.js";
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
          <button className={btnStyles["btn-primary"]}>Get Started</button>
          <button className={btnStyles["btn-secondary"]}>
            Join Newsletter
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingCard;
