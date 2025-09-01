import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center space-y-4'>
      <p className='text-5xl font-bold font-serif'>Not Found</p>
      <p className='text-3xl font-light leading-snug '>Could not find requested resource</p>
      <Link href="/" className='text-xl font-light '>Return Home</Link>
    </div>
  )
}