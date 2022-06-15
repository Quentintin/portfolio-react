import './Footer.scss';
import MoonTintin from './../../../assets/images/moon_tintin.webp';

export default function Footer() {
  return (
    <footer className="relative right-0 left-0">
      <img src={MoonTintin} alt="Planet" className="max-w-7xl object-cover" />
      <div className="back absolute bottom-0"></div>
      <div className="footer-text absolute bottom-0 left-0 right-0 mb-5 text-center text-lg font-thin text-white shadow-md">
        Made with 🧡 and powered by{' '}
        <span className=" font-bold  text-primary">
          <a target="_blank" rel="noreferrer noopener" href="https://reactjs.org/">
            React
          </a>
        </span>
        ,{' '}
        <span className=" font-bold  text-primary">
          <a target="_blank" rel="noreferrer noopener" href="https://tailwindcss.com/">
            Tailwind
          </a>
        </span>{' '}
        and{' '}
        <span className=" font-bold  text-primary">
          <a target="_blank" rel="noreferrer noopener" href="https://firebase.google.com/">
            Firebase
          </a>
        </span>
      </div>
    </footer>
  );
}
