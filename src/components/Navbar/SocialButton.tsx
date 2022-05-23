import { SVGProps } from "react";

export default function SocialButton(props: {
	url: string;
	children: React.ReactNode;
}) {
	return (
		<button className="bg-transparent text-white/70  hover:bg-white/20 hover:text-white duration-500 ease-in-out p-1 rounded-full m-3">
			<a href={props.url} target="_blank" rel="noopener noreferrer">
				{props.children}
			</a>
		</button>
	);
}

export function LinkedInButton(props: { url: string }) {
	return (
		<SocialButton url={props.url}>
			<MdiLinkedin className="w-7 h-7" />
		</SocialButton>
	);
}

export function GithubButton(props: { url: string }) {
	return (
		<SocialButton url={props.url}>
			<MdiGithubFace className="w-7 h-7" />
		</SocialButton>
	);
}

export function TwitterButton(props: { url: string }) {
	return (
		<SocialButton url={props.url}>
			<PhTwitterLogoFill className="w-7 h-7" />
		</SocialButton>
	);
}

/* -------------------------------------------------------------------------- */
/*              ICONES : Find on https://icones.js.org/collection             */
/* -------------------------------------------------------------------------- */

function MdiLinkedin(props: SVGProps<SVGSVGElement>) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
			></path>
		</svg>
	);
}

function MdiGithubFace(props: SVGProps<SVGSVGElement>) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<path
				d="M20.38 8.53c.16-.4.68-1.99-.17-4.14c0 0-1.31-.39-4.3 1.61c-1.25-.33-2.58-.38-3.91-.38c-1.32 0-2.66.05-3.91.38c-2.99-2.03-4.3-1.61-4.3-1.61c-.85 2.15-.33 3.74-.16 4.14C2.61 9.62 2 11 2 12.72c0 6.44 4.16 7.89 10 7.89c5.79 0 10-1.45 10-7.89c0-1.72-.61-3.1-1.62-4.19M12 19.38c-4.12 0-7.47-.19-7.47-4.19c0-.95.47-1.85 1.27-2.58c1.34-1.23 3.63-.58 6.2-.58c2.59 0 4.85-.65 6.2.58c.8.73 1.3 1.62 1.3 2.58c0 3.99-3.37 4.19-7.5 4.19m-3.14-6.26c-.82 0-1.5 1-1.5 2.22c0 1.23.68 2.24 1.5 2.24c.83 0 1.5-1 1.5-2.24c0-1.23-.67-2.22-1.5-2.22m6.28 0c-.83 0-1.5.99-1.5 2.22c0 1.24.67 2.24 1.5 2.24c.82 0 1.5-1 1.5-2.24c0-1.23-.64-2.22-1.5-2.22z"
				fill="currentColor"
			></path>
		</svg>
	);
}

function PhTwitterLogoFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 256 256" {...props}>
			<path
				fill="currentColor"
				d="m245.7 77.7l-30.2 30.1c-6 69.9-65 124.2-135.5 124.2c-14.5 0-26.5-2.3-35.6-6.8c-7.3-3.7-10.3-7.6-11.1-8.8a8 8 0 0 1 3.9-11.9c.2-.1 23.8-9.1 39.1-26.4a108.6 108.6 0 0 1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1 8.1 0 0 1 5.5-6.2a8 8 0 0 1 8.1 1.9c.3.4 33.6 33.2 74.3 43.8V88a48.3 48.3 0 0 1 48.6-48a48.2 48.2 0 0 1 41 24H240a8 8 0 0 1 7.4 4.9a8.4 8.4 0 0 1-1.7 8.8Z"
			></path>
		</svg>
	);
}
