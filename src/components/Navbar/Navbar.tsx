import { useState } from "react";
import NavbarItem from "./NavbarItem";
import { LinkedInButton, GithubButton } from "./SocialButton";

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
		<nav className=" h-24 flex justify-around items-center px-16 select-none tracking-wide">
			<div className="  text-xl font-light tracking-normal text-white/80">
				Quentin DESBOIS
			</div>
			<div className="flex-4 items-center justify-center p-20">
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
			<div className="text-right">
				<LinkedInButton url="https://www.linkedin.com/in/quentin-desbois/" />
				<GithubButton url="https://github.com/quentintin" />
			</div>
		</nav>
	);
}
