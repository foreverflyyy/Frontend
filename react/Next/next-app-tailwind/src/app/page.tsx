import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div className={'text-center'}>
      <div className={'text-3xl font-medium'}>
        <Link href={'/authorization'} className={'hover:text-blue-700 duration-300'}>
          Registration page
        </Link>
      </div>
    </div>
  )
}
