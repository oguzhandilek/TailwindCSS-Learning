export default function Flex() {
  return (
    <>
      <div className=" text-2xl font-semibold p-4 space-y-2.5 ">
        <h1>flex-number</h1>
        <hr />
        <div className="flex">
          <div className="w-14 h-14 bg-pink-800 text-pink-400 flex flex-none justify-center items-center rounded-xl m-2.5">01</div>
          <div className="w-64 h-14 bg-pink-500 text-pink-200 flex flex-1 justify-center items-center rounded-xl m-2.5">02</div>
          <div className="w-32 h-14 bg-pink-500 text-pink-200 flex flex-1 justify-center items-center rounded-xl m-2.5">03</div>
        </div>
      </div>
      <div className=" text-2xl font-semibold p-4 space-y-2.5 ">
        <h1>flex-initial</h1>
        <hr />
        <div className="flex">
          <div className="w-14 h-14 bg-blue-800 text-blue-400 flex flex-none justify-center items-center rounded-xl m-2.5">01</div>
          <div className="w-64 h-14 bg-blue-500 text-blue-200 flex flex-initial justify-center items-center rounded-xl m-2.5">02</div>
          <div className="w-32 h-14 bg-blue-500 text-blue-200 flex flex-initial justify-center items-center rounded-xl m-2.5">03</div>
        </div>
      </div>
      <div className=" text-2xl font-semibold p-4 space-y-2.5 ">
        <h1>flex-auto</h1>
        <hr />
        <div className="flex">
          <div className="w-14 h-14 bg-violet-800 text-violet-400 flex flex-none justify-center items-center rounded-xl m-2.5">01</div>
          <div className="w-64 h-14 bg-violet-500 text-violet-200 flex flex-auto justify-center items-center rounded-xl m-2.5">02</div>
          <div className="w-32 h-14 bg-violet-500 text-violet-200 flex flex-auto justify-center items-center rounded-xl m-2.5">03</div>
        </div>
      </div>
      <div className=" text-2xl font-semibold p-4 space-y-2.5 ">
        <h1>flex-auto</h1>
        <hr />
        <div className="flex">
          <div className="w-14 h-14 bg-indigo-500 text-indigo-200 flex flex-none justify-center items-center rounded-xl m-2.5">01</div>
          <div className="w-64 h-14 bg-indigo-500 text-indigo-200 flex flex-none justify-center items-center rounded-xl m-2.5">02</div>
          <div className="w-32 h-14 bg-indigo-800 text-indigo-400 flex flex-1 justify-center items-center rounded-xl m-2.5">03</div>
        </div>
      </div>
      <div className=" text-2xl font-semibold p-4 space-y-2.5 ">
        <h1>custom-value</h1>
        <hr />
        <div className="flex">
          <div className="w-14 h-14 bg-indigo-500 text-indigo-200 flex flex-[3_1_auto] justify-center items-center rounded-xl m-2.5">01</div>
          <div className="w-64 h-14 bg-indigo-500 text-indigo-200 flex flex-none justify-center items-center rounded-xl m-2.5">02</div>
          <div className="w-32 h-14 bg-indigo-800 text-indigo-400 flex flex-[3_1_auto] justify-center items-center rounded-xl m-2.5">03</div>
        </div>
      </div>
    </>
  );
}
