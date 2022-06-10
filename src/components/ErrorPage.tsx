import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="tracking-tightest text-8xl font-black">404</h1>
        <h2
          className="tracking-tightest text-2xl
         font-bold leading-3 text-primary">
          Page not found
        </h2>
        <p className="mt-5 text-xl">The page you are looking for does not exist.</p>
      </div>

      <Link to="/">
        <button className="m-10 flex items-center rounded-full bg-white/10 px-5 py-2 font-bold text-white transition-all duration-300 ease-in hover:bg-white/20">
          <FaArrowLeft className="mr-3" /> Go back to home page
        </button>
      </Link>
    </div>
  );
}
