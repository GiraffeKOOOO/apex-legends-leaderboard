import "../App.css";
import wraithBanner from "../media/wraith-banner.png";

function AllPlayersBanner(props) {
	return (
		<>
			<div id="all-players-banner" className="grid grid-cols-3">
				<div id="player-banner" className="col-span-1 mx-auto">
					<img src={wraithBanner} className="h-[97px]" alt="all-players-banner" />
				</div>
				<div id="player-stats" className="col-span-2 my-auto mx-auto">
					<div id="player-stat-value" className="text-[16px]">
						<p className="break-all">{props.name}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default AllPlayersBanner;
