import BackButton from "@/components/BackButton";
import Link from "next/link";
import React from "react";
import styles from "@/styles/container.module.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <div>
        {" "}
        <div className="columns-2 cursor-pointer z-10">
          <BackButton />
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
            <li>
              <Link href={"/layout/display"}>display</Link>
            </li>
            <li>
              <Link href={"/layout/float"}>float</Link>
            </li>
            <li>
              <Link href={"/layout/isolation"}>isolation</Link>
            </li>
            <li>
              <Link href={"/layout/object-fit"}>object-fit</Link>
            </li>
            <li>
              <Link href={"/layout/object-position"}>object-position</Link>
            </li>
            <li>
              <Link href={"/layout/overflow"}>overflow</Link>
            </li>
            <li>
              <Link href={"/layout/position"}>position</Link>
            </li>
            <li>
              <Link href={"/layout/positioned-elements"}>positioned-elements</Link>
            </li>
            <li>
              <Link href={"/layout/visibility"}>visibility</Link>
            </li>
            <li>
              <Link href={"/layout/z-index"}>z-index</Link>
            </li>
          </ul>
        </div>
      </div>

      {children}
    </React.Fragment>
  );
}
