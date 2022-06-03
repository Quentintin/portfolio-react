import { Link } from 'react-scroll';

interface IProps {
  id: string;
  title: string;
  isBottom: boolean;
  isLast: boolean;
}

export default function NavbarItem({ id, title, isBottom, isLast = false }: IProps) {
  return (
    <Link
      // Small hack to highlight lqst item in the navbar
      activeClass={isBottom && !isLast ? '' : 'bg-white/10 text-white'}
      to={id}
      className="navbar-item mx-4 cursor-pointer rounded-xl px-4 py-2 font-semibold text-white/70 transition-all duration-300 ease-in hover:bg-white/5"
      spy={true}
      offset={-100}
      smooth={true}
      duration={500}>
      {title}
    </Link>
  );
}
