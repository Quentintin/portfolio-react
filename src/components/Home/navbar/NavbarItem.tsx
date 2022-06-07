import { Link } from 'react-scroll';

interface IProps {
  id: string;
  title: string;
  isBottom: boolean;
  isLast: boolean;
  handleClick: () => void;
}

export default function NavbarItem({
  id,
  title,
  isBottom,
  isLast = false,
  handleClick,
}: IProps) {
  return (
    <Link
      // Small hack to highlight lqst item in the navbar
      onClick={() => handleClick()}
      activeClass={'bg-yellow-500/90 text-black hover:text-black hover:bg-yellow-500'}
      to={id}
      className={`${
        isLast &&
        isBottom &&
        'bg-yellow-500/90 text-black hover:bg-yellow-500 hover:text-black'
      }navbar-item mx-4 cursor-pointer rounded-xl px-4 py-2 font-semibold text-white/70 transition-all duration-300 ease-in hover:bg-white/5`}
      spy={true}
      offset={-100}
      smooth={true}
      duration={500}>
      {title}
    </Link>
  );
}
