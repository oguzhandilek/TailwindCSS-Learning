import BackButton from "@/components/BackButton";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <header>
          <div className="columns-2">
            <BackButton/>
            <h1 className="text-2xl font-bold">Layout</h1>
          </div>
          <div className="columns-3 text-indigo-600">
            <ul>
              <li>
                <Link href={"/layout/aspect"}>aspect-ratio</Link>
              </li>
              <li>
                <Link href={"/layout/columns"}>columns</Link>
              </li>
              <li>
                <Link href={"/layout/break-before-after"}>
                  break-before-after
                </Link>
              </li>
              <li>
                <Link href={"/layout/box-decoration-break"}>
                  box-decoration-break
                </Link>
              </li>
              <li>
                <Link href={"/layout/box-sizing"}>box-sizing</Link>
              </li>
            </ul>
          </div>
        </header>
        <body>{children}</body>
      </html>
    </>
  );
}
