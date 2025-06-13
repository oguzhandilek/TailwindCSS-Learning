export default function GridTemplateColumns() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="p-4 space-y-2.5 text-2xl font-semibold">
        <h1>grid-cols-2 or grid-cols-4 and grid-cols-subgrid</h1>
        <hr />
        <div className="grid  gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {numbers.map((number, index) => (
            <div
              className="bg-fuchsia-500 w-32 h-16 rounded-lg text-fuchsia-200 flex items-center justify-center"
              key={index}
            >{`0${number}`}</div>
          ))}
          <div className="col-span-3 grid grid-cols-subgrid gap-4"><div className="bg-pink-400 text-pink-200 w-32 h-16 rounded-lg flex items-center justify-center col-start-2">10</div></div>
        </div>
      </div>
    </>
  );
}
