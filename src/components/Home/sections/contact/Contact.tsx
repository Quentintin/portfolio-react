import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Element name="contact" className="container mx-auto mt-12 mb-40 ">
      <h1 className="my-6 text-right">{t('contact.title')}</h1>
      <div className="flex flex-wrap sm:flex-nowrap">
        <form
          name="contact"
          className="mt-8 flex w-full flex-col md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
          <h2 className="title-font mb-1 text-3xl font-medium text-white sm:text-4xl">
            Hire Me
          </h2>
          <p className="mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum suscipit officia
            aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="text-sm leading-7 text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            />
          </div>
          <button
            type="submit"
            className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
            Submit
          </button>
        </form>
      </div>
    </Element>
  );
}
