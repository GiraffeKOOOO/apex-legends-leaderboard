import "../App.css";

import FirstPlayerBanner from "../components/FirstPlayerBanner";
import SecondPlayerBanner from "../components/SecondPlayerBanner";
import ThirdPlayerBanner from "../components/ThirdPlayerBanner";
import FourthPlayerBanner from "../components/FourthPlayerBanner";
import FifthPlayerBanner from "../components/FifthPlayerBanner";
import SixthPlayerBanner from "../components/SixthPlayerBanner";

function Top6PlayersGrid(props) {
	return (
		<>
			<div id="top6-container" className="grid grid-cols-3 mx-auto mt-[5px] max-w-[1600px] max-h-[700px] ">
				<div id="first-player-grid" className="border-2 border-color-black mx-auto">
					<div className="grid grid-rows-1 my-auto h-full">
						<FirstPlayerBanner statTitle={props.statTitle} name={props.top6Players[0].playerName} value={props.statTitle === "Kills" ? props.top6Players[0].kills : props.top6Players[0].damageDealt} />
					</div>
				</div>
				<div id="second-third-player-grid" className="border-2 border-color-black mx-auto">
					<div className="grid grid-rows-2 my-auto h-full">
						<div className="my-auto">
							<SecondPlayerBanner statTitle={props.statTitle} name={props.top6Players[1].playerName} value={props.statTitle === "Kills" ? props.top6Players[1].kills : props.top6Players[1].damageDealt} />
						</div>
						<div className="my-auto">
							<ThirdPlayerBanner statTitle={props.statTitle} name={props.top6Players[2].playerName} value={props.statTitle === "Kills" ? props.top6Players[2].kills : props.top6Players[2].damageDealt} />
						</div>
					</div>
				</div>
				<div id="fourth-fifth-sixth-player-grid" className="border-2 border-color-black mx-auto">
					<div className="grid grid-rows-3 my-auto h-full">
						<div className="my-auto">
							<FourthPlayerBanner statTitle={props.statTitle} name={props.top6Players[3].playerName} value={props.statTitle === "Kills" ? props.top6Players[3].kills : props.top6Players[3].damageDealt} />
						</div>
						<div className="my-auto">
							<FifthPlayerBanner statTitle={props.statTitle} name={props.top6Players[4].playerName} value={props.statTitle === "Kills" ? props.top6Players[4].kills : props.top6Players[4].damageDealt} />
						</div>
						<div className="my-auto">
							<SixthPlayerBanner statTitle={props.statTitle} name={props.top6Players[5].playerName} value={props.statTitle === "Kills" ? props.top6Players[5].kills : props.top6Players[5].damageDealt} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Top6PlayersGrid;
