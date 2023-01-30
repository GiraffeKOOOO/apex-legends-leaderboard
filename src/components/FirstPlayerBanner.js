import "../App.css";
import wraithBanner from "../media/wraith-banner.png";
import AnimatedNumbers from "react-animated-numbers";

function FirstPlayerBanner(props) {
	return (
		<>
			<div id="first-player-banner" className="border-2 border-color-black grid grid-cols-3 my-auto">
				<div id="player-banner" className="col-span-2 mx-auto">
					<img src={wraithBanner} className="h-[540px]" alt="first-player-banner" />
					<p className="text-center border-x-2">{props.name}</p>
				</div>
				<div id="player-stats" className="col-span-1 my-auto mx-auto">
					<div id="player-stat-title" className="text-[40px] text-center">
						{props.statTitle}
					</div>
					<div id="player-stat-value" className="text-[38px] text-center">
						<AnimatedNumbers animateToNumber={props.value} />
					</div>
				</div>
			</div>
		</>
	);
}

export default FirstPlayerBanner;
