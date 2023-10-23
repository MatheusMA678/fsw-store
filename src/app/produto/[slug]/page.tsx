import { prisma } from "@/lib/prisma"
import { ProductImages } from "./components/product-images"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findFirst({
    where: {
      slug: params.slug,
    }
  })

  if (!product) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <strong>Produto não encontrado</strong>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <ProductImages image_urls={product.image_urls} name={product.name} />
    </div>
  )
}
