export default function FlexDirection() {
  return (
    <>
      <div className="p-4 text-2xl space-y-2.5">
        <h1>row</h1>
        <hr />
        <div className="flex flex-row space-x-2.5">
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">01</div>
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">02</div>
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">03</div>
        </div>
      </div>
      <div className="p-4 text-2xl space-y-2.5">
        <h1>row-reverse</h1>
        <hr />
        <div className="flex flex-row-reverse space-x-2.5">
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">01</div>
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">02</div>
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">03</div>
        </div>
      </div>
      <div className="p-4 text-2xl space-y-2.5">
        <h1>col</h1>
        <hr />
        <div className="flex flex-col space-y-2.5">
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">01</div>
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">02</div>
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">03</div>
        </div>
      </div>
      <div className="p-4 text-2xl space-y-2.5">
        <h1>col-reverse</h1>
        <hr />
        <div className="flex flex-col-reverse space-y-2.5">
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">01</div>
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">02</div>
          <div className="size-14 bg-purple-700 text-purple-200 font-bold flex justify-center items-center rounded-xl">03</div>
        </div>
      </div>
    </>
  );
}
