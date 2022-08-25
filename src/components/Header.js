import logo from "../images/troll-face.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" className={styles.header__img} />
      <h2 className={styles.header__title}>Meme Generator</h2>
      {/* <h4 className={styles.header__project}></h4> */}
    </header>
  );
};

export default Header;
