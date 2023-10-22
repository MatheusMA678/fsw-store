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
    <div className="p-5">
      <Image
        src="/banner-1.png"
        alt="até 55% de desconto este mês!"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
      />

      <section className="mt-8">
        <Categories />
      </section>

      <section className="mt-8 overflow-x-auto">
        <ProductList products={products} />
      </section>
    </div>
  )
}
