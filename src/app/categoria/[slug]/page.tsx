import { BackButton } from "@/components/client/back-button";
import { Badge } from "@/components/ui/badge";
import { ProductItem } from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import { prisma } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    slug: string;
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await prisma.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true
    }
  })

  if (!category) {
    return (
      <div className="flex-1">
        <strong>Categoria não encontrada.</strong>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col gap-8 p-5 max-w-5xl w-full mx-auto">
      <div className="flex items-center gap-2">
        <BackButton />

        <Badge variant={'outline'} className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]">
          {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
          {category.name}
        </Badge>
      </div>

      <section className="grid md:flex md:flex-wrap sm:grid-cols-2 gap-8">
        {category.products.map(product =>
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
            className="max-sm:w-full md:max-w-[170px]"
          />
        )}
      </section>
    </div>
  )
}
