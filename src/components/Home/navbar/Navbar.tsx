import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import NavbarItem from './NavbarItem';
import { LinkedInButton, GithubButton } from './SocialButton';

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState<boolean>(false);

  const { t } = useTranslation();

  const navigation = ['intro', 'experience', 'skills', 'projects', 'education', 'contact'];

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
        isTop ? '' : 'bg-black/90'
      } fixed top-0 left-0 right-0 z-10 mx-auto flex select-none items-center justify-between px-8 tracking-wide transition-all duration-700 ease-in-out xl:container xl:my-5 xl:rounded-xl xl:pr-4 xl:pl-1`}>
      <div>
        <div className="xl:hidden">
          <button
            className="flex h-full w-full items-center justify-center bg-transparent text-white focus:outline-none"
            aria-label="Menu">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="hidden xl:flex">
          {navigation.map((key, index, arr) => (
            <NavbarItem
              key={key}
              id={key}
              title={t(`${key}.title`)}
              isBottom={isBottom}
              isLast={index === arr.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center text-right">
        <LinkedInButton url="https://www.linkedin.com/in/quentin-desbois/" />
        <GithubButton url="https://github.com/quentintin" />
        <VerticalDivider />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

function VerticalDivider() {
  return <div className="mx-5 h-7 w-0.5 rounded-full bg-white/30" />;
}
