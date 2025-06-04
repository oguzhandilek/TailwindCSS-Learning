export default function BoxDecorationBreak() {
  return (
    <>
      <div className="mt-3">
        <span className="text-4xl box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 ">
          Hello <br /> World
        </span>{" "}
        <br />
        <span className="text-4xl box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500">
          Hello
          <br />
          World
        </span>
      </div>
      <div className="mt-5">
        {" "}
        <span className="text-4xl box-decoration-slice bg-linear-to-r bg-red-800 to-white">
          Yaşa Mustafa Kemal Paşa Yaşa
          <br className=""/> Adın Yazılacak Mücevher Taşa!
        </span>
      </div>
    </>
  );
}
