import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./pages/AllPlayers";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AllPlayers />} />
				<Route path="/all-players" element={<AllPlayers />} />
				<Route path="/highest-killer" element={<AllPlayers />} />
				<Route path="/highest-damager" element={<AllPlayers />} />
				<Route path="/battle-royale" element={<AllPlayers />} />
				<Route path="/arenas" element={<AllPlayers />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
