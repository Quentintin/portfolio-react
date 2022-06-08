import { useTranslation } from 'react-i18next';

import { Element } from 'react-scroll';
import Avatar from './../../../../assets/images/avatar.png';
import CanadianFlag from './../../../../assets/images/flags/ca.png';

export default function Intro() {
  const { t } = useTranslation();
  return (
    <Element name="intro">
      <div className="relative px-6 py-28 text-center text-white/60 md:px-12 lg:mt-32 lg:text-left">
        <div className="container mx-auto font-bold xl:px-32">
          <div className="grid items-center gap-12 text-left md:grid-cols-2 md:text-right">
            <div className="mt-4 xl:mt-0">
              <h1 className="mb-4 text-3xl tracking-tight text-white/60 md:text-4xl xl:text-5xl">
                {t('intro.helloworld')}
                <br />
                <span className="text-5xl text-yellow-500 md:text-6xl xl:text-7xl">
                  Quentin Desbois
                </span>
              </h1>
              <div className=" tracking-wide text-white md:text-xl lg:text-xl xl:text-2xl">
                {t('intro.role')}
              </div>
              <div className="flex items-center md:justify-end">
                <div className="font-thin">
                  {t('intro.currently_based_in')} <span className="font-bold">Montréal</span>
                </div>
                <img src={CanadianFlag} alt="canada_flag" className="ml-2 h-5 lg:h-7" />
              </div>
            </div>
            <div className="mx-auto  text-center xl:mx-0">
              <img src={Avatar} alt="Avatar" className="w-48 sm:w-72 xl:w-96" />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
