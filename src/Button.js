import PropTypes from "prop-types";
// turn css code to javascript object
import styles from "./Button.module.css"

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

function Button({text}) {
    return <button className={styles.btn}>{text}</button>;
}

export default Button; 