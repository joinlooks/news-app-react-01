import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../css/NewsItem.css";

const NewsItem = ({ article }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<a
				className={`news-item ${
					theme === "dark" ? "dark-theme" : "light-theme"
				}`}
				href={article.readMoreUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="left">
					<img src={article.imageUrl} alt="NewsImage" />
				</div>
				<div className="right">
					<h2
						className={`title ${
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}`}
					>
						{article.title}
					</h2>
					<p className="extras">
						<span
							className={`author ${
								theme === "dark"
									? "dark-theme-text-primary"
									: "light-theme-text-primary"
							}`}
						>
							{article.author}
						</span>
						<span
							className={`date-time ${
								theme === "dark"
									? "dark-theme-text-tertiary"
									: "light-theme-text-tertiary"
							}`}
						>
							{article.time} {article.date}
						</span>
					</p>
					<p
						className={`content ${
							theme === "dark"
								? "dark-theme-text-secondary"
								: "light-theme-text-secondary"
						}`}
					>
						{article.content}
					</p>
				</div>
			</a>
		</>
	);
};

export default NewsItem;
