export default function ObjectFit() {
  return (
    <>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">object-cover</h1>
        <hr />
        <div className="">
          <img
            className="h-48 w-96 object-cover"
            src="/img/ataturk.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">object-contain</h1>
        <hr />{" "}
        <img
          className="h-48 w-96 object-contain bg-red-400"
          src="/img/enverpasa.jpg"
          alt=""
        />
      </div>

      <div className="p-4 space-y-2.5"><h1 className="text-2xl">object-fill</h1><hr /><img className="w-96 h-48 object-fill" src="/img/talatpasa.jpg" alt="" /></div>
      <div className="p-4 space-y-2.5"><h1 className="text-2xl">object-scale-down</h1><hr /><img className="w-96 h-48 object-scale-down bg-red-950" src="/img/cemalpasa.jpg" alt="" /></div>
      <div className="p-4 space-y-2.5"><h1 className="text-2xl">object-none</h1><hr /><img className="w-96 h-48 object-none bg-red-950" src="/img/anitkabir.jpg" alt="" /></div>
    </>
  );
}
