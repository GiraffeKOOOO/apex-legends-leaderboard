import "../App.css";
import RemainingPlayerBanner from "./RemainingPlayerBanner";

function RemainingPlayers(props) {
	return (
		<>
			<div id="remaining-players-container" className="grid grid-cols-8 mx-auto mt-[15px] max-w-[1800px] max-h-[500px]">
				<div>
					<RemainingPlayerBanner statTitle={props.statTitle} name={props.remainingPlayers[0].playerName} value={props.statTitle === "Kills" ? props.remainingPlayers[0].kills : props.remainingPlayers[0].damageDealt} />
				</div>
				<div>
					<RemainingPlayerBanner statTitle={props.statTitle} name={props.remainingPlayers[1].playerName} value={props.statTitle === "Kills" ? props.remainingPlayers[1].kills : props.remainingPlayers[1].damageDealt} />
				</div>
				<div>
					<RemainingPlayerBanner statTitle={props.statTitle} name={props.remainingPlayers[2].playerName} value={props.statTitle === "Kills" ? props.remainingPlayers[2].kills : props.remainingPlayers[2].damageDealt} />
				</div>
				<div>
					<RemainingPlayerBanner statTitle={props.statTitle} name={props.remainingPlayers[3].playerName} value={props.statTitle === "Kills" ? props.remainingPlayers[3].kills : props.remainingPlayers[3].damageDealt} />
				</div>
				<div>
					<RemainingPlayerBanner statTitle={props.statTitle} name={props.remainingPlayers[4].playerName} value={props.statTitle === "Kills" ? props.remainingPlayers[4].kills : props.remainingPlayers[4].damageDealt} />
				</div>
				<div>
					<RemainingPlayerBanner statTitle={props.statTitle} name={props.remainingPlayers[5].playerName} value={props.statTitle === "Kills" ? props.remainingPlayers[5].kills : props.remainingPlayers[5].damageDealt} />
				</div>
				<div>
					<RemainingPlayerBanner statTitle={props.statTitle} name={props.remainingPlayers[6].playerName} value={props.statTitle === "Kills" ? props.remainingPlayers[6].kills : props.remainingPlayers[6].damageDealt} />
				</div>
				<div>
					<RemainingPlayerBanner statTitle={props.statTitle} name={props.remainingPlayers[7].playerName} value={props.statTitle === "Kills" ? props.remainingPlayers[7].kills : props.remainingPlayers[7].damageDealt} />
				</div>
			</div>
		</>
	);
}

export default RemainingPlayers;
