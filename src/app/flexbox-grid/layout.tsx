import BackButton from "@/components/BackButton";
import Link from "next/link";

export default function FlexLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <BackButton />
        <div className="text-indigo-600 text-2xl columns-3">
          <ul>
            <li><Link href={"/flexbox-grid/flex-basis"}>flex-basis</Link></li>
            <li><Link href={"/flexbox-grid/flex-direction"}>flex-direction</Link></li>
            <li><Link href={"/flexbox-grid/flex-wrap"}>flex-wrap</Link></li>
            <li><Link href={"/flexbox-grid/flex"}>flex</Link></li>
            <li><Link href={"/flexbox-grid/flex-grow"}>flex-grow</Link></li>
            <li><Link href={"/flexbox-grid/flex-shrink"}>flex-shrink</Link></li>
            <li><Link href={"/flexbox-grid/order"}>order</Link></li>
          </ul>
          
          
        </div>
      </div>
      {children}
    </>
  );
}
