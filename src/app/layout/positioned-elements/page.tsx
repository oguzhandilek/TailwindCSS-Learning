export default function PositionedElements() {
  return (
    <>
      <div className=" relative p-4 space-y-2.5">
        <h1 className="text-2xl">basic-examples</h1>
        <hr />
        <div className="  grid grid-cols-3 grid-rows-3  gap-4 ">
          {" "}
          <div>
            <p>Pin to top left corner</p>
            <div className="relative size-32 bg-black/50 rounded-2xl">
              <div className="absolute top-0 left-0 size-16 bg-purple-700 rounded-2xl text-2xl font-bold text-purple-200 flex justify-center items-center">
                01
              </div>
            </div>
          </div>
          <div>
            <p>Span top edge</p>
            <div className="relative size-32 bg-black/50 rounded-2xl">
              <div className="absolute inset-x-0 h-16 bg-purple-700 text-purple-200 text-2xl font-bold flex justify-center items-center rounded-2xl  ">
                02
              </div>
            </div>
          </div>
          <div>
            <p>Pin to top right corner</p>
            <div className="relative size-32 bg-black/50 rounded-2xl">
              <div className="absolute top-0 right-0 size-16 bg-purple-700 text-purple-200 font-bold text-2xl flex items-center justify-center rounded-2xl">
                03
              </div>
            </div>
          </div>
          <div>
            <p>Span left edge</p>
            <div className="relative size-32 bg-black/50 rounded-2xl">
              <div className="absolute inset-y-0 left-0  w-16 bg-purple-700 text-purple-200 font-bold text-2xl flex justify-center items-center rounded-2xl">
                04
              </div>
            </div>
          </div>
          <div>
            {" "}
            <p>Fill entire parent</p>
            <div className=" relative size-32 bg-black/50 rounded-2xl">
              <div className="bg-purple-700 text-purple-200 text-2xl font-bold rounded-2xl flex justify-center items-center absolute inset-0">
                05
              </div>
            </div>
          </div>
          <div>
            <p>Span right edge</p>
            <div className="relative size-32 rounded-2xl bg-black/50">
              <div className="absolute right-0 inset-y-0 w-16 bg-purple-700 text-purple-200 text-2xl font-bold flex justify-center items-center rounded-2xl">
                06
              </div>
            </div>
          </div>
          <div>
            <p>Pin to bottom left corner</p>
            <div className="relative size-32 bg-black/50 rounded-2xl">
              <div className="absolute bottom-0 left-0 size-16 bg-purple-700 text-2xl text-purple-200 rounded-2xl font-bold flex justify-center items-center">
                07
              </div>
            </div>
          </div>
          <div>
            <p>Span bottom edge</p>
            <div className="relative size-32 bg-black/50 rounded-2xl">
              <div className="absolute bottom-0 inset-x-0 h-16 bg-purple-700 text-purple-200 font-bold text-2xl flex items-center justify-center rounded-2xl">
                08
              </div>
            </div>
          </div>
          <div className="">
            <p>Pin to bottom right corner</p>
            <div className="relative size-32 bg-black/50 rounded-2xl">
              <div className=" absolute right-0 bottom-0 size-16  flex items-center justify-center text-2xl font-bold text-purple-200 bg-purple-700 rounded-2xl">
                09
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Negative Values</h1>
        <hr />
        <div className="relative w-48 h-16 bg-black/50 rounded-2xl">
          {" "}
          <div className="absolute inset-0 flex items-center justify-center font-semibold text-2xl text-purple-200">
            Basket
          </div>
          <div className="absolute -top-2 -right-2 size-10 rounded-xl text-purple-200 font-bold bg-purple-700 flex items-center justify-center ">
            +3
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Logical properties</h1>
        <hr />
        <p>
          Use <code>start-0</code> or <code>end-4</code> utilities like{" "}
          <code>start-0</code> and <code>end-4</code> to set the{" "}
          <code>inset-inline-start</code> and <code>inset-inline-end</code>{" "}
          logical properties, which map to either the left or right side based
          on the text direction.
        </p>
        <div className="flex space-x-2.5">
          <div dir="ltr">
            <div className="relative size-32 bg-black/50 rounded-2xl">
              <div className="absolute start-0 top-0 size-14 bg-purple-700 rounded-2xl"></div>
            </div>
          </div>
          <div dir="rtl">
            <div className="relative size-32 bg-black/50 rounded-2xl">
              <div className="absolute start-0 top-0 size-14 bg-purple-700 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
