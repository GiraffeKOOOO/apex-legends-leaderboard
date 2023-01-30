import "../App.css";
import wraithBanner from "../media/wraith-banner.png";
import AnimatedNumbers from "react-animated-numbers";

function SecondPlayerBanner(props) {
	return (
		<>
			<div id="second-player-banner" className="grid grid-cols-3">
				<div id="player-banner" className="col-span-2 mx-auto">
					<img src={wraithBanner} className="h-[250px]" alt="second-player-banner" />
					<p className="text-center">{props.name}</p>
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

export default SecondPlayerBanner;
