export default function OverFlow() {
  return (
    <>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">overflow-visible</h1>
        <hr />
        <div className="bg-gray-700 w-96 h-24 p-4  text-amber-50 overflow-visible flex items-center space-x-4">
          <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />
          <div>
            <h1 className=" font-bold text-lg">Cemal Paşa</h1>
            <h2 className="font-semibold text-sm">Şehit</h2>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">overflow-hidden</h1>
        <hr />
        <div className="bg-gray-700 w-96 h-24 p-4  text-amber-50 overflow-hidden flex items-center space-x-4">
          <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />
          <div>
            <h1 className=" font-bold text-lg">Cemal Paşa</h1>
            <h2 className="font-semibold text-sm">Şehit</h2>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">overflow-auto</h1>
        <hr />
        <div className="grid-cols-2 items-center w-64 h-32 overflow-auto ">
          <h1 className="text-4xl ">Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            gravida odio volutpat, fermentum magna ac, faucibus dui. Suspendisse
            eu turpis a diam euismod gravida. Duis at dictum nunc. Fusce sed
            metus nunc. Proin sed neque nibh. Sed commodo, odio eget auctor
            tempus, elit enim fringilla orci, id tristique augue dui at dolor.
            Aliquam ultricies ullamcorper posuere. Donec volutpat consectetur
            elit. Maecenas in iaculis tortor. Suspendisse at ultrices purus.
            Integer varius vel velit ac blandit. Suspendisse potenti. Sed semper
            sapien eget mauris ultrices, nec aliquet ante ultrices. Etiam
            bibendum dui vitae neque eleifend, eu tincidunt felis aliquet.
            Vestibulum vel orci vitae diam interdum vestibulum. Suspendisse
            malesuada leo tempor commodo placerat. Nunc sit amet nibh malesuada,
            pellentesque diam at, efficitur sapien. Integer iaculis turpis
            massa, vel rhoncus enim aliquet nec. Nulla suscipit euismod
            pharetra. Nam condimentum eu dui eget egestas. Duis efficitur sit
            amet nisi id iaculis. Sed consequat congue massa in commodo.
            Curabitur eu augue nisl. Ut iaculis ligula nec lacus dapibus
            maximus. Nulla tincidunt, risus eu pulvinar laoreet, arcu leo
            efficitur augue, a elementum nisl mi ut nibh. Sed nisl orci,
            dignissim in est id, tristique egestas tellus. Duis semper mauris ac
            dolor aliquam, et consectetur dolor mattis. Vestibulum dictum enim
            quis sapien sodales, sit amet aliquam dui auctor. Duis pulvinar et
            risus sit amet cursus. Praesent tempus ultrices sodales. Suspendisse
            vehicula congue finibus. Sed ut massa eros. Cras sed nibh a dolor
            pharetra ornare. Fusce cursus eleifend urna, a elementum justo
            dictum a. Vivamus tincidunt accumsan felis, pharetra aliquam elit
            hendrerit nec. Nam efficitur, leo sed commodo pharetra, lorem ligula
            pellentesque ligula, a egestas ex mi vitae purus. Sed condimentum
            dui ut metus eleifend auctor. Quisque volutpat elementum volutpat.
            In nec libero augue. Aliquam pellentesque viverra lorem eu auctor.
            Vestibulum ut ante mauris. Integer porttitor, eros non congue
            lacinia, lorem ipsum dictum sapien, quis egestas urna nunc eget
            eros. Curabitur eu pellentesque arcu, et scelerisque orci. Duis nec
            massa ligula. Etiam ultrices nunc nec ex elementum accumsan. Nullam
            nec eros vestibulum urna maximus suscipit. Morbi commodo scelerisque
            velit, rutrum viverra est placerat ac. Phasellus libero ex, auctor
            id lacus nec, elementum aliquet mi. Morbi lobortis ante mollis est
            consequat tempus. Fusce fringilla sollicitudin lectus, ut maximus
            nunc laoreet eu. Morbi ornare lacinia ipsum, eget fringilla dolor
            mollis varius. Cras leo justo, molestie non felis in, ultrices
            vulputate ante. Curabitur euismod magna et iaculis luctus. Aenean
            purus nulla, viverra ut facilisis ac, ullamcorper id leo.
          </p>
        </div>
      </div>

       <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">overflow-auto</h1>
        <hr />
        <div className="flex w-64 h-32 overflow-y-auto text-gray-600 ">
         <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />
           <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />
           <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          /> <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />
           <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />

        </div>
      </div>
       <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">overflow-scroll</h1>
        <hr />
        <div className="flex w-64 h-32 overflow-y-scroll text-gray-600 ">
         <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />
           <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />
           <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          /> <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />
           <img
            className="w-30 h-30 object-cover rounded-full"
            src="/img/cemalpasa.jpg"
            alt="Cemal Paşa"
          />

        </div>
      </div>

    </>
  );
}
