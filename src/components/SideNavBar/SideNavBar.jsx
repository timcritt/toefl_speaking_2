import { useEffect, useState } from "react";
import styles from "./SideNavBar.module.css";

const SideNavBar = ({ navTitle, tests, loadTest, currentTest }) => {
	const [isPinned, setIsPinned] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	// 🔁 Load pin state on first render
	useEffect(() => {
		const stored = localStorage.getItem("sidebarPinned");
		if (stored === "true") {
			setIsPinned(true);
		}
	}, []);

	// 💾 Save pin state when it changes
	useEffect(() => {
		localStorage.setItem("sidebarPinned", isPinned.toString());
	}, [isPinned]);

	const shouldExpand = isPinned || isHovered;

	return (
		<nav
			className={`${styles.expanded} ${
				shouldExpand ? styles.expandedVisible : ""
			}`}
			onMouseEnter={() => !isPinned && setIsHovered(true)}
			onMouseLeave={() => !isPinned && setIsHovered(false)}
		>
			<div
				className={`${styles.pin_dot} ${
					isPinned ? styles.pinned : styles.unpinned
				}`}
				onClick={() => setIsPinned(!isPinned)}
				title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
			/>

			<ul className={styles.test_list}>
				{Object.entries(tests).map(([key, value], index) => (
					<li
						key={key}
						className={`${styles.list_item} ${
							value.announcement.title === currentTest?.announcement.title
								? styles.active
								: ""
						}`}
						style={{ animationDelay: `${index * 0.05}s` }} // Stagger delay
						onClick={() => loadTest(value)}
					>
						{value.announcement.title}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SideNavBar;
