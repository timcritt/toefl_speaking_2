import styles from "./Header.module.css";
import QuestionToggleSwitch from "@/components/QuestionToggleSwitch/QuestionToggleSwitch";

const Header = () => {
	return (
		<header className={styles.header}>
			<QuestionToggleSwitch />
			<p className={styles.title}>TOEFL Speaking</p>
		</header>
	);
};

export default Header;
