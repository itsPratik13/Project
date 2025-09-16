"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { ButtonHTMLAttributes } from 'react'

type Props={
    title:string,
    classname?:string,
    variant?:"default"| "destructive" | "ghost" | "outline" | "secondary"|"link"|null | undefined,


}& ButtonHTMLAttributes<HTMLButtonElement>


const BackButton = ({title,className,variant,...props}:Props) => {
  const router=useRouter();
  return (
   <Button
   variant={variant}
   title={title}
   onClick={()=>router.back()}
   className={className}
   >{title}</Button>
  )
}

export default BackButton