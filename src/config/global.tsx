import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoCloud,
  IoLogoFigma,
  IoLogoDocker,
} from 'react-icons/io5';

import {
  SiHtml5,
  SiGit,
  SiTypescript,
  SiGraphql,
  SiGitlab,
  SiMongodb,
  SiRedis,
  SiAdobephotoshop,
  SiAndroid,
  SiAngularjs,
  SiApachecassandra,
  SiBootstrap,
  SiCplusplus,
  SiJava,
  SiJquery,
  SiLabview,
  SiMariadb,
  SiNginx,
  SiNodered,
  SiPhp,
  SiQt,
  SiSass,
  SiWordpress,
  SiBitbucket,
  SiGithub,
  SiBluetooth,
} from 'react-icons/si';

import { FaDatabase, FaMicrochip } from 'react-icons/fa';
import { GiBookshelf, GiOctopus, GiThorHammer, GiPalette, GiSailboat } from 'react-icons/gi';

const technologies = [
  {
    id: 'javascript',
    icon: <IoLogoJavascript />,
    color: 'yellow-500',
  },
  {
    id: 'nodejs',
    icon: <IoLogoNodejs />,
    color: 'lime-500',
  },
  {
    id: 'css',
    icon: <SiHtml5 />,
    color: 'orange-500',
  },
  {
    id: 'react',
    icon: <IoLogoReact />,
    color: 'cyan-500',
  },
  {
    id: 'api',
    icon: <SiGraphql />,
    color: 'pink-500',
  },
  {
    id: 'graphql',
    icon: <SiGraphql />,
    color: 'pink-500',
  },
  {
    id: 'git',
    icon: <SiGit />,
    color: 'red-500',
  },
  {
    id: 'typescript',
    icon: <SiTypescript />,
    color: 'blue-500',
  },
  {
    id: 'docker',
    icon: <IoLogoDocker />,
    color: 'sky-400',
  },
  {
    id: 'database',
    icon: <FaDatabase />,
    color: 'indigo-500',
  },
  {
    id: 'cloud',
    icon: <IoCloud />,
    color: 'slate-300',
  },
  {
    id: 'iot',
    icon: <FaMicrochip />,
    color: 'teal-500',
  },
  {
    id: 'figma',
    icon: <IoLogoFigma />,
    color: 'rose-400',
  },
  {
    id: 'sass',
    icon: <SiSass />,
    color: 'pink-400',
  },
  {
    id: 'bootstrap',
    icon: <SiBootstrap />,
    color: 'violet-500',
  },
  {
    id: 'jquery',
    icon: <SiJquery />,
    color: 'blue-500',
  },
  {
    id: 'mongodb',
    icon: <SiMongodb />,
    color: 'green-500',
  },
  {
    id: 'redis',
    icon: <SiRedis />,
    color: 'red-500',
  },
  {
    id: 'gitlab',
    icon: <SiGitlab />,
    color: 'orange-500',
  },
  {
    id: 'sails',
    icon: <GiSailboat />,
    color: 'cyan-500',
  },
  {
    id: 'rest',
    icon: <div className="text-xs font-bold">API</div>,
    color: 'slate-500',
  },
  {
    id: 'java',
    icon: <SiJava />,
    color: 'orange-500',
  },
  {
    id: 'android',
    icon: <SiAndroid />,
    color: 'emerald-500',
  },
  {
    id: 'qt',
    icon: <SiQt />,
    color: 'green-400',
  },
  {
    id: 'cpp',
    icon: <SiCplusplus />,
    color: 'blue-500',
  },
  {
    id: 'nodered',
    icon: <SiNodered />,
    color: 'red-500',
  },
  {
    id: 'cassandra',
    icon: <SiApachecassandra />,
    color: 'sky-400',
  },
  {
    id: 'mariadb',
    icon: <SiMariadb />,
    color: 'amber-500',
  },
  {
    id: 'angularjs',
    icon: <SiAngularjs />,
    color: 'red-400',
  },
  {
    id: 'nginx',
    icon: <SiNginx />,
    color: 'green-500',
  },
  {
    id: 'wordpress',
    icon: <SiWordpress />,
    color: 'cyan-500',
  },
  {
    id: 'php',
    icon: <SiPhp />,
    color: 'indigo-400',
  },
  {
    id: 'photoshop',
    icon: <SiAdobephotoshop />,
    color: 'blue-500',
  },
  {
    id: 'labview',
    icon: <SiLabview />,
    color: 'yellow-400',
  },
  {
    id: 'bitbucket',
    icon: <SiBitbucket />,
    color: 'blue-500',
  },
  {
    id: 'github',
    icon: <SiGithub />,
    color: 'gray-500',
  },
  {
    id: 'bluetooth',
    icon: <SiBluetooth />,
    color: 'blue-500',
  },
];

const global = {
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
  tech_skills: technologies.filter((tech) =>
    [
      'javascript',
      'nodejs',
      'css',
      'react',
      'api',
      'git',
      'typescript',
      'docker',
      'database',
      'cloud',
      'iot',
      'figma',
    ].includes(tech.id),
  ),

  technologies,

  experiences: [
    {
      id: 'wahi',
      startDate: new Date(2022, 5),
      projects: [],
    },
    {
      id: 'solem',
      startDate: new Date(2018, 9),
      endDate: new Date(2022, 2),
      projects: [
        {
          id: 'mysolem',
          technos: [
            'javascript',
            'nodejs',
            'rest',
            'sails',
            'jquery',
            'sass',
            'bootstrap',
            'mongodb',
            'redis',
            'gitlab',
            'docker',
          ],
        },
        {
          id: 'myindygo',
          technos: [
            'javascript',
            'nodejs',
            'rest',
            'sails',
            'jquery',
            'sass',
            'bootstrap',
            'mongodb',
            'redis',
            'gitlab',
            'docker',
          ],
        },
        {
          id: 'myattentive',
          technos: [
            'javascript',
            'nodejs',
            'rest',
            'sails',
            'jquery',
            'sass',
            'bootstrap',
            'mongodb',
            'redis',
            'gitlab',
            'docker',
          ],
        },
      ],
    },
    {
      id: 'atim',
      startDate: new Date(2015, 0),
      endDate: new Date(2018, 8),
      projects: [
        {
          id: 'acw',
          technos: [
            'javascript',
            'nodejs',
            'rest',
            'angularjs',
            'bootstrap',
            'mariadb',
            'cassandra',
            'bitbucket',
            'nodered',
            'nginx',
          ],
        },
        { id: 'acw-mobile', technos: ['java', 'android', 'rest', 'bitbucket'] },
        { id: 'ble-tracker', technos: ['java', 'android', 'bluetooth'] },
      ],
    },
  ],
};

export default global;
