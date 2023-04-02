import { useState } from "react";
import "../css/App.css";
import Navbar from "./Navbar";
import News from "./News";
import Sidebar from "./Sidebar";

function App() {
	const [sidebar, setSidebar] = useState(false);
	const [category, setCategory] = useState("all");

	const toggleSidebar = () => {
		setSidebar(!sidebar);
	};

	const getNews = () => {
		const URL = `https://inshorts.deta.dev/news?category=${category}`;
	};

	return (
		<>
			<div className="app">
				<div className={`${!sidebar ? "display-none" : ""}`}>
					<Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
				</div>

				<div className={`${sidebar ? "display-none" : ""}`}>
					<Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} />

					<News />
				</div>
			</div>
		</>
	);
}

export default App;
