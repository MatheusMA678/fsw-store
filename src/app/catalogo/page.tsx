import { Badge } from "@/components/ui/badge";
import { prisma } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import { CategoryItem } from "./components/category-item";

export default async function CatalogPage() {
  const categories = await prisma.category.findMany()

  return (
    <div className="flex-1 flex flex-col gap-8 p-5 max-w-5xl w-full mx-auto">
      <Badge variant={'outline'} className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]">
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <section className="grid grid-cols-2 gap-4">
        {categories.map(category => <CategoryItem key={category.id} category={category} />)}
      </section>
    </div>
  )
}
