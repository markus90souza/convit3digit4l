import { Logo } from './logo'

import { cn } from '@/lib/utils'
import type { FC, HTMLAttributes, ReactNode } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}
const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center py-10 min-h-screen bg-[url("/background.png")] bg-cover',
      )}
    >
      <Logo />
      <div
        className={cn(
          'flex-1 flex flex-col justify-center  py-10 container',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export { Container }
