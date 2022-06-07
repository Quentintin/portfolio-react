import Avatar from './../../../../assets/images/avatar.png';
import CanadianFlag from './../../../../assets/images/flags/ca.png';

import global from './../../../../config/global';

import { Element } from 'react-scroll';

export default function Intro() {
  return (
    <Element name="intro">
      <div className="mt-10 flex flex-col items-center justify-center px-4 sm:mt-10 lg:flex-row xl:mt-40">
        <div className="flex-1 p-10 text-right">
          <div className="text-xl font-thin text-white/60 sm:text-2xl md:text-3xl lg:text-4xl">
            <div> Hello world, I am</div>
            <div className="text-4xl font-black tracking-tighter text-white sm:text-5xl  lg:text-6xl xl:text-7xl">
              Quentin Desbois
            </div>
          </div>
          <div className="text-md font-black uppercase text-yellow-500 md:text-xl lg:text-2xl xl:text-3xl">
            Fullstack Javascript Developer
          </div>
          <div className="mt-4 flex justify-end text-lg font-light  text-white/80 sm:text-xl lg:text-2xl">
            <div className="flex max-w-xl items-center">
              <div className="font-bold tracking-tight">
                Senior Dev <span className="font-thin">with </span>
                years of XP
                <div className="flex items-center">
                  <div className="font-thin">
                    currently based in <span className="font-bold">Montréal</span>
                  </div>
                  <img src={CanadianFlag} alt="canada_flag" className="ml-2 h-5 lg:h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={Avatar} alt="Avatar" className="w-48 sm:w-72 xl:w-96" />
        </div>
      </div>
    </Element>
  );
}
