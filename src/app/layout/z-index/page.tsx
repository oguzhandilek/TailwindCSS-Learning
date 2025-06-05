export default function ZIndex() {
  return (
    <>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Basic Examples</h1>
        <hr />
        <div className="relative h-32 w-100 bg-black/50">
          <img className="absolute size-32 object-cover object-center rounded-full shadow-2xs left-0 z-50" src="/img/ataturk.jpg" alt="ataturk" />
          <img className="absolute size-32 object-cover rounded-full left-20 object-top z-40" src="/img/enverpasa.jpg" alt="" />
          <img className="absolute size-32 object-cover rounded-full left-42 z-30" src="/img/talatpasa.jpg" alt="" />
          <img className="absolute size-32 object-cover rounded-full left-65 z-20" src="/img/cemalpasa.jpg" alt="" />
        </div>
   
      </div>
    </>
  );
}
