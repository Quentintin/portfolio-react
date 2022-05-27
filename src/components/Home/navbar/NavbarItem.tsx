interface IProps {
  title: string;
  isActive?: boolean;
  handleClick: () => void;
}

export default function NavbarItem({
  title,
  isActive,
  handleClick,
  ...props
}: IProps) {
  return (
    <button
      onClick={handleClick}
      className={`navbar-item mx-4 rounded-full px-5 py-2 font-semibold transition-all duration-300 ease-in hover:bg-white/5 ${
        isActive ? "bg-white/10 text-white" : "text-white/70"
      } `}
    >
      {title}
    </button>
  );
}
