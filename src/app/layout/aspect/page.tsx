

export default function Aspects() {
  return (
    <>
 
      <div className="space-y-2.5">
        <div>
          <h1>Basic Example</h1>
          <img
            className="aspect-4/3 object-cover rounded-full "
            src="/img/ataturk.jpg"
            alt=""
          />
        </div>
        <div className="w-full max-w-3xl border-2">
         
          <h1>Using a video</h1>{" "}
          <iframe 
            className="aspect-video w-full h-full"
            src="https://www.youtube.com/embed/CuSxAS9_q4A"
          ></iframe>
        </div>
        <div > <h1> Responsive Desing</h1> <img className="xs:aspect-3/2 md:aspect-4/3 " src="/img/ataturk.jpg" alt="" /></div>
        <div><h1>Custom value</h1><img className="aspect-(--my-aspect-ratio)" src="/img/enverpasa.jpg" alt="" /></div>
        <div><h1>Custom value</h1><img className="aspect-[calc(5/4)]" src="/img/talatpasa.jpg" alt="" /></div>
     
      </div>
    </>
  );
}
