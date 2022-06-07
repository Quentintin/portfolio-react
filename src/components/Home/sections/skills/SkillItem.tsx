import { useEffect } from 'react';

export function SoftSkillIten({
  title,
  icon,
  desc: description,
  color,
}: {
  title: string;
  color: string;
  desc?: string;
  icon: any;
}) {
  const bgColor = `bg-${color}-500/5`;
  const textColor = `text-${color}-500`;
  const iconColor = `text-${color}-200`;
  useEffect(() => {}, []);

  return (
    <div
      className={`flex cursor-pointer flex-col items-center rounded-xl ${bgColor} p-4 duration-300 ease-in-out hover:scale-105`}>
      {/* Useless line permit to generate colors classes */}
      <div className="bg-blue-500/5 bg-red-500/5 bg-violet-500/5 bg-teal-500/5 text-red-200 text-red-500 text-blue-200 text-blue-500 text-violet-200  text-violet-500 text-teal-500 text-teal-200"></div>
      <div className="flex flex-col items-center justify-center">
        <div className={`m-4 text-5xl ${iconColor}`}>{icon}</div>
        <h3 className={`${textColor}`}>{title}</h3>
        <p className="text-center text-white/70">{description}</p>
      </div>
    </div>
  );
}

export function TechSkillItem({
  title,
  color,
  desc: description,
  icon,
}: {
  title: string;
  color?: string;
  desc?: string;
  icon: any;
}) {
  return (
    <div
      className={`flex cursor-pointer items-start duration-300 ease-in-out hover:scale-105  ${color} `}>
      <span className={`flex-shrink-0 rounded-xl bg-white/20 p-3 text-2xl`}>{icon}</span>

      <div className="ml-4">
        <h2 className="text-lg font-bold">{title}</h2>

        <p className="mt-1 text-sm text-white/60">{description}</p>
      </div>
    </div>
  );
}