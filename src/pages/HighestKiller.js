import "../App.css";
import TitleBar from "../components/TitleBar";
import NavbarComponent from "../components/NavbarComponent";
import Top6PlayersGrid from "../components/Top6PlayersGrid";
import RemainingPlayers from "../components/RemainingPlayers";
import dummyData from "../dummy-data.json";

function HighestKiller() {
	const player1 = dummyData.matches[0].player_results[0];
	const player2 = dummyData.matches[0].player_results[1];
	const player3 = dummyData.matches[0].player_results[2];
	const player4 = dummyData.matches[0].player_results[3];
	const player5 = dummyData.matches[0].player_results[4];
	const player6 = dummyData.matches[0].player_results[5];
	const top6PlayersArr = [player1, player2, player3, player4, player5, player6];
	const player7 = dummyData.matches[0].player_results[0];
	const player8 = dummyData.matches[0].player_results[1];
	const player9 = dummyData.matches[0].player_results[2];
	const player10 = dummyData.matches[0].player_results[3];
	const player11 = dummyData.matches[0].player_results[4];
	const player12 = dummyData.matches[0].player_results[5];
	const player13 = dummyData.matches[0].player_results[4];
	const player14 = dummyData.matches[0].player_results[5];
	const remainingPlayersArr = [player7, player8, player9, player10, player11, player12, player13, player14];
	return (
		<>
			<TitleBar />
			<NavbarComponent />
			<Top6PlayersGrid statTitle="Kills" top6Players={top6PlayersArr} />
			<RemainingPlayers statTitle="Kills" remainingPlayers={remainingPlayersArr} />
		</>
	);
}

export default HighestKiller;
