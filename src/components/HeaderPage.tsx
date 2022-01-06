import styles from "./HeaderPage.module.css";
//import SVG from '../assets/image/logo.svg';

const HeaderPage: React.FC = () => {
  return (
    <header className={styles.container}>
      <img
        className={styles.logoImage}
        src={require("../assets/image/logo.png")}
        alt="logo"
      />
      <div className={styles.mediaContainer}>
        <img src={require("../assets/image/facebook.png")} alt="logo" />
        <img src={require("../assets/image/instagram.png")} alt="logo" />
        <img src={require("../assets/image/twitter.png")} alt="logo" />
        <img src={require("../assets/image/youtube.png")} alt="logo" />
      </div>
    </header>
  );
};

export default HeaderPage;
