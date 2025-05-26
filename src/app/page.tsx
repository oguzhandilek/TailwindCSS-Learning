import Link from "next/link";

export default function Home() {
  return (
    <div className="text-5xl">
     <Link href={"/layout"}>Layout</Link>
    </div>
  );
}
