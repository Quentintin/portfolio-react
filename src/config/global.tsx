import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoCloud,
  IoLogoFigma,
  IoLogoDocker,
} from 'react-icons/io5';

import { SiHtml5, SiGit, SiTypescript, SiGraphql } from 'react-icons/si';

import { FaDatabase, FaMicrochip } from 'react-icons/fa';
import { GiBookshelf, GiOctopus, GiThorHammer, GiPalette } from 'react-icons/gi';

const global = {
  startOfJavascriptExperience: new Date(2015, 0, 15),
  soft_skills: [
    {
      id: 'versatility',
      icon: <GiOctopus />,
      color: 'blue',
    },
    {
      id: 'knowledge',
      icon: <GiBookshelf />,
      color: 'violet',
    },
    {
      id: 'creativity',
      icon: <GiPalette />,
      color: 'red',
    },
    {
      id: 'resilience',
      icon: <GiThorHammer />,
      color: 'teal',
    },
  ],

  tech_skills: [
    {
      id: 'javascript',
      icon: <IoLogoJavascript />,
      color: 'hover:text-yellow-500',
    },
    {
      id: 'nodejs',
      icon: <IoLogoNodejs />,
      color: 'hover:text-lime-500',
    },
    {
      id: 'css',
      icon: <SiHtml5 />,
      color: 'hover:text-orange-500',
    },
    {
      id: 'react',
      icon: <IoLogoReact />,
      color: 'hover:text-cyan-500',
    },
    {
      id: 'api',
      icon: <SiGraphql />,
      color: 'hover:text-pink-500',
    },
    {
      id: 'git',
      icon: <SiGit />,
      color: 'hover:text-red-500',
    },
    {
      id: 'typescript',
      icon: <SiTypescript />,
      color: 'hover:text-blue-500',
    },
    {
      id: 'docker',
      icon: <IoLogoDocker />,
      color: 'hover:text-sky-400',
    },
    {
      id: 'database',
      icon: <FaDatabase />,
      color: 'hover:text-indigo-500',
    },
    {
      id: 'cloud',
      icon: <IoCloud />,
      color: 'hover:text-slate-300',
    },
    {
      id: 'iot',
      icon: <FaMicrochip />,
      color: 'hover:text-teal-500',
    },
    {
      id: 'figma',
      icon: <IoLogoFigma />,
      color: 'hover:text-rose-400',
    },
  ],
};

export default global;
