

export default function BoxSizing() {
  return (
    <>
      <div className="box-border size-1/4 p-4 border-2 m-2.5 ">
        <img className="aspect-[1.618/1]" src="/img/ataturk.jpg" alt="" />
      </div>
      <div className="box-content size-1/3 p-2 m-2.5 border-2 ">
        <img className="aspect-retro" src="/img/enverpasa.jpg" alt="" />
      </div>
      <div className="w-64 p-4 border border-blue-500 box-content">
        Box Content (Varsayılan gibi davranır)
      </div>
      <div className="w-64 p-4 border border-green-500 box-border mt-4">
        Box Border (Padding ve border dahil!)
      </div>
    </>
  );
}
