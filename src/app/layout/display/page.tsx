export default function Display() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Block and Inline</h1>
        <hr />
        <p>
          When controlling the flow of text, using the CSS property{" "}
          <span className="inline">display: inline </span>will cause the text
          inside the element to wrap normally.
        </p>
        <p>
          While using the property{" "}
          <span className="inline-block">display: inline-block</span> will wrap
          the element to prevent the text inside from extending beyond its
          parent.
        </p>
        <p>
          Lastly, using the property{" "}
          <span className="block">display: block</span> will put the element on
          its own line and fill its parent.
        </p>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Flow Root</h1>
        <hr />
        <div className="flow-root bg-al">
          <div className="my-4">
            {" "}
            Well, let me tell you something, funny boy. Y'know that little
            stamp, the one that says "New York Public Library"? Well that may
            not mean anything to you, but that means a lot to me. One whole hell
            of a lot.
          </div>
        </div>
        <div className="flow-root bg-amber-300">
          <div className="my-4">
            Sure, go ahead, laugh if you want to. I've seen your type before:
            Flashy, making the scene, flaunting convention. Yeah, I know what
            you're thinking. What's this guy making such a big stink about old
            library books? Well, let me give you a hint, junior.
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Flex</h1> <hr />
        <div className="flex items-center">
          <img
            className="w-30 border-0 rounded-2xl"
            src="/img/enverpasa.jpg"
            alt=""
          />
          <div className="grid grid-cols-1 p-2">
            {" "}
            <strong>Şehid-i Alâ Gaz-î Nâmdar</strong>
            <span>Enver Paşa</span>
          </div>
        </div>
        <div className="flow-root bg-gray-300">
          <h2>Inline Flex </h2> <hr />
          <p>
            Beni bir gün sokakta vuracaklar. Alnımdan kan akarak yere
            serileceğim, Yatakta ölmek nasip olmayacak. Ziyanı yok, varsın
            vursunlar. Vatan benim ölümümle bir şey kaybedecek değildir.{" "}
            <span className="block">
              Bir{" "}
              <span className="inline-flex items-baseline">
                <img
                  className="mx-1 size-7 self-center rounded-full"
                  src="/img/talatpasa.jpg"
                  alt=""
                />
                <span> Talat</span>
              </span>{" "}
              gider, bin Talat yetişir!
            </span>
          </p>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Grid</h1>
        <hr />
        <div className="size-80 h-80 grid grid-cols-3 grid-rows-3 gap-4">
          {array.map((e, index) => (
            <div
              className="bg-pink-500 flex items-center justify-center text-2xl font-bold"
              key={index}
            >
              {"0" + e}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 space-y-2.5 space-x-5">
        <h1 className="text-2xl">Inline Grid</h1>
        <hr />
        <span className="size-80 h-80 inline-grid grid-cols-3  gap-4">
          {array.map((e, index) => (
            <span
              className="bg-pink-500 flex items-center justify-center text-2xl font-bold"
              key={index}
            >
              {"0" + e}
            </span>
          ))}
        </span>
        <span className="size-80 h-80 inline-grid grid-cols-3  gap-4">
          {array.map((e, index) => (
            <span
              className="bg-pink-500 flex items-center justify-center text-2xl font-bold"
              key={index}
            >
              {"0" + e}
            </span>
          ))}
        </span>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Contents</h1> <hr />
        <div className="flex text-4xl font-bold ">
          <div className="flex-1 mr-2.5  bg-purple-500">01</div>
          <div className="contents">
            <div className="flex-1 mr-2.5 bg-purple-500">02</div>
            <div className="flex-1 mr-2.5 bg-purple-500">03</div>
          </div>
          <div className="flex-1 mr-2.5 bg-purple-500">04</div>
        </div>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Table</h1> <hr />
        <div className="table w-full table-fixed">
          <div className="table-header-group bg-slate-700 text-white font-semibold">
            <div className="table-row text-left ">
              <div className="table-cell px-4 py-2 ">Poster</div>
              <div className="table-cell px-4 py-2">Unvanı</div>
              <div className="table-cell px-4 py-2">Adı</div>
            </div>
          </div>
          <div className="table-row-group ">
            <div className="table-row">
              <div className="table-cell text-left px-4 py-2 ">
                <img
                  className="size-80 rounded-2xl"
                  src="/img/ataturk.jpg"
                  alt="Atatürk"
                />
              </div>
              <div className="table-cell text-left align-middle px-4 py-2  ">
                Başkomutan
              </div>
              <div className="table-cell text-left align-middle px-4 py-2">
                Mustafa Kemal ATATÜRK
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-left px-4 py-2 ">
                <img
                  className="size-80 rounded-2xl"
                  src="/img/enverpasa.jpg"
                  alt=""
                />
              </div>
              <div className="table-cell text-left align-middle px-4 py-2">
                Gaz-i Namdar Şehid-i Alâ
              </div>
              <div className="table-cell text-left align-middle px-4 py-2">
                Enver Paşa
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-left px-4 py-2 ">
                <img
                  className="size-80 rounded-2xl"
                  src="/img/TalatPasa.jpg"
                  alt=""
                />
              </div>
              <div className="table-cell text-left align-middle px-4 py-2">
                Şehit
              </div>
              <div className="table-cell text-left align-middle px-4 py-2">
                Talat Paşa
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-left px-4 py-2 ">
                <img
                  className="size-80 rounded-2xl"
                  src="/img/cemalpasa.jpg"
                  alt=""
                />
              </div>
              <div className="table-cell text-left align-middle px-4 py-2">
                Şehit
              </div>
              <div className="table-cell text-left align-middle px-4 py-2">
                Cemal Paşa
              </div>
            </div>
          </div>
          <div className="table-footer-group  bg-slate-700">
            <div className="table-cell  bg-slate-700 px-4"> </div>
            <div className="table-cell  bg-slate-700 px-4 text-white font-semibold text-center">
              {" "}
              Türk Büyükleri
            </div>
            <div className="table-cell  bg-slate-700 px-4"> </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Hidden</h1> <hr />
        <div className="flex">
          <div className="text-4xl font-bold bg-purple-500 text-white p-2 mr-2.5">
            01
          </div>
          <div className="hidden text-4xl font-bold bg-purple-500 text-white p-2 mr-2.5">
            02
          </div>
          <div className="text-4xl font-bold bg-purple-500 text-white p-2 mr-2.5">
            03
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Screen-reader only</h1> <hr />
        <a  href="#">Başa Dön
          <img src="/img/ataturk.jpg" alt="" />
          <span className="sr-only">Gazi Mustafa Kemal Atatürk</span>
        </a>
      </div>
      <div className="p-4 space-y-2.5">
        <h1 className="text-2xl">Screen-reader only</h1> <hr />
        <a  href="#">Başa Dön
          <img src="/img/enverpasa.jpg" alt="" />
          <span className="sr-only sm:not-sr-only">Gaz-i Namdar Şehid-i Alâ Enver Paşa</span>
        </a>
      </div>

    </>
  );
}
