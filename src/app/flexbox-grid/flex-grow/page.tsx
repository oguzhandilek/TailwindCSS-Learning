export default function FlexFrow() {
  return (
    <>
      {" "}
      <div className="text-2xl font-semibold p-4 space-y-2.5">
        <h1>Allowing items to grow</h1>
        <hr />
        <div className="flex space-x-2.5 space-y-2.5">
          <div className="w-14 h-14 bg-sky-800 text-sky-400 flex flex-none justify-center items-center rounded-xl ">
            01
          </div>
          <div className="w-14 h-14 grow bg-sky-500 text-sky-200 flex flex-none justify-center items-center rounded-xl ">
            02
          </div>
          <div className="w-14 h-14 bg-sky-500 text-sky-200 flex flex-none justify-center items-center rounded-xl ">
            03
          </div>
        </div>
      </div>
      <div className="text-2xl font-semibold p-4 space-y-2.5">
        <h1>grow-number</h1>
        <hr />
        <div className="flex space-x-2.5 space-y-2.5">
          <div className="w-14 h-14 grow-3 bg-indigo-800 text-indigo-400 flex  justify-center items-center rounded-xl ">
            01
          </div>
          <div className="w-14 h-14 grow-7 bg-indigo-500 text-indigo-200 flex flex-none justify-center items-center rounded-xl ">
            02
          </div>
          <div className="w-14 h-14 grow-3 bg-indigo-800 text-indigo-400 flex justify-center items-center rounded-xl ">
            03
          </div>
        </div>
      </div>
      <div className="text-2xl font-semibold p-4 space-y-2.5">
        <h1>grow-0</h1>
        <hr />
        <div className="flex space-x-2.5 space-y-2.5">
          <div className="w-14 h-14 grow-3 bg-pink-800 text-pink-400 flex  justify-center items-center rounded-xl ">
            01
          </div>
          <div className="w-14 h-14 grow-0 bg-pink-500 text-pink-200 flex flex-none justify-center items-center rounded-xl ">
            02
          </div>
          <div className="w-14 h-14 grow-3 bg-pink-800 text-pink-400 flex justify-center items-center rounded-xl ">
            03
          </div>
        </div>
      </div>
      <div className="text-2xl font-semibold p-4 space-y-2.5">
        <h1>custom grow</h1>
        <hr />
        <div className="flex space-x-2.5 space-y-2.5">
          <div className="w-14 h-14 grow-[25vw] bg-pink-800 text-pink-400 flex  justify-center items-center rounded-xl ">
            01
          </div>
          <div className="w-14 h-14 grow-[100vw] bg-pink-500 text-pink-200 flex flex-none justify-center items-center rounded-xl ">
            02
          </div>
          <div className="w-14 h-14 grow-[25vw] bg-pink-800 text-pink-400 flex justify-center items-center rounded-xl ">
            03
          </div>
        </div>
      </div>
    </>
  );
}
