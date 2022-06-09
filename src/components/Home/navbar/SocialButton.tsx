import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function SocialButton(props: {
  id: string;
  url: string;
  children: React.ReactNode;
}) {
  return (
    <button
      id={`${props.id}_button`}
      aria-label={props.id}
      className="my-3 flex w-10 items-center justify-center rounded-full bg-transparent p-1 text-lg duration-500 ease-in-out  hover:scale-125 hover:text-white lg:text-2xl xl:mx-2">
      <a id={`${props.id}_url`} href={props.url} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </button>
  );
}

export function LinkedInButton(props: { url: string }) {
  return (
    <SocialButton id="linkedin" url={props.url}>
      <FaLinkedin />
    </SocialButton>
  );
}

export function GithubButton(props: { url: string }) {
  return (
    <SocialButton id="github" url={props.url}>
      <FaGithub />
    </SocialButton>
  );
}

export function TwitterButton(props: { url: string }) {
  return (
    <SocialButton id="twitter" url={props.url}>
      <FaTwitter />
    </SocialButton>
  );
}
