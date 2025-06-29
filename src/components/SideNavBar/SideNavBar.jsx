import styles from "./SideNavBar.module.css";
import SideNavBarWrapper from "./SideNavBarWrapper";

const SideNavBar = ({ tests, loadTest, currentTest }) => {
	const handleTestClick = (testId) => {
		if (testId) {
			console.log("Loading test:", testId);
			loadTest(testId);
		} else {
			console.warn("Tried to load an invalid test:", testId);
		}
	};

	return (
		<SideNavBarWrapper>
			<ul className={styles.test_list}>
				{Object.entries(tests).map(([key, value], index) => (
					<li
						key={key}
						className={`${styles.list_item} ${
							value.title === currentTest?.title ? styles.active : ""
						}`}
						style={{ animationDelay: `${index * 0.05}s` }} // Stagger delay
						onClick={() => handleTestClick(value.id)}
					>
						{value.title && (
							<span className={styles.test_title}>{value.title}</span>
						)}
						{value.readingTitle && (
							<span className={styles.reading_title}>{value.readingTitle}</span>
						)}
					</li>
				))}
			</ul>
		</SideNavBarWrapper>
	);
};

export default SideNavBar;
