import styles from "./SideNavBar.module.css";
import SideNavBarWrapper from "./SideNavBarWrapper";

const SideNavBar = ({ tests, loadTest, currentTest }) => {
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
						onClick={() => loadTest(value)}
					>
						{value.title}
					</li>
				))}
			</ul>
		</SideNavBarWrapper>
	);
};

export default SideNavBar;
