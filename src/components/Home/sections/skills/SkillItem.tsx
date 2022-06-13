import { useEffect } from 'react';

export function SoftSkillIten({
  title,
  icon,
  color,
}: {
  title: string;
  color: string;
  icon: any;
}) {
  const bgColor = `bg-${color}-500/5`;
  const textColor = `text-${color}-500`;
  const iconColor = `text-${color}-200`;
  useEffect(() => {}, []);

  return (
    <div
      className={`flex select-none flex-col items-center justify-center rounded-xl ${bgColor} p-6 duration-300 ease-in-out hover:scale-105`}>
      {/* Useless line permit to generate colors classes */}
      <div className="bg-blue-500/5 bg-red-500/5 bg-violet-500/5 bg-teal-500/5 text-red-200 text-red-500 text-blue-200 text-blue-500 text-violet-200  text-violet-500 text-teal-500 text-teal-200"></div>
      <div className="flex flex-col items-center justify-center">
        <div className={`mb-2 text-4xl ${iconColor}`}>{icon}</div>
        <h3 className={`${textColor} text-center text-xl`}>{title}</h3>
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
      className={`flex select-none items-start duration-300 ease-in-out hover:scale-105  ${color} `}>
      <span className={`flex-shrink-0 rounded-xl bg-white/20 p-3 text-2xl`}>{icon}</span>

      <div className="ml-4">
        <h4 className="text-md font-bold">{title}</h4>

        <p className="mt-1 text-sm text-white/60">{description}</p>
      </div>
    </div>
  );
}
