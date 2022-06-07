import { Element } from 'react-scroll';
import { useTranslation, Trans } from 'react-i18next';
import './Skills.scss';

import { SoftSkillIten, TechSkillItem } from './SkillItem';
import global from '../../../../config/global';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <Element name="skills" className="my-8">
      <div className="container mx-auto py-10">
        <section className="rounded-2xl bg-black/30 text-white">
          <div className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1>{t('skills.title')}</h1>
              <p className="my-4 text-white/80">
                <Trans i18nKey="skills.description"></Trans>
              </p>
            </div>
            <div className="my-10 text-center">
              <h2>• SOFT •</h2>
            </div>
            <div className="my-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
              {global.soft_skills.map((skill) => (
                <SoftSkillIten
                  key={skill.id}
                  title={t(`skills.softs.${skill.id}.title`)}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>

            <div className="mt-15 mb-10 text-center">
              <h2>• TECHNICAL •</h2>
            </div>
            <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {global.tech_skills.map((skill) => (
                <TechSkillItem
                  key={skill.id}
                  title={t(`skills.technologies.${skill.id}.title`)}
                  desc={t(`skills.technologies.${skill.id}.description`)}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
}
