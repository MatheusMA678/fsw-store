import Image from "next/image"
import { Categories } from "./components/categories"
import { ProductList } from "./components/product-list"
import { prisma } from "@/lib/prisma"

export default async function Home() {
  const products = await prisma.product.findMany({
    where: {
      discount_percentage: {
        gt: 0,
      },
    },
  })

  return (
    <div className="flex flex-col gap-8">
      <Image
        src="/banner-1.png"
        alt="até 55% de desconto este mês!"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
      />

      <section className="px-5">
        <Categories />
      </section>

      <section>
        <strong className="block tracking-wider uppercase mb-3 pl-5">ofertas</strong>
        <ProductList products={products} />
      </section>

      <Image
        src="/banner-2.png"
        alt="até 55% de desconto em mouses!"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
      />
    </div>
  )
}
