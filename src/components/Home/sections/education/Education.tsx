import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import EducationItem from './EducationItem';
import Card from '../../../common/Card';

import global from '../../../../config/global';

export default function Education() {
  const { t } = useTranslation();
  return (
    <Element name="education" className="my-4 md:my-6 xl:my-8">
      <div className="container mx-auto">
        <Card>
          <div className="container mx-auto  text-white">
            <h1>{t('education.title')}</h1>

            <ol className="ml-4 mt-4 border-l border-white/20 md:ml-12 xl:mt-8 ">
              {global.education.map((item) => (
                <EducationItem key={item.id} education={item} />
              ))}
            </ol>
          </div>
        </Card>
      </div>
    </Element>
  );
}
