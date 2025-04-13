import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<span className={styles.toggle_group_label}>Question:</span>
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
			<p className={styles.title}>TOEFL Speaking</p>
		</header>
	);
};

export default Header;
