import { prisma } from "@/lib/prisma"
import { ProductImages } from "./components/product-images"
import { ProductInfo } from "./components/product-info"
import { computeProductTotalPrice } from "@/helpers/product"

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
    <div className="flex-1 flex flex-col gap-8 max-w-5xl w-full mx-auto">
      <ProductImages image_urls={product.image_urls} name={product.name} />

      <ProductInfo
        product={computeProductTotalPrice(product)}
      />
    </div>
  )
}
