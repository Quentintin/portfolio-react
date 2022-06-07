import { IoSchool } from 'react-icons/io5';

export default function EducationItem() {
  return (
    <li className="mb-12">
      <span className="absolute -ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-xl shadow-sm ring-8 ring-gray-800">
        <IoSchool />
      </span>
      <div className="ml-10 xl:ml-20">
        <div className="mb-2 flex items-center">
          <h3 className=" mr-4 ">Master</h3>
          <h4 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            Electronics, electrical energy, automation
          </h4>
        </div>
        <time className="mb-2 block text-sm font-light leading-none text-white/50">
          2012 › 2014 ▪ Joseph Fourier University, Grenoble ▪ France
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts, kanban board,
          calendar, and pre-order E-commerce &amp; Marketing pages.
        </p>
        <svg
          className="mr-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
            clipRule="evenodd"></path>
        </svg>{' '}
        Download ZIP
      </div>
    </li>
  );
}
