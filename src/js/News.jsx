import "../css/News.css";
import NewsItem from "./NewsItem";

const News = ({ articles }) => {
	return (
		<>
			<div className="news">
				{articles &&
					articles.map((article) => (
						<NewsItem key={article.id} article={article} />
					))}
			</div>
		</>
	);
};

export default News;
