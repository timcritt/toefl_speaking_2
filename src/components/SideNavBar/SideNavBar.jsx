import styles from "./SideNavBar.module.css";

const SideNavBar = ({ tests, loadTest, currentTest }) => {
	return (
		<nav className={styles.expanded}>
			<ul className={styles.test_list}>
				{Object.entries(tests).map(([key, value]) => (
					<li
						onClick={() => loadTest(value)}
						key={key}
						className={`${
							value.announcement.title === currentTest?.announcement.title
								? styles.active_test_link
								: ""
						}`}
					>
						{value.announcement.title}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SideNavBar;
