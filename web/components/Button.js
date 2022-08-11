import styles from "../styles/components/Button.module.scss";

function Button(props) {
  return (
    <a onClick={props.onClick} className={styles[props.myClassName]}>
      {props.text}
    </a>
  );
}

export default Button;
