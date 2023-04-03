import { useContext, useEffect, useState } from "react";
import "../css/App.css";
import Navbar from "./Navbar";
import News from "./News";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../contexts/ThemeContext";

function App() {
	const [sidebar, setSidebar] = useState(false);
	const [category, setCategory] = useState("all");
	const [articles, setArticles] = useState([]);

	const { theme } = useContext(ThemeContext);

	const toggleSidebar = () => {
		setSidebar(!sidebar);
	};

	const getNews = async () => {
		const URL = `https://inshorts.deta.dev/news?category=${category}`;
		const response = await fetch(URL);
		const data = await response.json();
		setArticles(data.data);
	};

	useEffect(() => {
		getNews();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	return (
		<>
			<div className="app">
				<div
					className={`${
						!sidebar
							? "display-none"
							: `${theme === "dark" ? "dark-theme" : "light-theme"}`
					}`}
				>
					<Sidebar
						sidebar={sidebar}
						toggleSidebar={toggleSidebar}
						setCategory={setCategory}
					/>
				</div>

				<div
					className={`${
						sidebar
							? "display-none"
							: `${theme === "dark" ? "dark-theme" : "light-theme"}`
					}`}
				>
					<Navbar
						sidebar={sidebar}
						toggleSidebar={toggleSidebar}
						category={category}
					/>

					<News articles={articles} />
				</div>
			</div>
		</>
	);
}

export default App;
