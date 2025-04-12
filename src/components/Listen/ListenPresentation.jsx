import styles from "./Listen.module.css";

const Listen = ({ audio, image }) => {
	return (
		<article className={styles.announcement}>
			<img src={image} className={styles.image} />
			<audio controls>
				<source src={audio} type="audio/wav" />
			</audio>
		</article>
	);
};

export default Listen;
