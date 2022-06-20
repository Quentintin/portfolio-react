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
      activeClass={`${
        isBottom || 'bg-primary/90 text-black hover:text-white hover:bg-primary'
      }`}
      to={id}
      className={`${
        isLast && isBottom && 'bg-primary/90 text-black hover:bg-primary hover:text-white'
      } navbar-item mx-4 cursor-pointer rounded-xl px-4 py-2 font-semibold text-white/70 transition-all duration-300 ease-in hover:bg-white/5`}
      spy={true}
      offset={-100}
      smooth={true}
      duration={500}>
      {title}
    </Link>
  );
}
