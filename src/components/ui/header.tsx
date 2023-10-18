import { Button } from "./button";
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingBasketIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";

export function Header() {
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

          <div className="mt-4 space-y-2">
            <Button variant={'outline'} className="w-full justify-start gap-2">
              <LogInIcon size={20} />
              Fazer Login
            </Button>

            <Button variant={'outline'} className="w-full justify-start gap-2">
              <HomeIcon size={20} />
              Início
            </Button>

            <Button variant={'outline'} className="w-full justify-start gap-2">
              <PercentIcon size={20} />
              Ofertas
            </Button>

            <Button variant={'outline'} className="w-full justify-start gap-2">
              <ListOrderedIcon size={20} />
              Catálogo
            </Button>

          </div>
        </SheetContent>
      </Sheet>

      <h1 className="font-bold text-xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-foreground">
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
