import styles from "../styles/Form.module.css";
import { useState } from "react";

export default function IndexPage() {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const isValid = isValidEmail(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(`Email ${email} submitted!`);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        autoComplete="on"
        placeholder="Email address"
        className={styles.inputEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={styles.btnSubmit} type="submit">
        <img src="icon-arrow.svg" alt="arrow icon" />
      </button>

      <span className={styles.errorMessage}>Please provide a valid email</span>
    </form>
  );
}
