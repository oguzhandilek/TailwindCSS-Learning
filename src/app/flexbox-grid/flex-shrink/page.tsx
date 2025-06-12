export default function FlexShrink() {
  return (
    <>
      <div className=" p-4 space-y-2.5 font-semibold text-2xl">
        <h1>shrink</h1>
        <hr />
        <p className="text-xl font-light">Use shrink to allow a flex item to shrink if needed:</p>
        <div className="flex">
          <div className="w-14 h-14 bg-sky-800 text-sky-400 flex flex-none justify-center items-center rounded-xl">
            01
          </div>
          <div className="w-64 h-14 bg-sky-400 text-sky-200 flex shrink items-center justify-center rounded-xl ml-2.5" >02</div>
          <div className="w-14 h-14 bg-sky-800 text-sky-400 flex flex-none items-center justify-center rounded-xl ml-2.5  ">03</div>
        </div>
      </div>
      <div className=" p-4 space-y-2.5 font-semibold text-2xl">
        <h1>shrink-0</h1>
        <hr />
        <p className="text-xl font-light">Use shrink-0 to prevent a flex item from shrinking:</p>
        <div className="flex">
          <div className="w-14 h-14 bg-indigo-800 text-indigo-400 flex flex-1 justify-center items-center rounded-xl">
            01
          </div>
          <div className="w-64 h-14 bg-indigo-400 text-indigo-200 flex shrink-0 items-center justify-center rounded-xl ml-2.5" >02</div>
          <div className="w-14 h-14 bg-indigo-800 text-indigo-400 flex flex-1 items-center justify-center rounded-xl ml-2.5  ">03</div>
        </div>
      </div>
    </>
  );
}
