const GameStats = () => {
  const stats = [
    { title: "X (YOU)", score: 14, bgColor: "bg-robin-egg-blue" },
    { title: "TIES", score: 32, bgColor: "bg-powder-blue" },
    { title: "O (CPU)", score: 11, bgColor: "bg-xanthous" },
  ];
  return (
    <section className="mt-6 grid grid-cols-3 gap-x-4">
      {stats.map((item, index) => (
        <div key={index} className={`text-center ${item.bgColor} h-[72px] flex flex-col items-center justify-center rounded-xl`}>
          <span className="text-sm">{item.title}</span>
          <h2 className="text-2xl font-bold">{item.score}</h2>
        </div>
      ))}
    </section>
  );
};
export default GameStats;
