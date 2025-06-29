import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth/authSlice";
import { setLogoutHandler } from "@/api/httpClient";

// Sets up an interceptor to handle 401 responses globally
function AppWrapper({ children }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		// Inject logout handler
		setLogoutHandler(() => {
			dispatch(logout());
			navigate("/login");
		});
	}, [dispatch, navigate]);

	return children;
}

export default AppWrapper;
