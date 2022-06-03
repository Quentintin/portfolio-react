import moment from 'moment';
import Avatar from './../../../../assets/images/avatar.png';
import CanadianFlag from './../../../../assets/images/flags/ca.png';

import global from './../../../../config/global';

import { Element } from 'react-scroll';

export default function Intro() {
  const yearsOfJSExperience = moment().diff(global.startOfJavascriptExperience, 'years');
  return (
    <Element name="intro">
      <div className="mt-20 flex flex-col flex-wrap items-center justify-center xl:mt-40 xl:flex-row">
        <div className="flex-1 py-16 px-4">
          <div className="text-right text-4xl font-thin text-white/60">
            <div> Hello world, I am</div>
            <div className="text-right text-7xl font-black tracking-tighter text-white [text-shadow:0_0_8px_rgba(0,0,0,0.7)]">
              Quentin Desbois
            </div>
          </div>
          <div className="text-right text-3xl font-black uppercase text-yellow-500">
            Fullstack Javascript Developer
          </div>
          <div className="mt-2 flex justify-end text-right text-2xl font-light text-white/80">
            <div className="flex max-w-xl items-center">
              <div className="font-bold tracking-tight">
                Senior Dev <span className="font-thin">with </span>
                {yearsOfJSExperience} years of XP
                <span className="font-thin">, based in </span>Montréal
              </div>
              <img width="30px" src={CanadianFlag} alt="canada_flag" className="ml-1" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={Avatar} alt="Avatar" className="w-96" />
        </div>
      </div>
    </Element>
  );
}
