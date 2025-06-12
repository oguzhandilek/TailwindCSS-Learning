import Link from "next/link";

export default function Home() {
  return (
    <div className="text-5xl">
      <ul><li><Link className="mr-3.5" href={"/layout"}>Layout</Link></li><li>  <Link href={"/flexbox-grid"}>Flexbox and Grid</Link></li></ul>
     
   
    </div>
  );
}
