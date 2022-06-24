import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import NavbarItem from './NavbarItem';
import { LinkedInButton, GithubButton } from './SocialButton';
import global from '../../../config/global';

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation();

  const navigation = ['intro', 'skills', 'experience', 'projects', 'education', 'contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(scrollTop < 50);

      const scrollingElement = e.target.scrollingElement;

      const isBottom =
        scrollingElement.scrollHeight - scrollingElement.scrollTop ===
        scrollingElement.clientHeight;

      setIsBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        !isTop || isMenuOpen ? 'bg-black xl:bg-black/90' : ''
      } fixed right-0 top-0 left-0 z-10 mx-auto flex select-none items-center justify-between px-2 tracking-wide text-white/70 duration-700 ease-in-out xl:container xl:my-5 xl:rounded-xl xl:pr-4 xl:pl-1`}>
      <div className="flex">
        <div className="xl:hidden">
          <button
            className="mx-1 flex h-full w-full items-center justify-center bg-transparent p-2 hover:text-white focus:outline-none"
            aria-label="Menu"
            onClick={() => toggleMenu()}>
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'top-14 bg-black py-4 ' : 'hidden'
          }   absolute right-0 left-0 flex flex-col xl:relative xl:flex xl:flex-row`}>
          {navigation.map((key, index, arr) => (
            <NavbarItem
              key={key}
              id={key}
              title={t(`${key}.title`)}
              isBottom={isBottom}
              handleClick={() => setIsMenuOpen(false)}
              isLast={index === arr.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center text-right">
        <LinkedInButton url={global.url.linkedin} />
        <GithubButton url={global.url.github} />
        <VerticalDivider />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

function VerticalDivider() {
  return <div className="mx-2 h-7 w-[1px] rounded-full bg-white/20 xl:mx-5" />;
}
