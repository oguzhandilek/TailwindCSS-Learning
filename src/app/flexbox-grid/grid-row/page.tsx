import { rowClass } from "./data";

export default function GridRow() {
  return (
    <>
      <div className="p-4 text-2xl font-semibold space-y-2.5">
        <h1>row-span-2 or row-span-4</h1>
        <hr />
        <div className="bg-black/50 row-start-1 col-start-1 grid grid-rows-3 grid-flow-col gap-1">
          <div className="bg-fuchsia-700 row-span-3 flex items-center justify-center text-fuchsia-200 rounded-xl m-4 ">
            01
          </div>
          <div className="bg-fuchsia-900 col-span-2 flex items-center justify-center text-fuchsia-400 rounded-xl m-4 ">
            02
          </div>
          <div className="bg-fuchsia-700 col-span-2 row-span-2 flex items-center justify-center text-fuchsia-200 rounded-xl m-4">
            03
          </div>
        </div>
      </div>
      <div className="p-4 text-2xl font-semibold space-y-2.5">
        <h1>row-start-2 or row-end-3</h1>
        <hr />
        <div className="bg-black/50 row-start-1 col-start-1 grid grid-rows-5 grid-flow-col gap-1">
          <div className="bg-blue-500 row-span-2 row-start-2 row-end-6 flex items-center justify-center text-blue-200 rounded-xl m-1 ">
            01
          </div>
          <div className="bg-blue-500 row-span-2 row-start-2 row-end-4 flex items-center justify-center text-blue-200 rounded-xl m-1 ">
            02
          </div>
          <div className="bg-blue-500 row-start-1 row-end-4  flex items-center justify-center text-blue-200 rounded-xl m-1 ">
            03
          </div>
        </div>
      </div>

      <div className="table table-fixed w-auto p-4 m-4 ">
        <div className="table-header-group bg-black text-white font font-semibold">
          <div className="table-row text-left">
            <div className="table-cell px-4 py-2 ">Class</div>
            <div className="table-cell px-4 py-2 ">Styless</div>
          </div>
        </div>
        <div className="table-row-group bg-black">
          {rowClass.map((row) => (
            <div className="table-row">
              <div className="table-cell px-4 py-2 text-sky-400">
                <code>{row.class}</code>
              </div>
              <div className="table-cell px-4 py-2 text-violet-400">
                <code>{row.styles}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
