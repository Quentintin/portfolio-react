import { useState } from "react";
import NavbarItem from "./NavbarItem";

const items = [
	"Home",
	"Experiences",
	"Skills",
	"Projects",
	"Education",
	"Contact",
];

export default function Navbar() {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<nav className=" h-24 flex justify-between items-center px-16 select-none tracking-wide">
			<div className="flex-1">Quentin DESBOIS</div>
			<div className="flex flex-4 items-center justify-center p-20">
				{items.map((item, index) => {
					return (
						<NavbarItem
							key={item.toLowerCase()}
							handleClick={() => setSelectedIndex(index)}
							title={item}
							isActive={selectedIndex === index}
						/>
					);
				})}
			</div>
			<div className="flex-1"></div>
		</nav>
	);
}
