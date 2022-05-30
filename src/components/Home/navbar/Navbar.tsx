import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import NavbarItem from './NavbarItem';
import { LinkedInButton, GithubButton } from './SocialButton';

interface NavigationItem {
  id: string;
  hash: string;
}

const navigation: Array<NavigationItem> = [
  { id: 'intro', hash: '#intro' },
  { id: 'experience', hash: '#experience' },
  { id: 'skills', hash: '#skills' },
  { id: 'projects', hash: '#projects' },
  { id: 'education', hash: '#education' },
  { id: 'contact', hash: '#contact' },
];

export default function Navbar() {
  const [selectedId, setSelectedId] = useState('intro');
  const [onTop, setOnTop] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setOnTop(scrollTop < 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        onTop ? '' : 'bg-black/90'
      } fixed top-0 left-0 right-0 z-10 mx-auto flex select-none items-center justify-between px-8 tracking-wide transition-all duration-700 ease-in-out xl:container xl:my-5 xl:rounded-xl xl:px-4`}>
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
          {navigation.map((item) => (
            <NavbarItem
              key={item.id}
              hash={item.hash}
              handleClick={() => setSelectedId(item.id)}
              title={t(`${item.id}.title`)}
              isActive={selectedId === item.id}
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
