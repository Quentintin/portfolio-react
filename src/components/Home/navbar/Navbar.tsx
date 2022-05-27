import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import LanguageSwitcher from './LanguageSwitcher';
import NavbarItem from './NavbarItem';
import { LinkedInButton, GithubButton } from './SocialButton';
import './Navbar.scss';

interface NavigationItem {
  id: string;
  hash: string;
}

const navigation: Array<NavigationItem> = [
  { id: 'home', hash: '#home' },
  { id: 'experience', hash: '#experience' },
  { id: 'skills', hash: '#skills' },
  { id: 'projects', hash: '#projects' },
  { id: 'education', hash: '#education' },
  { id: 'contact', hash: '#contact' },
];

export default function Navbar() {
  const [selectedId, setSelectedId] = useState('home');
  const { t } = useTranslation();

  return (
    <nav className="mx-auto flex h-20 select-none items-center justify-between px-8 tracking-wide xl:container xl:h-32 xl:px-0">
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
            <HashLink smooth to={item.hash}>
              <NavbarItem
                key={item.id}
                handleClick={() => setSelectedId(item.id)}
                title={t(`${item.id}.title`)}
                isActive={selectedId === item.id}
              />
            </HashLink>
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
