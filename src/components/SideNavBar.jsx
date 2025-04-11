import styles from "./SideNavBar.module.css";

const SideBarNav = ({ tests, loadTest, currentTest }) => {
	return (
		<nav>
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

export default SideBarNav;
