import { FaCode } from 'react-icons/fa';
import { projects } from '../../../../assets/data.js';
import { Element } from 'react-scroll';

export default function Projects() {
  return (
    <Element name="projects" className="my-8">
      <div className=" body-font bg-gray-900 text-gray-400">
        <div className="container mx-auto px-5 py-10 text-center lg:px-40">
          <div className="mb-20 flex w-full flex-col">
            <FaCode className="mx-auto mb-4 inline-block w-10" />
            <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
              Apps I've Built
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis
              repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap">
            {projects.map((project) => (
              <a key={project.image} className="w-100 p-4 sm:w-1/2">
                <div className="relative flex">
                  <img
                    alt="gallery"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="z-5 relative w-full border-4 border-gray-800 bg-gray-900 px-8 py-10 opacity-0 hover:opacity-100">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-green-400">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font mb-3 text-lg font-medium text-white">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
