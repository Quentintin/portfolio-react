import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import global from '../../config/global';
const colors = require('tailwindcss/colors');

export function TechLabel({
  techno: techId,
  colored = false,
}: {
  techno: string;
  colored?: boolean;
}) {
  const { t } = useTranslation();

  const [isHovering, setIsHovering] = useState(false);
  const techno = global.technologies.find((tech) => tech.id === techId);
  //TODO : Get color rended
  const [mainColor = 'gray', shade = '500'] = techno?.color?.split('-') ?? [];
  return (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        background: isHovering || colored ? `${colors[mainColor][shade]}` : '',
      }}
      className={`${
        isHovering || colored ? `saturate-100` : 'saturate-50'
      } m-1 inline-flex select-none items-center rounded  bg-white/40 px-2 py-0.5  font-bold text-black duration-300 ease-out hover:scale-105 `}>
      <span className="text-md">{techno?.icon}</span>
      <div className="ml-1">{t(`common.${techId}`)}</div>
    </span>
  );
}
