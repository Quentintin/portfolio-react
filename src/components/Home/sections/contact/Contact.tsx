import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Card from '../../../common/Card';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Element name="contact" className="my-4 md:my-6 xl:my-8">
      <div className="container mx-auto">
        <Card>
          <h1>{t('contact.title')}</h1>
          <div className="my-5 flex flex-wrap items-center justify-evenly">
            <a
              href="mailto:contact@quentindesbois.me"
              className="h-16 w-16 rounded-full bg-teal-500/10 text-teal-500 duration-500 ease-out hover:bg-teal-500/20 lg:h-24 lg:w-24 ">
              <div className="flex h-full flex-col items-center justify-center">
                <FaEnvelope className="mb-1 text-xl lg:text-3xl" />
                <div className="text-centertext-xs font-bold lg:text-sm">
                  {t('contact.email')}
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/quentin-desbois/"
              target={'_blank'}
              rel="noreferrer noopener"
              className="h-16 w-16 rounded-full  bg-blue-500/10 text-blue-500 duration-500 ease-out hover:bg-blue-500/20 lg:h-24 lg:w-24 ">
              <div className="flex h-full flex-col items-center justify-center">
                <FaLinkedin className="mb-1  text-xl lg:text-3xl" />
                <div className="text-center text-xs font-bold lg:text-sm">LinkedIn</div>
              </div>
            </a>
            <a
              href="https://github.com/quentintin"
              target={'_blank'}
              rel="noreferrer noopener"
              className="h-16 w-16 rounded-full bg-white/10 text-white duration-500 ease-out hover:bg-white/20 lg:h-24 lg:w-24 ">
              <div className="flex h-full flex-col items-center justify-center">
                <FaGithub className="mb-1  text-xl lg:text-3xl" />
                <div className="text-center text-xs font-bold lg:text-sm">Github</div>
              </div>
            </a>
            <a
              href="https://www.youtube.com/channel/UC0f9enuKE8PPT-9FmqRkiGw"
              target={'_blank'}
              rel="noreferrer noopener"
              className="h-16 w-16 rounded-full bg-red-500/10 text-red-500 duration-500 ease-out hover:bg-red-500/20 lg:h-24 lg:w-24 ">
              <div className="flex h-full flex-col items-center justify-center">
                <IoLogoYoutube className="mb-1  text-xl lg:text-3xl" />
                <div className="text-center text-xs font-bold lg:text-sm">Youtube</div>
              </div>
            </a>
          </div>
        </Card>
      </div>
    </Element>
  );
}
