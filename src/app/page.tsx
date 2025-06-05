import Link from "next/link";

export default function Home() {
  return (
    <div className="text-5xl">
     <Link className="mr-3.5" href={"/layout"}>Layout</Link>
     <Link href={"/flexbox-grid"}>Flexbox and Grid</Link>
    </div>
  );
}
