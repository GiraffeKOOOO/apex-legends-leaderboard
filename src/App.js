import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./pages/AllPlayers";
import HighestKiller from "./pages/HighestKiller";
import HighestDamager from "./pages/HighestDamager";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AllPlayers />} />
				<Route path="/all-players" element={<AllPlayers />} />
				<Route path="/highest-killer" element={<HighestKiller />} />
				<Route path="/highest-damager" element={<HighestDamager />} />
				<Route path="/battle-royale" element={<AllPlayers />} />
				<Route path="/arenas" element={<AllPlayers />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
