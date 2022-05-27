import i18n from "../../../config/i18n";

import FrenchFlag from "./../../../assets/images/flags/fr.png";
import UnitedKingdomFlag from "./../../../assets/images/flags/uk.png";

export default function LanguageSwitcher() {
  const toggleLanguage = () =>
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");

  return (
    <button
      onClick={() => toggleLanguage()}
      className="m-3 flex h-11 w-11 items-center justify-center rounded-full  bg-transparent p-2 text-white/80 duration-500 ease-in-out hover:bg-white/20 hover:text-white"
    >
      {i18n.language === "fr" ? (
        <img src={FrenchFlag} alt="French flag" />
      ) : (
        <img src={UnitedKingdomFlag} alt="English flag" />
      )}
    </button>
  );
}
