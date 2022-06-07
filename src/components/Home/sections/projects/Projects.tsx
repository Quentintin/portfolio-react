import { FaCode } from 'react-icons/fa';
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
          <div className="-m-4 flex flex-wrap"></div>
        </div>
      </div>
    </Element>
  );
}
