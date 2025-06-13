export default function FlexAndGrid() { 
  return (
    <>
      Flexbox And Grid{" "}
      <div className="flex items-center justify-center">
        {" "}
        <h1>Flex</h1>{" "}
        <div className="relative size-32 bg-red-400 rounded-full blur z-0 flex items-center justify-center">
          <div className="absolute size-24 bg-yellow-400/60 rounded-full z-10 flex items-center justify-center ">
            {" "}
          </div>{" "}
        </div>
      </div>
      <div className=" flex flex-row space-x-2.5">
        {" "}
        <div className="size-32 bg-al rounded-full blur-xl "></div>
        <div className="size-32 bg-al rounded-full blur-sm "></div>
        <div className="size-32 bg-al rounded-full blur-xs "></div>
        <div className="size-32 bg-al rounded-full blur-md "></div>
        <div className="size-32 bg-al rounded-full blur-lg "></div>
        <div className="size-32 bg-al rounded-full blur-3xl "></div>
        <div className="size-32 bg-al rounded-full blur-2xl "></div>
        <div className="size-32 bg-al rounded-full blur "></div>
      </div>
    </>
  );
}
