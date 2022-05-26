import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function SocialButton(props: {
	url: string;
	children: React.ReactNode;
}) {
	return (
		<button className="text-2xl h-10 w-10 items-center justify-center flex bg-transparent text-white/70  hover:bg-white/20 hover:text-white duration-500 ease-in-out p-1 rounded-full m-3">
			<a href={props.url} target="_blank" rel="noopener noreferrer">
				{props.children}
			</a>
		</button>
	);
}

export function LinkedInButton(props: { url: string }) {
	return (
		<SocialButton url={props.url}>
			<FaLinkedin />
		</SocialButton>
	);
}

export function GithubButton(props: { url: string }) {
	return (
		<SocialButton url={props.url}>
			<FaGithub />
		</SocialButton>
	);
}

export function TwitterButton(props: { url: string }) {
	return (
		<SocialButton url={props.url}>
			<FaTwitter />
		</SocialButton>
	);
}
