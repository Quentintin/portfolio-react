import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function SocialButton(props: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <button className="m-3 flex h-10 w-10 items-center justify-center rounded-full bg-transparent  p-1 text-2xl text-white/70 duration-500 ease-in-out hover:bg-white/20 hover:text-white">
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
