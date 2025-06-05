export default function Basis() {
  return (
    <>
      <div className="text-2xl space-y-2.5 p-4">
        <h1>spacing scale</h1>
        <hr />
        <div className="flex flex-row text-2xl font-bold text-purple-200 space-x-2.5 bg-black/70 p-10">
          <div className="basis-64 bg-purple-700 flex justify-center p-4 rounded-2xl ">
            01
          </div>
          <div className="basis-64 bg-purple-700 flex justify-center p-4 rounded-2xl ">
            02
          </div>
          <div className="basis-128 bg-purple-700 flex justify-center p-4 rounded-2xl ">
            03
          </div>
        </div>
      </div>
      <div className="text-2xl space-y-2.5 p-4">
        <h1>container scale</h1>
        <hr />
        <div className="flex flex-row text-2xl font-bold text-purple-200 space-x-2.5 bg-black/60 p-10">
          <div className="basis-3xs bg-purple-700 flex justify-center p-4 rounded-2xl ">
            01
          </div>
          <div className="basis-2xs bg-purple-700 flex justify-center p-4 rounded-2xl ">
            02
          </div>
          <div className="basis-xs bg-purple-700 flex justify-center p-4 rounded-2xl ">
            03
          </div>
          <div className="basis-sm bg-purple-700 flex justify-center p-4 rounded-2xl ">
            04
          </div>
        </div>
      </div>
      <div className="text-2xl space-y-2.5 p-4">
        <h1>basis-1/2</h1>
        <hr />
        <div className="flex flex-row text-2xl font-bold text-purple-200 space-x-2.5 bg-black/60 p-10">
          <div className="basis-1/2 bg-purple-700 flex justify-center p-4 rounded-2xl ">
            01
          </div>
          <div className="basis-1/3 bg-purple-700 flex justify-center p-4 rounded-2xl ">
            02
          </div>
          <div className="basis-1/3 bg-purple-700 flex justify-center p-4 rounded-2xl ">
            03
          </div>
          <div className="basis-1/3 bg-purple-700 flex justify-center p-4 rounded-2xl ">
            04
          </div>
        </div>
      </div>
      <div className="text-2xl space-y-2.5 p-4">
        <h1>custom value</h1>
        <hr />
        <div className="flex flex-row text-2xl font-bold text-purple-200 space-x-2.5 bg-black/60 p-10">
          <div className="basis-[30vw] bg-purple-700 flex justify-center p-4 rounded-2xl ">
            01
          </div>
          <div className="basis-[60vw] bg-purple-700 flex justify-center p-4 rounded-2xl ">
            02
          </div>
          <div className="basis-[20vw] bg-purple-700 flex justify-center p-4 rounded-2xl ">
            03
          </div>
          <div className="basis-[40vw] bg-purple-700 flex justify-center p-4 rounded-2xl ">
            04
          </div>
        </div>
      </div>


      <div className="flex flex-row">
        <div className="basis-3xs">
        <img className="" src="/img/ataturk.jpg" alt="" /></div>
        <div className="basis-2xs"><img src="/img/ataturk.jpg" alt="" /></div>
        <div className="basis-sm"><img src="/img/ataturk.jpg" alt="" /></div>
        <div className="basis-xs"><img src="/img/ataturk.jpg" alt="" /></div>
      </div>
    </>
  );
}
