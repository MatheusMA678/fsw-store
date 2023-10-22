import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4">
      <strong className="text-xl">404</strong>
      <span className="opacity-75">Página não encontrada...</span>
      <Button variant={'link'} asChild>
        <Link href={'/'}>Voltar</Link>
      </Button>
    </div>
  )
}
