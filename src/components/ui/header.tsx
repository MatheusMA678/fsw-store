import { Button } from "./button";
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingBasketIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { AuthButton } from "../client/auth-button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";

export async function Header() {
  const session = await getServerSession(authOptions)

  return (
    <header className="border-b flex justify-between items-center p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {session?.user && (
            <div className="flex flex-col">
              <div className="py-4 flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {session.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  <AvatarImage src={session.user.image!} />
                </Avatar>

                <div className="flex flex-col overflow-hidden">
                  <span className="font-medium truncate">{session.user.name}</span>
                  <span className="text-sm text-muted-foreground">Boas compras!</span>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 space-y-2">
            <AuthButton />

            <Button variant={'outline'} className="w-full justify-start" asChild>
              <Link href={'/'} className="flex items-center gap-2">
                <HomeIcon size={20} />
                Início
              </Link>
            </Button>

            <Button variant={'outline'} className="w-full justify-start" asChild>
              <Link href={'/ofertas'} className="flex items-center gap-2">
                <PercentIcon size={20} />
                Ofertas
              </Link>
            </Button>

            <Button variant={'outline'} className="w-full justify-start" asChild>
              <Link href={'/catalogo'} className="flex items-center gap-2">
                <ListOrderedIcon size={20} />
                Catálogo
              </Link>
            </Button>

          </div>
        </SheetContent>
      </Sheet>

      <h1 className="font-bold text-xl">
        <span className="text-primary">
          FSW
        </span>{' '}
        Store
      </h1>

      <Button variant="outline" size="icon">
        <ShoppingBasketIcon />
      </Button>
    </header>
  )
}
