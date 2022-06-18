import { useState } from 'react';

const colors = require('tailwindcss/colors');

export function SoftSkillIten({
  title,
  icon,
  color,
}: {
  title: string;
  color: string;
  icon: any;
}) {
  return (
    <div
      style={{ background: `${colors[color]['500']}22` }}
      className={`flex h-36 select-none flex-col items-center justify-center rounded-xl p-6 duration-300 ease-in-out hover:scale-105`}>
      {/* Useless line permit to generate colors classes */}
      <div className="flex flex-col items-center justify-center">
        <div className={`mb-2 text-4xl`} style={{ color: `${colors[color]['300']}` }}>
          {icon}
        </div>
        <h3 style={{ color: `${colors[color]['500']}` }} className={`text-center text-xl`}>
          {title}
        </h3>
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
  const [isHovering, setIsHovering] = useState(false);
  const [mainColor = 'gray', shade = '500'] = color?.split('-') ?? [];

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ color: isHovering ? `${colors[mainColor][shade]}` : 'white' }}
      className={`flex select-none items-start duration-300 ease-in-out hover:scale-105`}>
      <span className={`flex-shrink-0 rounded-xl bg-white/20 p-3 text-2xl`}>{icon}</span>

      <div className="ml-4">
        <h4 className="text-md font-bold">{title}</h4>

        <p className="xs:mt-1 text-xs text-white/60 sm:text-sm">{description}</p>
      </div>
    </div>
  );
}
