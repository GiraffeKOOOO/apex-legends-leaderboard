import "../App.css";
import BRFirstTeam from "./BRFirstTeam";
import BRSecondTeam from "./BRSecondTeam";
import BRFThirdTeam from "./BRFThirdTeam";
import BRFourthTeam from "./BRFourthTeam";
import BRFifthTeam from "./BRFifthTeam";

function BattleRoyaleTeams(props) {
	return (
		<>
			<div id="BR-top-row" className="border-2 border-color-gray grid grid-rows-2 w-[1820px] mt-[5px] mx-auto">
				<div className="border-2 border-color-gray grid grid-cols-2 w-full mx-auto">
					<div>
						<BRFirstTeam />
					</div>
					<div className="border-2 border-color-gray grid grid-rows-2">
						<div className="border-2 border-color-gray w-full mx-auto">
							<BRSecondTeam />
						</div>
						<div className="border-2 border-color-gray w-full mx-auto">
							<BRFThirdTeam />
						</div>
					</div>
				</div>
				<div className="border-color-gray grid grid-cols-2">
					<div className="border-2 border-color-gray w-full mx-auto">
						<BRFourthTeam />
					</div>
					<div className="border-2 border-color-gray w-full mx-auto">
						<BRFifthTeam />
					</div>
				</div>
			</div>
		</>
	);
}

export default BattleRoyaleTeams;
