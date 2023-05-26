const SectionHeader = ({span,h2,p}) => {
  return (
    <div className="flex flex-col items-center py-10 gap-1">
      <span className="font-semibold uppercase tracking-widest">{span}</span>
      <h2 className="text-2xl">{h2}</h2>
      <p className="w-3/5 text-gray-400">{p}</p>
    </div>
  );
};

export default SectionHeader;
