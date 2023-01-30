import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayersPage from "./pages/AllPlayersPage";
import HighestKillerPage from "./pages/HighestKillerPage";
import HighestDamagerPage from "./pages/HighestDamagerPage";
import BattleRoyalePage from "./pages/BattleRoyalePage";

function App() {
	const currentUrl = window.location.href.substring(22, 50);

	const pageSwitch = (currentUrl) => {
		console.log(currentUrl);
		switch (currentUrl) {
			case "all-players":
				window.location.replace("http://localhost:3000/highest-killer");
				return;
			case "highest-killer":
				window.location.replace("http://localhost:3000/highest-damager");
				return;
			case "highest-damager":
				window.location.replace("http://localhost:3000/battle-royale");
				return;
			case "battle-royale":
				window.location.replace("http://localhost:3000/arenas");
				return;
			case "arenas":
				window.location.replace("http://localhost:3000/all-players");
				return;
			default:
				console.log("default");
		}
	};

	/*
	useEffect(() => {
		const interval = setInterval(() => {
			pageSwitch(currentUrl);
		}, 60000);
		return () => clearInterval(interval);
	}, []);
	*/

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AllPlayersPage />} />
				<Route path="/all-players" element={<AllPlayersPage />} />
				<Route path="/highest-killer" element={<HighestKillerPage />} />
				<Route path="/highest-damager" element={<HighestDamagerPage />} />
				<Route path="/battle-royale" element={<BattleRoyalePage />} />
				<Route path="/arenas" element={<AllPlayersPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
