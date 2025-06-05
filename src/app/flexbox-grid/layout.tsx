import BackButton from "@/components/BackButton";

export default function FlexLayouts({children,}:{
    children: React.ReactNode;
}) {
    
  return <><div><BackButton/></div>{children}</>;
}
