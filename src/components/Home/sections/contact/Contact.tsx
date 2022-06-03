import { Element } from 'react-scroll';

export default function Contact() {
  return (
    <Element name="contact" className="relative my-8">
      <div className="container mx-auto flex flex-wrap sm:flex-nowrap">
        <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-900 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: 'opacity(.85)' }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="relative flex flex-wrap rounded-lg bg-gray-900 py-6 shadow-md">
            <div className="px-6 lg:w-1/2">
              <h2 className="title-font text-xs font-semibold tracking-widest text-white">
                ADDRESS
              </h2>
              <p className="mt-1">
                97 Warren St. <br />
                New York, NY 10007
              </p>
            </div>
            <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
              <h2 className="title-font text-xs font-semibold tracking-widest text-white">
                EMAIL
              </h2>
              <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-white">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
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
