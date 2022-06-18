import { Element } from 'react-scroll';
import { useTranslation, Trans } from 'react-i18next';
import './Skills.scss';

import { SoftSkillIten, TechSkillItem } from './SkillItem';
import global from '../../../../config/global';
import Card from '../../../common/Card';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <Element name="skills" className="my-4 md:my-6 xl:my-8">
      <div className="container mx-auto xl:py-10">
        <Card>
          <h1>{t('skills.title')}</h1>
          <div className="mt-3 mb-5 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-6 xl:mt-5 xl:mb-7">
            <div className="">
              <h2>{t('skills.softs.title')}</h2>
              <p className="text-white/80">
                <Trans i18nKey="skills.description"></Trans>
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
                {global.soft_skills.map((skill) => (
                  <SoftSkillIten
                    key={skill.id}
                    title={t(`skills.softs.${skill.id}.title`)}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          </div>

          <h2>{t('skills.technical.title')}</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {global.tech_skills.map((skill) => (
              <TechSkillItem
                key={skill.id}
                title={t(`skills.technical.${skill.id}.title`)}
                desc={t(`skills.technical.${skill.id}.description`)}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </Card>
      </div>
    </Element>
  );
}
