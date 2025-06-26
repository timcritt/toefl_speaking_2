import { NavLink } from "react-router-dom";
import styles from "./QuestionToggleSwitch.module.css";

const QuestionToggleSwitch = () => {
	return (
		<nav className={styles.container}>
			<span className={styles.toggle_group_label}>Task:</span>
			<div className={styles.toggle_group}>
				<NavLink
					to="/part_1"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.inactiveLink
					}
				>
					1
				</NavLink>
				<NavLink
					to="/part_2"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.inactiveLink
					}
				>
					2
				</NavLink>
				<NavLink
					to="/part_3"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.inactiveLink
					}
				>
					3
				</NavLink>
				<NavLink
					to="/part_4"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.inactiveLink
					}
				>
					4
				</NavLink>
			</div>
		</nav>
	);
};

export default QuestionToggleSwitch;
