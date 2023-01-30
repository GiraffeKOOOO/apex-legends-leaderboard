import "../App.css";
import wraithBanner from "../media/wraith-banner.png";
import AnimatedNumbers from "react-animated-numbers";

function FourthPlayerBanner(props) {
	return (
		<>
			<div id="fourth-player-banner" className="border-2 border-color-black grid grid-cols-3">
				<div id="player-banner" className="col-span-2 mx-auto">
					<img src={wraithBanner} className="h-[160px]" alt="fourth-player-banner" />
					<p className="text-center border-x-2">{props.name}</p>
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

export default FourthPlayerBanner;
