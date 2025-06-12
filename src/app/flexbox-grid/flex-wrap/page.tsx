export default function FlexWrap() {
  return (
    <>
      <div className="p-4 space-y-2.5 text-2xl font-semibold ">
        <h1>flex-nowrap</h1>
        <hr />
        <div className="flex flex-nowrap space-x-2.5 ">
          <div className=" bg-sky-500 font-bold text-sky-100 flex items-center justify-center rounded-xl w-7xl">01</div>
          <div className=" bg-sky-500 font-bold text-sky-100 flex items-center justify-center rounded-xl w-7xl">02</div>
          <div className=" bg-sky-500 font-bold text-sky-100 flex items-center justify-center rounded-xl w-7xl">03</div>
        </div>
      </div>
      <div className="p-4 space-y-2.5 text-2xl font-semibold ">
        <h1>flex-wrap</h1>
        <hr />
        <div className="flex flex-wrap ">
          <div className=" bg-sky-500 font-bold text-sky-100 flex items-center justify-center rounded-xl w-3xl m-2.5">01</div>
          <div className=" bg-sky-500 font-bold text-sky-100 flex items-center justify-center rounded-xl w-3xl m-2.5">02</div>
          <div className=" bg-sky-500 font-bold text-sky-100 flex items-center justify-center rounded-xl w-3xl m-2.5">03</div>
        </div>
      </div>
      <div className="p-4 space-y-2.5 text-2xl font-semibold ">
        <h1>flex-wrap-reverse</h1>
        <hr />
        <div className="flex flex-wrap-reverse ">
          <div className=" bg-sky-500 font-bold text-sky-100 flex items-center justify-center rounded-xl w-3xl m-2.5">01</div>
          <div className=" bg-sky-500 font-bold text-sky-100 flex items-center justify-center rounded-xl w-3xl m-2.5">02</div>
          <div className=" bg-sky-500 font-bold text-sky-100 flex items-center justify-center rounded-xl w-3xl m-2.5">03</div>
        </div>
      </div>
    </>
  );
}
