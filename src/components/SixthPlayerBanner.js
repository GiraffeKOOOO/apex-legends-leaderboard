import "../App.css";
import wraithBanner from "../media/wraith-banner.png";
import AnimatedNumbers from "react-animated-numbers";

function SixthPlayerBanner(props) {
	return (
		<>
			<div id="sixth-player-banner" className="grid grid-cols-3">
				<div id="player-banner" className="col-span-2 mx-auto">
					<img src={wraithBanner} className="h-[160px]" alt="sixth-player-banner" />
					<p className="text-center">{props.name}</p>
				</div>
				<div id="player-stats" className="col-span-1 my-auto mx-auto">
					<div id="player-stat-title" className="text-[30px] text-center">
						{props.statTitle}
					</div>
					<div id="player-stat-value" className="text-[22px] text-center">
						<AnimatedNumbers animateToNumber={props.value} />
					</div>
				</div>
			</div>
		</>
	);
}

export default SixthPlayerBanner;