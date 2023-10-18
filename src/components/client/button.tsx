"use client"

import { signIn, useSession } from "next-auth/react"
import { Button, ButtonProps } from "../ui/button"
import { LogInIcon, LogOutIcon } from "lucide-react"

export function AuthButton({ ...props }: ButtonProps) {
  const { status, data } = useSession()

  const handleAuth = async () => {
    await signIn('google')
  }

  return (
    <Button {...props} onClick={handleAuth} variant={'outline'} className="w-full justify-start gap-2">
      {status === 'unauthenticated' && (
        <>
          <LogInIcon size={20} />
          Fazer Login
        </>
      )}
      {status === 'authenticated' && (
        <>
          <LogOutIcon size={20} />
          Sair
        </>
      )}
    </Button>
  )
}
