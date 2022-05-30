import { HashLink } from 'react-router-hash-link';

interface IProps {
  title: string;
  hash: string;
  isActive?: boolean;
  handleClick: () => void;
}

export default function NavbarItem({ title, isActive, hash, handleClick, ...props }: IProps) {
  return (
    <HashLink smooth to={hash} className="mx-4">
      <button
        onClick={handleClick}
        className={`navbar-item rounded-xl px-4 py-2 font-semibold transition-all duration-300 ease-in hover:bg-white/5 ${
          isActive ? 'bg-white/10 text-white' : 'text-white/70'
        } `}>
        {title}
      </button>
    </HashLink>
  );
}
