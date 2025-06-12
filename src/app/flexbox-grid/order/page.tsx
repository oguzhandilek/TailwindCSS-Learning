export default function Order() {
  return (
    <>
      <div className=" text-2xl p-4 space-y-2.5 font-semibold">
        <h1>Explicitly setting a sort order</h1>
        <hr />
        <p className="font-light text-xl">
          Use order-number utilities like order-1 and order-3 to render flex and
          grid items in a different order than they appear in the document:
        </p>
        <div className="flex justify-between">
          <div className=" size-16 bg-sky-400 text-sky-200 flex justify-center items-center rounded-xl order-3">
            01
          </div>
          <div className=" size-16 bg-sky-400 text-sky-200 flex justify-center items-center rounded-xl order-1">
            02
          </div>
          <div className=" size-16 bg-sky-400 text-sky-200 flex justify-center items-center rounded-xl order-2">
            03
          </div>
        </div>
      </div>
      <div className=" text-2xl p-4 space-y-2.5 font-semibold">
        <h1>Ordering items first or last</h1>
        <hr />
        <p className="font-light text-xl">
          Use the order-first and order-last utilities to render flex and grid items first or last:
        </p>
        <div className="flex justify-between">
          <div className=" size-16 bg-sky-400 text-sky-200 flex justify-center items-center rounded-xl order-last">
            01
          </div>
          <div className=" size-16 bg-sky-400 text-sky-200 flex justify-center items-center rounded-xl order-1">
            02
          </div>
          <div className=" size-16 bg-sky-400 text-sky-200 flex justify-center items-center rounded-xl order-2">
            03
          </div>
          <div className=" size-16 bg-sky-400 text-sky-200 flex justify-center items-center rounded-xl order-3">
            04
          </div>
          <div className=" size-16 bg-sky-400 text-sky-200 flex justify-center items-center rounded-xl order-first">
            05
          </div>
        </div>
      </div>
    </>
  );
}
