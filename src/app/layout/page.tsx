import Link from "next/link";

export default function Layout() {
  return (
    <>
      <div>
        <h1 >Layout</h1>
        <ul>
          <li>
            <Link href={"/layout/aspect"}>aspect-ratio</Link>
          </li>
          <li>
            <Link href={"/layout/columns"}>columns</Link>
          </li>
          <li>
            <Link href={"/layout/break-before-after"}>break-before-after</Link>
          </li>
          <li>
            <Link href={"/layout/box-decoration-break"}>box-decoration-break</Link>
          </li>
          <li>
            <Link href={"/layout/box-sizing"}>box-sizing</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
