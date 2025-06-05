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
        <div className="text-indigo-600 text-2xl">
          <Link href={"/flexbox-grid/flex-basis"}>flex-basis</Link>
        </div>
      </div>
      {children}
    </>
  );
}
