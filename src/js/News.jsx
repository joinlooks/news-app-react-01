import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../css/News.css";
import NewsItem from "./NewsItem";

const News = ({ articles }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<div
				className={`news ${theme === "dark" ? "dark-theme" : "light-theme"}`}
			>
				{articles &&
					articles.map((article) => (
						<NewsItem key={article.id} article={article} />
					))}
			</div>
		</>
	);
};

export default News;
