const GameGrid = () => {
  return (
    <section className="mt-20 grid grid-cols-3 w-[90vw] h-[90vw] min-h-[288px] min-w-[288px] gap-x-4 gap-y-6 xs:w-full xs:h-[405px] sm:h-[450px] sm:mt-6">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="bg-gunmetal rounded-xl shadow-[0_10px] shadow-black/30 sm:rounded-2xl sm:shadow-black/25"
        ></div>
      ))}
    </section>
  );
};
export default GameGrid;

