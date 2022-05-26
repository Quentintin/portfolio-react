import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import LanguageSwitcher from "./LanguageSwitcher";
import NavbarItem from "./NavbarItem";
import { LinkedInButton, GithubButton } from "./SocialButton";

interface NavigationItem {
	id: string;
	hash: string;
}

const navigation: Array<NavigationItem> = [
	{ id: "home", hash: "#home" },
	{ id: "experience", hash: "#experience" },
	{ id: "skills", hash: "#skills" },
	{ id: "projects", hash: "#projects" },
	{ id: "education", hash: "#education" },
	{ id: "contact", hash: "#contact" },
];

export default function Navbar() {
	const [selectedId, setSelectedId] = useState("home");
	const { t } = useTranslation();

	return (
		<nav className="h-32 container mx-auto flex justify-between items-center select-none tracking-wide">
			<div className="flex items-center text-lg">
				{navigation.map((item) => (
					<HashLink smooth to={item.hash}>
						<NavbarItem
							key={item.id}
							handleClick={() => setSelectedId(item.id)}
							title={t(`${item.id}.title`)}
							isActive={selectedId === item.id}
						/>
					</HashLink>
				))}
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
