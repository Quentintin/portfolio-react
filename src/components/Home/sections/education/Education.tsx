import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import EducationItem from './EducationItem';
import Card from '../../../common/Card';

export default function Education() {
  const { t } = useTranslation();
  return (
    <Element name="education" className="my-4 md:my-6 xl:my-8">
      <div className="container mx-auto">
        <Card>
          <div className="container mx-auto  text-white">
            <h1 className="mb-12">{t('education.title')}</h1>

            <ol className=" ml-12 border-l border-white/20 ">
              <EducationItem />
              <EducationItem />
              <EducationItem />
            </ol>
          </div>
        </Card>
      </div>
    </Element>
  );
}
