import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../css/Footer.css";

const Footer = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<div
				className={`footer ${
					theme === "dark" ? "footer-dark" : "footer-light"
				}`}
			>
				<p>Made with ❤️ by Lakshya Sharma</p>
				<a href="https://github.com/joinlooks" target="_blank" rel="noreferrer">
					<img
						src={
							theme === "dark"
								? "./images/github-dark-theme.png"
								: "./images/github-light-theme.png"
						}
						alt="Github"
					/>
				</a>
			</div>
		</>
	);
};

export default Footer;
