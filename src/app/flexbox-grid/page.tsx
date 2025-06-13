"use client"
export default function FlexAndGrid() { 
  const handleClick=()=>{
    console.log("clicked");
    
  }
  return (
    <>
      Flexbox And Grid{" "}
      <div className="flex items-center justify-center">
        {" "}
       {" "}
        <div onClick={handleClick} className="relative size-32 bg-red-400 rounded-full  z-0 flex items-center justify-center hover:bg-blue-800 ">
          <div className="absolute size-24 bg-yellow-400/60 rounded-full z-10 inset-x-4 inset-y-4 blur ">
          </div>{" "}
           <h1 className="z-20" >Flex</h1>
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
