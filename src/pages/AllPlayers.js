import "../App.css";
import TitleBar from "../components/TitleBar";
import NavbarComponent from "../components/NavbarComponent";
import Top6PlayersGrid from "../components/Top6PlayersGrid";

function AllPlayers() {
	return (
		<>
			<TitleBar />
			<NavbarComponent />
			<Top6PlayersGrid />
		</>
	);
}

export default AllPlayers;
