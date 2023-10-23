"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { ArrowLeftIcon } from "lucide-react"

export function BackButton() {
  const router = useRouter()

  return (
    <Button onClick={() => router.back()} variant={'ghost'} className="rounded-full p-2">
      <ArrowLeftIcon size={16} />
    </Button>
  )
}
