import "./../App.css";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
	const activeStyle = ({ isActive }) => {
		return {
			color: isActive ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 0.8)",
			background: isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
		};
	};
	return (
		<>
			<Navbar className="bg-gray-700">
				<div className="grid grid-cols-5 w-full mx-[200px]">
					<div className="flex justify-center">
						<NavLink to="/all-players" style={activeStyle} className="w-[200px] text-center text-[20px] border-[1px] rounded-[5px] border-white py-[2px] px-[2px]">
							All Players
						</NavLink>
					</div>
					<div className="flex justify-center">
						<NavLink to="/highest-killer" style={activeStyle} className="w-[200px] text-center text-[20px] border-[1px] rounded-[5px] border-white py-[2px] px-[2px]">
							Highest Killer
						</NavLink>
					</div>
					<div className="flex justify-center">
						<NavLink to="/highest-damager" style={activeStyle} className="w-[200px] text-center text-[20px] border-[1px] rounded-[5px] border-white py-[2px] px-[2px]">
							Highest Damager
						</NavLink>
					</div>
					<div className="flex justify-center">
						<NavLink to="/battle-royale" style={activeStyle} className="w-[200px] text-center text-[20px] border-[1px] rounded-[5px] border-white py-[2px] px-[2px]">
							Battle Royale
						</NavLink>
					</div>
					<div className="flex justify-center">
						<NavLink to="/arenas" style={activeStyle} className="w-[200px] text-center text-[20px] border-[1px] rounded-[5px] border-white py-[2px] px-[2px]">
							Arenas
						</NavLink>
					</div>
				</div>
			</Navbar>
		</>
	);
}

export default NavbarComponent;
