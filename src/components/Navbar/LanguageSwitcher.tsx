import { useState } from "react";
import i18n from "../../i18n";
import FrenchFlag from "./../../assets/images/flags/fr.png";
import UnitedKingdomFlag from "./../../assets/images/flags/uk.png";

export default function LanguageSwitcher(props: { currentLanguage: string }) {
	const [language, setlanguage] = useState(props.currentLanguage);

	function toggleLanguage() {
		if (language === "en") {
			setlanguage("fr");
			i18n.changeLanguage("fr");
		} else {
			setlanguage("en");
			i18n.changeLanguage("en");
		}
	}

	return (
		<button
			onClick={() => toggleLanguage()}
			className="h-11 w-11 items-center justify-center flex bg-transparent text-white/80  hover:bg-white/20 hover:text-white duration-500 ease-in-out p-2 rounded-full m-3"
		>
			{language === "fr" ? (
				<img src={FrenchFlag} alt="French flag" />
			) : (
				<img src={UnitedKingdomFlag} alt="English flag" />
			)}
		</button>
	);
}
