import React from "react";
import styles from "./Unauthorized.module.scss";
import { useNavigate } from "react-router-dom";

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.errorHeading}>401 Error</div>
      <div className={styles.errorName}>No Authorization Found</div>
      <div className={styles.errorSubHeading}>
        Access denied due to invalid credentials.
      </div>
      <button
        className={styles.buttonContainer}
        disabled={false}
        onClick={() => navigate("/")}
      >
        Try Again
      </button>
    </div>
  );
};

export default Unauthorized;
