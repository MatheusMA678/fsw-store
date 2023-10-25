import { prisma } from "@/lib/prisma"
import { ProductImages } from "./components/product-images"
import { ProductInfo } from "./components/product-info"
import { computeProductTotalPrice } from "@/helpers/product"
import { ProductList } from "@/components/ui/product-list"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug
              }
            }
          }
        }
      }
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

      <section className="flex flex-col gap-4 mb-5">
        <strong className="text-lg tracking-wider uppercase pl-5">produtos relacionados</strong>
        <ProductList products={product.category.products} />
      </section>
    </div>
  )
}
