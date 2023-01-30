import "../App.css";
import TitleBar from "../components/TitleBar";
import NavbarComponent from "../components/NavbarComponent";
import dummyData from "../dummy-data.json";
import AllPlayers from "../components/AllPlayers";

function AllPlayersPage() {
	const player1 = dummyData.matches[0].player_results[0];
	const player2 = dummyData.matches[0].player_results[0];
	const player3 = dummyData.matches[0].player_results[0];
	const player4 = dummyData.matches[0].player_results[0];
	const player5 = dummyData.matches[0].player_results[0];
	const player6 = dummyData.matches[0].player_results[0];
	const player7 = dummyData.matches[0].player_results[0];
	const player8 = dummyData.matches[0].player_results[0];
	const player9 = dummyData.matches[0].player_results[0];
	const player10 = dummyData.matches[0].player_results[0];
	const player11 = dummyData.matches[0].player_results[0];
	const player12 = dummyData.matches[0].player_results[0];
	const player13 = dummyData.matches[0].player_results[0];
	const player14 = dummyData.matches[0].player_results[0];
	const player15 = dummyData.matches[0].player_results[0];
	const player16 = dummyData.matches[0].player_results[0];
	const player17 = dummyData.matches[0].player_results[0];
	const player18 = dummyData.matches[0].player_results[0];
	const player19 = dummyData.matches[0].player_results[0];
	const player20 = dummyData.matches[0].player_results[0];
	const player21 = dummyData.matches[0].player_results[0];
	const player22 = dummyData.matches[0].player_results[0];
	const player23 = dummyData.matches[0].player_results[0];
	const player24 = dummyData.matches[0].player_results[0];
	const player25 = dummyData.matches[0].player_results[0];
	const player26 = dummyData.matches[0].player_results[0];
	const player27 = dummyData.matches[0].player_results[0];
	const player28 = dummyData.matches[0].player_results[0];
	const player29 = dummyData.matches[0].player_results[0];
	const player30 = dummyData.matches[0].player_results[0];
	const player31 = dummyData.matches[0].player_results[0];
	const player32 = dummyData.matches[0].player_results[0];
	const player33 = dummyData.matches[0].player_results[0];
	const player34 = dummyData.matches[0].player_results[0];
	const player35 = dummyData.matches[0].player_results[0];
	const player36 = dummyData.matches[0].player_results[0];
	const player37 = dummyData.matches[0].player_results[0];

	const cachedPlayersArr = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, player25, player26, player27, player28, player29, player30, player31, player32, player33, player34, player35, player36, player37];
	return (
		<>
			<TitleBar />
			<NavbarComponent />
			<AllPlayers />
		</>
	);
}

export default AllPlayersPage;
