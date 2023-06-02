const SectionHeader = ({span,h2,p}) => {
  return (
    <div className="flex flex-col items-center gap-1 py-5">
      <span className="font-semibold uppercase tracking-widest">{span}</span>
      <h2 className="text-2xl capitalize">{h2}</h2>
      <p className="w-3/5 text-gray-400 text-center text-xl capitalize">{p}</p>
    </div>
  );
};

export default SectionHeader;
