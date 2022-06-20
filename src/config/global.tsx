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
  SiAmazonaws,
  SiFirebase,
  SiNextdotjs,
  SiSwagger,
  SiTailwindcss,
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
  {
    id: 'aws',
    icon: <SiAmazonaws />,
    color: 'orange-400',
  },
  {
    id: 'nextjs',
    icon: <SiNextdotjs />,
    color: 'gray-400',
  },
  {
    id: 'tailwindcss',
    icon: <SiTailwindcss />,
    color: 'teal-600',
  },
  {
    id: 'swagger',
    icon: <SiSwagger />,
    color: 'green-600',
  },
  {
    id: 'firebase',
    icon: <SiFirebase />,
    color: 'amber-500',
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
          technologies: [
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
          technologies: [
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
          technologies: [
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
          technologies: [
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
        { id: 'acw-mobile', technologies: ['java', 'android', 'rest', 'bitbucket'] },
        { id: 'ble-tracker', technologies: ['java', 'android', 'bluetooth'] },
      ],
    },
  ],

  projects: [
    {
      id: 'tagdroid',
      date: new Date(2013, 0, 1),
      status_text: 'unmaintained',
      status_color: 'violet',
      technologies: ['java', 'android', 'rest'],
      gallery: [
        { id: 'icon', colSpan: 1 },
        { id: 'banner', colSpan: 2 },
        { id: 'press_article', colSpan: 3 },
        { id: 'screenshot1', colSpan: 1 },
        { id: 'screenshot2', colSpan: 1 },
        { id: 'screenshot3', colSpan: 1 },
        { id: 'screenshot4', colSpan: 1 },
        { id: 'screenshot5', colSpan: 1 },
        { id: 'screenshot6', colSpan: 1 },
        { id: 'screenshot7', colSpan: 1 },
        { id: 'screenshot8', colSpan: 1 },
        { id: 'screenshot9', colSpan: 1 },
        { id: 'screenshot10', colSpan: 1 },
        { id: 'screenshot11', colSpan: 1 },
      ],
    },
    {
      id: 'captainpeage',
      date: new Date(2020, 0, 1),
      status_text: 'hold',
      status_color: 'amber',
      technologies: ['firebase', 'nextjs', 'tailwindcss'],
      gallery: [{ id: 'maquette', colSpan: 6 }],
    },
    {
      id: 'kangoo',
      status_text: 'in-progress',
      status_color: 'green',
      date: new Date(2022, 0, 1),
      technologies: ['aws', 'graphql', 'nextjs', 'tailwindcss', 'typescript', 'swagger'],
      gallery: [],
    },
  ],

  education: [
    {
      id: 'master-eeats',
      startDate: new Date(2012, 8),
      endDate: new Date(2014, 8),
      years: ['istre', 'etcom'],
    },
    {
      id: 'licence3',
      startDate: new Date(2011, 8),
      endDate: new Date(2012, 5),
    },
    {
      id: 'dut-geii2',
      startDate: new Date(2009, 8),
      endDate: new Date(2011, 5),
    },
  ],
};

export default global;
