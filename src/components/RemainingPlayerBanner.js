import "../App.css";
import wraithBanner from "../media/wraith-banner.png";
import AnimatedNumbers from "react-animated-numbers";

function RemainingPlayerBanner(props) {
	return (
		<>
			<div className="border-2 border-color-black grid grid-cols-3 my-auto mx-[4px]">
				<div id="player-banner" className="col-span-2 mx-auto">
					<img src={wraithBanner} className="h-[190px]" alt="remaining-player-banner" />
					<p className="text-center text-[16px] border-x-2">{props.name}</p>
				</div>
				<div id="player-stats" className="col-span-1 my-auto mx-auto">
					<div id="player-stat-title" className="text-[19px] text-center">
						{props.statTitle}
					</div>
					<div id="player-stat-value" className="text-[14px] text-center">
						<AnimatedNumbers animateToNumber={props.value} />
					</div>
				</div>
			</div>
		</>
	);
}

export default RemainingPlayerBanner;
