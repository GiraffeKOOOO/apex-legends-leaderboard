import "../App.css";
import TitleBar from "../components/TitleBar";
import NavbarComponent from "../components/NavbarComponent";
import dummyData from "../dummy-data.json";
import BattleRoyaleTeams from "../components/BattleRoyaleTeams";

function BattleRoyalePage() {
	return (
		<>
			<TitleBar />
			<NavbarComponent />
			<BattleRoyaleTeams />
		</>
	);
}

export default BattleRoyalePage;
