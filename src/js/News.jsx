import "../css/News.css";
import NewsItem from "./NewsItem";

const News = () => {
	return (
		<>
			<div className="news">
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</div>
		</>
	);
};

export default News;
