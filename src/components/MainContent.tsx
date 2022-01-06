import styles from "./MainContent.module.css";

const MainContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3>HAYAO MIYAZAKI</h3>
        <h1>
          <p>A VIAGEM </p>
          <p>DE CHICHIRO</p>
        </h1>
        <h4>
          <p>Chichiro chega a um mundo mágico dominado por</p>
          <p>uma bruxa. Aqueles que a desobedecem são</p>
          <p>transformados em animais.</p>
        </h4>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonSkew}>
            <p className={styles.spanSkew}>Assistir agora</p>
          </button>
          <button className={styles.buttonSkewOutline}>
            <p className={styles.spanSkew}>Assista o trailer</p>
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageContainer}
          src={require("../assets/image/ilustracao.png")}
          alt="ilustracao"
        />
      </div>
    </div>
  );
};

export default MainContent;
