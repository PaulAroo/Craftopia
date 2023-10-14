"use client"

import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session | null
}) {
  return (
    <SessionProvider session={session}>
      {children}
      <ProgressBar
        height="3px"
        color="#DB4444"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </SessionProvider>
  )
}
