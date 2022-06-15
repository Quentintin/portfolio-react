import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { SwitchTransition, CSSTransition } from 'react-transition-group'; // ES6
import { ProjectSmallCard, ProjectDetails } from './Project';

import moment from 'moment';
import 'moment/locale/fr';

import AtimLogo from '../../../../assets/images/experience/company/atim/logo.webp';
import SolemLogo from '../../../../assets/images/experience/company/solem/logo.webp';
import WahiLogo from '../../../../assets/images/experience/company/wahi/logo.webp';

import i18n from '../../../../config/i18n';
import global from '../../../../config/global';

function CompanyLogo({ company }: { company: string }) {
  let logo: string, url: string;
  switch (company) {
    case 'solem':
      logo = SolemLogo;
      url = 'https://www.solem.fr/';
      break;
    case 'atim':
      logo = AtimLogo;
      url = 'https://www.atim.com/';
      break;
    case 'wahi':
      logo = WahiLogo;
      url = 'https://wahi.com/';
      break;
    default:
      logo = '';
      break;
  }

  return (
    <img
      src={logo}
      onClick={() => window.open(url, '_blank')}
      alt={`${company.toUpperCase()} Logo`}
      className="mr-5 hidden h-24 w-24 cursor-pointer rounded-full border-4 border-black/20 bg-white/20 object-scale-down saturate-0 duration-300 ease-out hover:scale-105 hover:bg-white/10 hover:saturate-100 xl:block"
    />
  );
}

export default function ExperienceItem({ experience }: { experience: string }) {
  const exp = global.experiences.find((exp) => exp.id === experience);
  const projects = exp?.projects;
  const [selectedProject, setSelectedProject] = useState(
    projects && projects.length ? projects[0] : { id: '', technos: [] },
  );

  const { t } = useTranslation();

  moment.locale(i18n.language);

  return (
    <div className="my-5 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-6 xl:my-10">
      <div className="flex">
        <CompanyLogo company={experience} />

        <div>
          <div className=" flex items-center">
            <h2 className=" whitespace-nowrap">{t(`experience.list.${experience}.title`)}</h2>
            {!exp?.endDate && (
              <span className="ml-3 h-5 rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-black shadow ">
                {t(`experience.current_job`)}
              </span>
            )}
          </div>

          <div className="mb-3 -mt-1 text-sm text-secondary/80">
            {t(`experience.list.${experience}.company_description`)}
          </div>
          <h5 className="font-bold">{t(`experience.list.${experience}.role`)}</h5>

          <p className="text-primary ">
            {moment(exp?.startDate).format('MMM YYYY')} {'›'}{' '}
            {exp?.endDate ? moment(exp?.endDate).format('MMM YYYY') : '...'}
            {' ▪ '}
            <span className="font-bold">{t(`experience.list.${experience}.location`)}</span>
          </p>

          <p className="mt-2 text-white/80 ">
            <Trans i18nKey={`experience.list.${experience}.role_description`}></Trans>
          </p>

          {exp?.projects && exp?.projects.length > 0 && (
            <div className="my-4 grid grid-cols-2 gap-4 xl:grid-cols-3">
              {exp?.projects.map((project) => (
                <ProjectSmallCard
                  key={project.id}
                  isActive={selectedProject.id === project.id}
                  experience={experience}
                  project={project}
                  handleClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {selectedProject.id && (
        <div>
          <div className="rounded-lg p-5 xl:ml-10">
            <SwitchTransition>
              <CSSTransition
                key={selectedProject.id}
                addEndListener={(node, done) =>
                  node.addEventListener('transitionend', done, false)
                }
                classNames="fade">
                <ProjectDetails project={selectedProject} experience={experience} />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      )}
    </div>
  );
}
