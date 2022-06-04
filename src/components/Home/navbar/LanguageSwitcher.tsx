import i18n from '../../../config/i18n';
import { useTranslation } from 'react-i18next';

import FrenchFlag from './../../../assets/images/flags/fr.png';
import UnitedKingdomFlag from './../../../assets/images/flags/uk.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LanguageSwitcher() {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');

    /*toast(
      i18n.language === 'fr' ? (
        <div className="bg-red">{t('navbar.switch_to_fr')}</div>
      ) : (
        t('navbar.switch_to_en')
      ),
      {
        type: 'info',
        position: 'bottom-center',
        closeButton: false,
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
      },
    );*/
  };

  return (
    <>
      <button
        onClick={() => toggleLanguage()}
        className="mx-1 my-2.5 flex  w-9 items-center justify-center rounded-full bg-transparent p-2 text-white/80  duration-500 ease-in-out hover:bg-white/20 hover:text-white xl:m-3 xl:w-11">
        {i18n.language === 'fr' ? (
          <img src={FrenchFlag} alt="French flag" />
        ) : (
          <img src={UnitedKingdomFlag} alt="English flag" />
        )}
      </button>
      <ToastContainer limit={1} theme={'dark'} />
    </>
  );
}
