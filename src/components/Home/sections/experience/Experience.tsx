import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import global from '../../../../config/global';

import ExperienceItem from './ExperienceItem';
import Card from '../../../common/Card';

import './Experience.scss';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <Element name="experience" className="my-4 md:my-6 xl:my-8">
      <div className="container mx-auto">
        <Card>
          <h1>{t('experience.title')}</h1>

          {global.experiences.map((experience, index, arr) => (
            <div key={experience.id}>
              <ExperienceItem experience={experience.id} />
              {
                // Display the separator only if it's not the last item
                index !== arr.length - 1 && <hr className="border-white/10" />
              }
            </div>
          ))}
        </Card>
      </div>
    </Element>
  );
}
