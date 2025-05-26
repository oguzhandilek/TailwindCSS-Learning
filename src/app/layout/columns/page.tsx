

export default function Columns() {
  return (
    <div className="mt-2.5">
     
      <div className="border w-full p-2.5">
        <h1 className="text-4x border-2 w-60 m-2.5 font-bold ">Setting by number</h1>
        <div className="columns-3 space-x-2 space-y-2 ">
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/ataturk.jpg"
            alt=""
          />
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/enverpasa.jpg"
            alt=""
          />
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/talatpasa.jpg"
            alt=""
          />
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/cemalpasa.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-2.5 ">
        <h1>Setting by width</h1>
        <div className="columns-2xs gap-10"><img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/ataturk.jpg"
            alt=""
          />
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/enverpasa.jpg"
            alt=""
          />
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/talatpasa.jpg"
            alt=""
          />
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/cemalpasa.jpg"
            alt=""
          /></div>
      </div>
      <div>
        <h1>Responsive Design</h1>
        <div className="xs:columns-2 xs:gap-2 sm:columns-2 sm:gap-4 md:columns-2 md:gap-8 lg:columns-4xs">
            <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/ataturk.jpg"
            alt=""
          />
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/enverpasa.jpg"
            alt=""
          />
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/talatpasa.jpg"
            alt=""
          />
          <img
            className="aspect-retro border-2 border-amber-400 rounded-full"
            src="/img/cemalpasa.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
