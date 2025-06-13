export default function GridColumn() {
  return (
    <>
      <div className="p-4 space-y-2.5 font-semibold text-2xl">
        <h1>col-span-2 or col-span-4</h1>
        <hr />
        <div className="bg-black/50">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-auto h-16 bg-indigo-800 text-indigo-200 flex justify-center items-center rounded-lg m-4">
              01
            </div>
            <div className="w-auto h-16 bg-indigo-800 text-indigo-200 flex justify-center items-center rounded-lg m-4">
              02
            </div>
            <div className="w-auto h-16 bg-indigo-800 text-indigo-200 flex justify-center items-center rounded-lg m-4">
              03
            </div>
            <div className="w-auto h-16 col-span-2 bg-indigo-500 text-indigo-200 flex justify-center items-center rounded-lg m-4">
              04
            </div>
            <div className="w-auto h-16  bg-indigo-800 text-indigo-200 flex justify-center items-center rounded-lg m-4">
              05
            </div>
            <div className="w-auto h-16  bg-indigo-800 text-indigo-200 flex justify-center items-center rounded-lg m-4">
              06
            </div>
            <div className="w-auto h-16 col-span-2 bg-indigo-500 text-indigo-200 flex justify-center items-center rounded-lg m-4">
              07
            </div>
          </div>
        </div>
        <div>
          <h1>col-start-2 or col-start-3</h1>
          <hr />
          <div className="bg-black/50 ">
            <div className="grid grid-cols-6 gap-4">
              <div className="w-auto h-16 bg-sky-500 text-sky-200  rounded-lg flex justify-center items-center col-span-4 col-start-2 mt-4 hover:bg-sky-800">01</div>
              <div className=" w-auto h-16 bg-sky-500 text-sky-200 rounded-lg flex justify-center items-center col-span-2 col-start-1 ml-4  hover:bg-sky-800">02</div>
              <div className=" w-auto h-16 bg-sky-500 text-sky-200 rounded-lg flex justify-center items-center col-span-2 col-start-5 mr-4  hover:bg-sky-800">03</div>
              <div className=" w-auto h-16 bg-sky-500 text-sky-200 rounded-lg flex justify-center items-center col-span-6 col-start-1 mb-4 ml-4 mr-4  hover:bg-sky-800">03</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
