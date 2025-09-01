import React from "react";
import { Ghost, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

const Navbutton = ({ icon: Icon, label, href }: Props) => {
  const IconButton=(
    <Button
     title={label}
     variant="ghost"
     size="icon"
     className="rounded-full h-10 w-10"
     
   ><Icon className="h-8 w-8" strokeWidth={3}/></Button>
  )
  return (
    href?(
      <Link href={href}>{IconButton}</Link>
    ):(
     IconButton
    )
  );
};

export default Navbutton;
