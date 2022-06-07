import { HiBadgeCheck, HiChip } from 'react-icons/hi';
import { Element } from 'react-scroll';

export default function Skills() {
  return (
    <Element name="skills" className="my-8">
      <div className="container mx-auto px-5  py-10">
        <div className="mb-20 text-center">
          <HiChip className="mb-4 inline-block w-10" />
          <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
            Skills &amp; Technologies
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit ipsa delectus
            eum quo voluptas aspernatur accusantium distinctio possimus est.
          </p>
        </div>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          {[].map((skill) => (
            <div key={skill} className="w-full p-2 sm:w-1/2">
              <div className="flex h-full items-center rounded bg-white/10 p-4">
                <HiBadgeCheck className="mr-4 h-6 w-6 flex-shrink-0 text-green-400" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
