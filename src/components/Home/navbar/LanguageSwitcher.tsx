import i18n from "../../../config/i18n";

import FrenchFlag from "./../../../assets/images/flags/fr.png";
import UnitedKingdomFlag from "./../../../assets/images/flags/uk.png";

export default function LanguageSwitcher() {
	const toggleLanguage = () =>
		i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");

	return (
		<button
			onClick={() => toggleLanguage()}
			className="h-11 w-11 items-center justify-center flex bg-transparent text-white/80  hover:bg-white/20 hover:text-white duration-500 ease-in-out p-2 rounded-full m-3"
		>
			{i18n.language === "fr" ? (
				<img src={FrenchFlag} alt="French flag" />
			) : (
				<img src={UnitedKingdomFlag} alt="English flag" />
			)}
		</button>
	);
}
