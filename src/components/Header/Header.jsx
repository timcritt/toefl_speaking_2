import styles from "./Header.module.css";
import QuestionToggleSwitch from "@/components/QuestionToggleSwitch/QuestionToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuthenticated } from "@/store/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isAuthenticated = useSelector(selectIsAuthenticated);

	const handleLogout = () => {
		dispatch(logout());
		navigate("/login"); // Optional: redirect after logout
	};

	return (
		<header className={styles.header}>
			{isAuthenticated && <QuestionToggleSwitch />}
			<p className={styles.title}>TOEFL Speaking</p>
			{isAuthenticated && (
				<button className={styles.logout} onClick={handleLogout}>
					Logout
				</button>
			)}
		</header>
	);
};

export default Header;
