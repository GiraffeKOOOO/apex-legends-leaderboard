import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayersPage from "./pages/AllPlayersPage";
import HighestKillerPage from "./pages/HighestKillerPage";
import HighestDamagerPage from "./pages/HighestDamagerPage";
import BattleRoyalePage from "./pages/BattleRoyalePage";

function App() {
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
