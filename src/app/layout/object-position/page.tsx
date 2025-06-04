export default function ObjectPosition() {
  return (
    <>
      <div className="space-y-4 p-4">
        <h1 className="text-2xl">
          Basic Example (object-left and object-bottom-left vs.)
        </h1>
        <hr />
        <div className="flex flex-wrap gap-4 text-center  text-sm mb-1">
          <div>
            <span>object-top-left</span>
            <img
              className="size-96 object-cover object-top-left"
              src="/img/ataturk.jpg"
              alt=""
            />
          </div>
          <div className="">
            <span>object-top</span>
            <img
              className="size-96 object-cover object-top"
              src="/img/ataturk.jpg"
              alt=""
            />
          </div>
          <div>
            <span>object-top-right</span>
            <img
              className="size-96 object-cover object-top-right"
              src="/img/ataturk.jpg"
              alt=""
            />
          </div>
          <div>
            <span>object-left</span>
            <img
              className="size-96 object-cover object-left"
              src="/img/ataturk.jpg"
              alt=""
            />
          </div>
          <div>
            <span>object-center</span>
            <img
              className="size-96 object-cover object-center"
              src="/img/ataturk.jpg"
              alt=""
            />
          </div>
          <div>
            <span>object-right</span>
            <img
              className="size-96 object-cover object-right"
              src="/img/ataturk.jpg"
              alt=""
            />
          </div>
          <div>
            <span>object-bottom-left</span>
            <img
              className="size-96 object-cover object-bottom-left"
              src="/img/ataturk.jpg"
              alt=""
            />
          </div>
          <div>
            <span>object-bottom</span>
            <img
              className="size-96 object-cover object-bottom"
              src="/img/ataturk.jpg"
              alt=""
            />
          </div>
          <div>
            <span>object-bottom-right</span>
            <img
              className="size-96 object-cover object-bottom-right"
              src="/img/ataturk.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Custom value (object-[value])</h1>
        <hr />
        <div className="flex flex-wrap gap-4">
          {" "}
          <div>
            <span>object-[25%_75%]</span>{" "}
            <img
              className="size-96 object-cover object-[25%_75%]"
              src="/img/ataturk.jpg"
              alt="Atatürk"
            />
          </div>
          <div>
            {" "}
            <span>object-[75%_25%]</span>{" "}
            <img
              className="size-96 object-cover object-[75%_25%]"
              src="/img/ataturk.jpg"
              alt="Atatürk"
            />
          </div>
          {/* <div>
            {" "}
            <span>object-(--my-object)</span>{" "}
            <img
              className="size-96 object-cover "
              src="/img/ataturk.jpg"
              alt="Atatürk"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
