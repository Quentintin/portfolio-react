import i18n from '../../../config/i18n';

import FrenchFlag from './../../../assets/images/flags/fr.webp';
import UnitedKingdomFlag from './../../../assets/images/flags/uk.webp';

export default function LanguageSwitcher() {
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      <button
        onClick={() => toggleLanguage()}
        className="mx-1 my-2.5 flex  w-9 items-center  justify-center rounded-full bg-transparent p-2 text-white/80 duration-500  ease-in-out hover:scale-125  hover:text-white xl:m-3 xl:w-11">
        {i18n.language === 'fr' ? (
          <img src={FrenchFlag} alt="French flag" />
        ) : (
          <img src={UnitedKingdomFlag} alt="English flag" />
        )}
      </button>
    </>
  );
}
