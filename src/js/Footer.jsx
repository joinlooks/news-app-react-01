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
				<p>Made with ❤️ by -</p>
				<p className="author-names">
					<a
						href="https://github.com/joinlooks"
						target="_blank"
						rel="noreferrer"
					>
						Lakshya Sharma
					</a>
					<a
						href="https://github.com/mayankkumrawat"
						target="_blank"
						rel="noreferrer"
					>
						Mayank Kumrawat
					</a>
					<a
						href="https://github.com/dhruvsinghal028"
						target="_blank"
						rel="noreferrer"
					>
						Dhruv Singhal
					</a>
				</p>
			</div>
		</>
	);
};

export default Footer;
