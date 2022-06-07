import { Element } from 'react-scroll';
import './Experience.scss';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  return (
    <Element name="experience" className="my-8">
      <div className="container mx-auto">
        <h1 className="my-6 text-right">{t('experience.title')}</h1>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="block overflow-hidden rounded-2xl  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <img
              className="h-56 w-full object-cover"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />

            <div className="rounded-b-2xl bg-black/30 p-4">
              <p className="text-xs text-gray-500">website.com</p>

              <h5 className="text-sm text-white">
                How to position your furniture for positivity
              </h5>

              <p className="mt-1 text-xs text-white/30">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid
                accusamus? Sint, sequi voluptas.
              </p>
            </div>
          </div>
          <div className="block overflow-hidden rounded-2xl  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <img
              className="h-56 w-full object-cover"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />

            <div className="rounded-b-2xl bg-black/30 p-4">
              <p className="text-xs text-gray-500">website.com</p>

              <h5 className="text-sm text-white">
                How to position your furniture for positivity
              </h5>

              <p className="mt-1 text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid
                accusamus? Sint, sequi voluptas.
              </p>
            </div>
          </div>
          <div className="block overflow-hidden rounded-2xl  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <img
              className="h-56 w-full object-cover"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />

            <div className="rounded-b-2xl bg-black/30 p-4">
              <p className="text-xs text-gray-500">website.com</p>

              <h5 className="text-sm text-white">
                How to position your furniture for positivity
              </h5>

              <p className="mt-1 text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid
                accusamus? Sint, sequi voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
