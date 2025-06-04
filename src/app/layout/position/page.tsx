export default function Position() {
  return (
    <>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Static</h1>
        <hr />
        <div className="w-96 h-24 static bg-sky-800 text-amber-50 ">
          <p className="p-4 w-72 h-12 bg-sky-600">Static parent</p>
          <div className="absolute bottom-155 left-0 bg-sky-500">
            <p>Absolute child</p>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Relative</h1>
        <hr />
        <div className="w-96 h-24 relative bg-sky-800 text-amber-50 ">
          <p className="p-4 w-72 h-12 bg-sky-600">Relative parent</p>
          <div className="absolute bottom-0 left-0 bg-sky-500">
            <p>Absolute child</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5 flex flex-col">
        <h1 className="text-2xl">Absolute</h1>
        <hr />
        <p>With static positioning</p>
        <div className="relative w-96 h-72 bg-sky-700 rounded-2xl">
          <h1 className="text-amber-50 p-2">Relative Parent </h1>
          <div className="static w-72 h-56 bg-sky-600 rounded-2xl  m-3  flex  flex-col justify-between  p-4">
            <h1 className="p-2 text-amber-50">Static Parent</h1>
            <div className=" static bottom-0 left-0 rounded-lg bg-indigo-500 p-4 text-white shadow-lg">
              Static Child
            </div>
            <div className="inline-block bottom-0 left-0 rounded-lg bg-indigo-100 p-4 text-indigo-600 shadow-lg">
              Static Sibling
            </div>
          </div>
        </div>
        <p>With absolute positioning</p>
        <div className="relative w-96 h-72 bg-sky-700 rounded-2xl">
          <h1 className="text-amber-50 p-2">Relative Parent </h1>
          <div className="static w-72 h-56 bg-sky-600 rounded-2xl  m-3  flex  flex-col justify-between  p-4">
            <h1 className="p-2 text-amber-50">Static Parent</h1>
            <div className=" absolute top-0 right-0 rounded-lg bg-indigo-500 p-4 text-white shadow-lg">
              Absolute Child
            </div>
            <div className="inline-block bottom-0 left-0 rounded-lg bg-indigo-100 p-4 text-indigo-600 shadow-lg  ">
              Static Sibling
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5 ">
        <h1 className="text-2xl">fixed</h1> <hr />
        <div className="relative  w-96 h-60 overflow-auto">
          <div className="sticky w-full z-10 top-0 right-0 left-0 flex items-center bg-gray-700 px-4 py-3  font-semibold text-gray-200 text-4xl">
            Contacts
          </div>
          <div>
            <div>
              <img
                className="size-32 rounded-full"
                src="/img/ataturk.jpg"
                alt=""
              />
              <strong>Gazi Mustafa Kemal Atatürk</strong>
            </div> <hr />
            
            <div>
              <img
                className="size-32 rounded-full"
                src="/img/enverpasa.jpg"
                alt=""
              />
              <strong>Şehit Enver Paşa</strong>
            </div>
            <hr />
            
            <div>
              <img
                className="size-32 rounded-full"
                src="/img/talatpasa.jpg"
                alt=""
              />
              <strong>Şehit Talat Paşa</strong>
            </div>
            <hr />
            <div>
              <img
                className="size-32 rounded-full"
                src="/img/cemalpasa.jpg"
                alt=""
              />
              <strong>Şehit Cemal Paşa</strong>
            </div>
            <hr />
            
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5 ">
        <h1 className="text-2xl">sticky</h1> <hr />
        <div className="relative  w-96 h-60 overflow-auto">
          <div className="sticky w-full z-10 top-0 right-0 left-0 flex items-center bg-gray-700 px-4 py-3  font-semibold text-gray-200 text-4xl">
            Contacts
          </div>
          <div className="sticky w-full z-10 top-0 bg-gray-700 px-4 py-3 font-semibold text-gray-200 text-4xl">A</div>
          <div>
            <div>
              <img
                className="size-32 rounded-full"
                src="/img/ataturk.jpg"
                alt=""
              />
              <strong>Gazi Mustafa Kemal Atatürk</strong>
            </div> <hr />
             <div className="sticky w-full z-10 top-0 bg-gray-700 px-4 py-3 font-semibold text-gray-200 text-4xl">B</div>
            <div>
              <img
                className="size-32 rounded-full"
                src="/img/enverpasa.jpg"
                alt=""
              />
              <strong>Şehit Enver Paşa</strong>
            </div>
            <hr />
             <div className="sticky w-full z-10 top-0 bg-gray-700 px-4 py-3 font-semibold text-gray-200 text-4xl">C</div>
            <div>
              <img
                className="size-32 rounded-full"
                src="/img/talatpasa.jpg"
                alt=""
              />
              <strong>Şehit Talat Paşa</strong>
            </div>
            <hr />
             <div className="sticky w-full z-10 top-0 bg-gray-700 px-4 py-3 font-semibold text-gray-200 text-4xl backdrop-blur-sm">Ç</div>
            <div>
              <img
                className="size-32 rounded-full"
                src="/img/cemalpasa.jpg"
                alt=""
              />
              <strong>Şehit Cemal Paşa</strong>
            </div>
            <hr />
            
          </div>
        </div>
      </div>
    </>
  );
}
