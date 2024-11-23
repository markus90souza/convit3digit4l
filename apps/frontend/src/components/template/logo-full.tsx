import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
})

const LogoFull = () => {
  return (
    <Link
      href="/"
      className={`flex flex-col items-center gap-2 ${righteous.className}`}
    >
      <Image src="/logo.svg" width={100} height={100} alt="Logo" />
      <h1 className="text-5xl">
        CONVIT<span className="text-blue-500 inline-flex mr-4">3</span>DIGITAL
      </h1>
    </Link>
  )
}

export { LogoFull }
