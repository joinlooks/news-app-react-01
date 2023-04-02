import "../css/NewsItem.css";

const NewsItem = ({ article }) => {
	return (
		<>
			<a
				className="news-item"
				href={article.readMoreUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="left">
					<img src={article.imageUrl} alt="NewsImage" />
				</div>
				<div className="right">
					<h2 className="title">{article.title}</h2>
					<p className="extras">
						<span className="author">{article.author}</span>
						<span className="date-time">
							{article.time} {article.date}
						</span>
					</p>
					<p className="content">{article.content}</p>
				</div>
			</a>
		</>
	);
};

export default NewsItem;
