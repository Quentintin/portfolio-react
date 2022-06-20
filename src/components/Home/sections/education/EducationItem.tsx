import { IoArrowForward, IoSchool } from 'react-icons/io5';
import { FaGlobe } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { useTranslation, Trans } from 'react-i18next';
import moment from 'moment';
import i18n from '../../../../config/i18n';

export default function EducationItem({ education }: any) {
  const { t } = useTranslation();
  moment.locale(i18n.language);
  return (
    <li className="mb-8 lg:mb-12">
      <span className="absolute -ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-xl text-transparent shadow-sm ring-4 ring-gray-800 lg:-ml-4 lg:h-8 lg:w-8 lg:text-white lg:ring-8">
        <IoSchool />
      </span>

      <div className="ml-8 lg:ml-14">
        <time className="mb-4 ml-2 flex items-center text-sm tracking-wide text-white/60">
          {moment(education?.startDate).format('YYYY')} <IoArrowForward className="mx-2" />
          {moment(education?.endDate).format('YYYY')}
          <div className="mx-3 h-4 w-0.5 bg-white/10"></div>
          <FaGlobe className="mr-2" />
          {t(`education.list.${education.id}.city`)},{' '}
          {t(`education.list.${education.id}.country`)}
        </time>
        <div className="rounded-lg bg-white/5 px-4 py-2 ">
          <div className="flex items-center ">
            <h3 className="font-black">{t(`education.list.${education.id}.diploma`)}</h3>
            <div className="mx-4  h-6 w-0.5 bg-white/10 "></div>
            <h4 className="block text-lg font-black text-white sm:hidden ">
              {t(`education.list.${education.id}.acronym`)}
            </h4>
            <h4 className="hidden text-lg font-black text-white sm:block">
              {t(`education.list.${education.id}.main_subject`)}
            </h4>
          </div>
          <p className="mb-4 text-base font-normal text-white/80 ">
            {t(`education.list.${education.id}.school`)} -{' '}
            {t(`education.list.${education.id}.university`)}
          </p>
          {education.years?.map((year: string) => (
            <div className="mb-5 border-l-4 border-l-secondary/50 pl-3 text-base font-normal text-white/80 lg:ml-1 lg:border-l-8 lg:pl-5">
              <div className="flex items-center">
                <h5 className=" font-black text-secondary">
                  {t(`education.list.${education.id}.years.${year}.name`)}
                </h5>
                <div className="mx-2"> - </div>
                <h5 className="block font-semibold text-white sm:hidden">
                  <Trans i18nKey={`education.list.${education.id}.years.${year}.acronym`} />
                </h5>{' '}
                <h5 className="hidden font-semibold text-white  sm:block">
                  <Trans i18nKey={`education.list.${education.id}.years.${year}.subject`} />
                </h5>
              </div>
              <p className="text-base font-normal text-white/90">
                <Trans i18nKey={`education.list.${education.id}.years.${year}.description`} />
              </p>
              <div className="flex items-center text-sm font-normal text-white/70">
                <Trans i18nKey={`education.list.${education.id}.years.${year}.details`} />
                <a
                  className="mx-2 rounded bg-secondary py-0.5 px-2 text-xs transition-all duration-300 ease-out hover:bg-secondary/80"
                  target={'_blank'}
                  href={t(`education.list.${education.id}.years.${year}.details_url`)}>
                  {t(`common.see`)}
                </a>
              </div>
            </div>
          ))}
          {t(`education.list.${education.id}.description`).length > 0 && (
            <p className=" py-1 ">
              <Trans i18nKey={`education.list.${education.id}.description`} />
            </p>
          )}
          {t(`education.list.${education.id}.details`).length > 0 && (
            <p className="flex items-center py-1 font-light ">
              <TbCertificate className="mr-2 text-2xl text-primary" />
              <Trans i18nKey={`education.list.${education.id}.details`} />
            </p>
          )}
        </div>
      </div>
    </li>
  );
}
