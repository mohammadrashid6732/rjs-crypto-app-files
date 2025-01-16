import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Crypto App</h1>
      <div>
        <p>
          <a href="https://google.com">SaminCoin </a>|
          <span> React.js Course</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
