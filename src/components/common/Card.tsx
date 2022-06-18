export default function Card({
  type = 'black',
  children,
}: {
  type?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${
        type === 'black' ? 'bg-black/30 text-white' : 'bg-white/30 text-black'
      } rounded-2xl `}>
      <div className="px-6 py-4 md:py-6 lg:px-8">{children}</div>
    </div>
  );
}
