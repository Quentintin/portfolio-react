import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
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
		<nav className="h-32 container mx-auto flex justify-between items-center select-none tracking-wide">
			<div className="flex items-center text-lg">
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
			<div className="flex items-center text-right">
				<LinkedInButton url="https://www.linkedin.com/in/quentin-desbois/" />
				<GithubButton url="https://github.com/quentintin" />
				<VerticalDivider />
				<LanguageSwitcher />
			</div>
		</nav>
	);
}

function VerticalDivider() {
	return <div className="bg-white/30 h-7 mx-5 rounded-full w-0.5" />;
}
