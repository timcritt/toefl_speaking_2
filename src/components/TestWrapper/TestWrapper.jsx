import styles from "./TestWrapper.module.css";

//Higher order component that wraps the test content with a specific style
const TestWrapper = ({ children }) => {
	return (
		<article className={styles.test_wrapper_container}>{children}</article>
	);
};

export default TestWrapper;
