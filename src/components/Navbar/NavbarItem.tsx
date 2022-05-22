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
			className={`navbar-item px-5 py-3 mx-4 hover:bg-white/5 rounded-lg transition-all ease-in duration-500 ${
				isActive ? "bg-white/10 text-white" : "text-white/60"
			} `}
		>
			{title}
		</button>
	);
}
