import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles.header}>
			<p>TOEFL Speaking</p>
			<nav>
				<ul>
					<li>Part 1</li>
					<li>
						<NavLink to="/part_2">Part 2</NavLink>
					</li>
					<li>
						<NavLink to="/part_3">Part 3</NavLink>
					</li>
					<li>Part 4</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
