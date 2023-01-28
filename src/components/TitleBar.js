import "./../App.css";
import Navbar from "react-bootstrap/Navbar";
import WestlanLogo from "../media/westlan-logo.png";
import ApexLogo from "../media/apex-logo.png";

function TitleBar() {
	return (
		<>
			<Navbar variant="dark" className="bg-gray-700">
				<div className="grid grid-cols-4 gap-1 w-full">
					<div className="ml-[10px] flex align-middle">
						<Navbar.Brand href="/">
							<img alt="" src={WestlanLogo} width="200" height="70" className="d-inline-block align-top" />
						</Navbar.Brand>
					</div>
					<div className="col-span-2 flex mx-auto justify-center">
						<Navbar.Brand href="/">
							<div className="flex">
								<img alt="" src={ApexLogo} width="50" height="50" />
								<p className="text-[30px] ml-[5px]">Apex Legends LAN Leaderboard</p>
							</div>
						</Navbar.Brand>
					</div>
					<div />
				</div>
			</Navbar>
		</>
	);
}

export default TitleBar;
