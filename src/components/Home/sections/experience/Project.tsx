import { useTranslation, Trans } from 'react-i18next';
import { TechLabel } from '../../../common/Label';

export function ProjectSmallCard({
  isActive,
  project,
  experience,
  handleClick,
}: {
  isActive: boolean;
  project: any;
  experience: string;
  handleClick: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div
      onClick={() => handleClick()}
      className={`${
        isActive ? ' saturate-100' : 'opacity-70 saturate-0'
      } cursor-pointer overflow-hidden rounded-2xl bg-white/5 text-white  transition-all duration-500 ease-out hover:scale-105 hover:opacity-100 hover:shadow-lg hover:saturate-100 xl:my-8 `}>
      <img
        className={`h-24 w-full object-cover`}
        src={`/images/experience/${experience}/${project.id}_thumbnail.webp`}
        alt="thumbnail of project"
      />
      <div className="px-3 py-2">
        <div className=" text-sm font-black">
          {t(`experience.list.${experience}.projects.${project.id}.title`)}
        </div>
        <p className="text-xs text-white/70">
          {t(`experience.list.${experience}.projects.${project.id}.short_description`)}
        </p>
      </div>
    </div>
  );
}

export function ProjectDetails({ project, experience }: { project: any; experience: string }) {
  return (
    <div className="flex flex-col items-center ">
      <img
        className={`mb-5 h-64 rounded object-scale-down`}
        src={`/images/experience/${experience}/${project.id}.webp`}
        alt="project thumbnail"
      />

      <span>
        <Trans
          i18nKey={`experience.list.${experience}.projects.${project.id}.fullTitle`}></Trans>
      </span>
      <p className="my-2 text-sm text-white/80">
        <Trans
          i18nKey={`experience.list.${experience}.projects.${project.id}.description`}></Trans>
      </p>
      <div className="flex flex-wrap items-center justify-center">
        {project.technos.map((techno: string) => (
          <TechLabel key={techno} techno={techno} />
        ))}
      </div>
    </div>
  );
}
