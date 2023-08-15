const SectionTitle = ({span,h2,p}) => {
  return (
    <div className="flex flex-col items-center gap-2 py-20 px-8">
      <span className="text-2xl uppercase tracking-widest">{span}</span>
      <h2 className="text-2xl capitalize tracking-widest">{h2}</h2>
      <p className="w-full lg:w-3/5 text-gray-500 text-center text-xl capitalize">{p}</p>
    </div>
  );
};

export default SectionTitle;
