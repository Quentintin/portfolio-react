import { Element } from 'react-scroll';
import { Trans, useTranslation } from 'react-i18next';
import Card from '../../../common/Card';
import global from '../../../../config/global';

import { useState } from 'react';

import moment from 'moment';
import 'moment/locale/fr';
import i18n from '../../../../config/i18n';

import AOS from 'aos';
import { TechLabel } from '../../../common/Label';

const colors = require('tailwindcss/colors');

export default function Projects() {
  const { t } = useTranslation();

  moment.locale(i18n.language);

  return (
    <Element name="projects" className="my-4 md:my-6 xl:my-8">
      <div className="container mx-auto">
        <Card>
          <h1>{t('projects.title')}</h1>
          <div className="my-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {global.projects
              .sort((a: { date: Date }, b: { date: Date }) =>
                moment(a.date).isAfter(moment(b.date)) ? -1 : 1,
              )
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </Card>
      </div>
    </Element>
  );
}

const Divider = ({ text }: { text?: string }) => (
  <div className="relative flex items-center py-6">
    <div className="flex-grow border-t border-white/30"></div>
    <span className="mx-4 flex-shrink text-white/50">{text}</span>
    <div className="flex-grow border-t border-white/30"></div>
  </div>
);
function ProjectCard({ project }: { project: any }) {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const body = document.querySelector('body');

  const toggleModal = (value: boolean) => {
    body?.classList.toggle('overflow-hidden', value);
    AOS.init({ disable: value });
    setShowModal(value);
  };

  return (
    <div className="grow">
      <button
        onClick={() => toggleModal(true)}
        className={`w-full overflow-hidden rounded-2xl bg-white/10 text-white transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg`}>
        <img
          className={`hidden h-32 w-full object-cover sm:block xl:h-52`}
          src={`/images/projects/${project.id}/thumbnail.webp`}
          alt="thumbnail of project"
        />

        <div className="text-left">
          <div className="flex items-center justify-between bg-white/10 py-1 px-3 xl:px-4 xl:py-3">
            <div className="text-md font-black xl:text-xl">
              {t(`projects.list.${project.id}.title`)}
              <div className="text-xs font-extralight tracking-widest text-white/50 xl:text-sm">
                {moment(project.date).format('YYYY')}
              </div>
            </div>
            <div
              style={{ background: `${colors[project.status_color]['600']}` }}
              className={`flex items-center rounded-md py-0.5 px-2 text-xs text-white xl:rounded-lg xl:py-1 xl:text-sm`}>
              {t(`projects.status.${project.status_text}`)}
            </div>
          </div>

          <div className="p-3">
            <p className="text-sm text-white/70 lg:text-base">
              {t(`projects.list.${project.id}.short_description`)}
            </p>
            <div className="mt-2 flex flex-wrap items-center text-xs lg:text-sm">
              {project.technologies.map((tech: any) => (
                <TechLabel key={tech} techno={tech} colored={false} />
              ))}
            </div>
          </div>
        </div>
      </button>
      {showModal ? (
        <div className="modal">
          <div className="fade-in fixed inset-0 z-50 items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className=" relative mx-auto w-auto  max-w-6xl md:my-6">
              {/*content*/}
              <div className="relative flex w-full flex-col border-black/25 bg-[#222] px-5 py-3 first-letter:outline-none focus:outline-none md:rounded-xl md:border-4">
                {/*header*/}
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl">{t(`projects.list.${project.id}.title`)}</h3>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-lg border-0 bg-white/5 p-1 text-3xl font-thin text-white outline-none transition-all duration-300 ease-out hover:bg-white/30 focus:outline-none"
                    onClick={() => toggleModal(false)}>
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative mt-5 grid grid-cols-1 gap-2">
                  <div>
                    <span className="font-thin">{t(`common.date`)}:</span>
                    <span className="ml-2 font-bold">
                      {moment(project.date).format('YYYY')}
                    </span>
                  </div>
                  <div>
                    <span className="font-thin">{t(`common.status`)}:</span>
                    <span className="ml-2 font-bold">
                      {t(`projects.status.${project.status_text}`)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-thin">{t(`common.technologies`)}:</span>
                    <div className="ml-2 flex flex-wrap items-center text-sm">
                      {project.technologies.map((tech: any) => (
                        <TechLabel key={tech} techno={tech} colored={true} />
                      ))}
                    </div>
                  </div>
                  <Divider text={t(`common.description`)} />

                  <div className="mb-8 grid md:grid-cols-2">
                    <div>
                      <p className="text-left text-white/80">
                        <Trans i18nKey={`projects.list.${project.id}.full_description1`} />
                      </p>
                      {t(`projects.list.${project.id}.full_description2`) && (
                        <p className="mt-5 text-left text-white/80">
                          <Trans i18nKey={`projects.list.${project.id}.full_description2`} />
                        </p>
                      )}
                    </div>
                    <div className="order-first mb-8 px-8 md:order-none  md:mb-0">
                      <img
                        className=" h-auto w-full rounded-lg object-cover shadow-lg"
                        src={`/images/projects/${project.id}/thumbnail.webp`}
                        alt="screenshot of project"
                      />
                    </div>
                  </div>
                  {t(`projects.list.${project.id}.full_description3`) && (
                    <p className="text-left text-white/80">
                      <Trans i18nKey={`projects.list.${project.id}.full_description3`} />
                    </p>
                  )}

                  {project.gallery && project.gallery.length > 0 && (
                    <div>
                      <Divider text={t(`common.gallery`)} />
                      <div className="galery">
                        <div className="col-span-1 col-span-3 col-span-2 col-span-4 col-span-5 col-span-6"></div>
                        <div className="grid grid-flow-row items-center gap-8 overflow-hidden  md:grid-cols-2 xl:grid-cols-6">
                          {project.gallery.map((image: any) => (
                            <div className={`col-span-${image.colSpan || 1}`}>
                              <img
                                className="max-h-92 m-auto rounded-lg object-cover shadow-lg"
                                src={`/images/projects/${project.id}/${image.id}.webp`}
                                alt="screenshot of project"
                              />
                              <p className=" text-center text-xs italic text-white/60">
                                {t(`projects.list.${project.id}.gallery.${image.id}`)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop fixed inset-0 z-40 bg-[#222] md:bg-black/95"></div>
        </div>
      ) : null}
    </div>
  );
}
