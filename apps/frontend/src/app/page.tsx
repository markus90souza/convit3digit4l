// import { Container } from '@/components/template/container'
// import { Logo } from '@/components/template/logo'
import { LogoFull } from '@/components/template/logo-full'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="gap-10 bg-[url('/background-elementos.svg')] bg-cover h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <LogoFull />

        <p className="text-zinc-500 text-center select-none leading-6 w-96 font-light">
          Crie e gerencie o convite do seu evento de forma rapida e facil, sem
          complicações!
        </p>
      </div>

      <Link href={'/evento'} className="app-button blue text-lg uppercase">
        Crie seu evento
      </Link>
    </div>
  )
}
