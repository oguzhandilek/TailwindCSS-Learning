export default function Isolation() {
  return (
    <>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">isolation </h1>
        <hr />
        <div className="relative">
            <img className="absolute w-50 h-50 top-0 left-0 z-10 rounded-b-full" src="/img/ataturk.jpg" alt="" />
            <img className="absolute w-40 h-auto  top-0 left-40 z-20 rounded-b-full" src="/img/enverpasa.jpg" alt="" />
            <img className="absolute w-40 h-50  top-0 left-65 z-30 rounded-b-full" src="/img/talatpasa.jpg" alt="" />
            <img className="absolute w-40 h-auto  top-0 left-85 z-40 rounded-b-full" src="/img/cemalpasa.jpg" alt="" />
            <button className="isolate z-50 absolute top-0 left-0 bg-blue-500 text-white p-2 rounded">Buton</button>
        </div>
      </div>
    </>
  );
}
