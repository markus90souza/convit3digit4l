import { Container } from '@/components/template/container'
import React, { type FC, type ReactNode } from 'react'

type WebLayoutProps = {
  children: ReactNode
}
const WebLayout: FC<WebLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default WebLayout
