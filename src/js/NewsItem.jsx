import "../css/NewsItem.css";

const NewsItem = () => {
	return (
		<>
			<div className="news-item">
				<div className="left">
					<img
						src="https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/03_mar/28_tue/img_1680015247775_711.jpg?"
						alt=""
					/>
				</div>
				<div className="right">
					<h2 className="title">
						5 planets visible in the sky tonight in rare celestial event
					</h2>
					<p className="extras">
						<span className="author">Daisy Mowke</span>
						<span className="date-time">08:53 pm 28 Mar 2023,Tuesday</span>
					</p>
					<p className="content">
						Five planets, Mercury, Venus, Mars, Jupiter and Uranus, along with
						the Moon will be visible in almost an arc in the sky on Tuesday
						night. This isn't a true planetary alignment where they'll appear in
						a straight line. Jupiter will appear brighter than Mercury and Venus
						would be the brightest among the whole group. Uranus will appear
						faintly near Venus.
					</p>
				</div>
			</div>
		</>
	);
};

export default NewsItem;
