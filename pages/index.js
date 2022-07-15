import styles from "../styles/Home.module.css";

export default function Home() {
  const handleNavigatorShare = async () => {
    try {
      await navigator.share({
        title: "MDN",
        text: "Aprenda desenvolvimento web no MDN!",
        url: "/campanha?type=asdijasidjasd&uuid=312321-231231-21312132",
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleNavigatorShare}>Clique em mim</button>
    </div>
  );
}
