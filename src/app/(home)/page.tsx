import Image from "next/image"
import { Categories } from "./components/categories"
import { ProductList } from "./components/product-list"
import { prisma } from "@/lib/prisma"
import { SectionTitle } from "./components/section-title"
import { PromoBanner } from "./components/promo-banner"

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discount_percentage: {
        gt: 0,
      },
    },
  })

  const keyboards = await prisma.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })

  const mouses = await prisma.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })

  return (
    <div className="flex flex-col gap-8 py-5">
      <PromoBanner
        src="/banner-1.png"
        alt="até 55% de desconto este mês!"
      />

      <section className="px-5">
        <Categories />
      </section>

      <section>
        <SectionTitle>ofertas</SectionTitle>
        <ProductList products={deals} />
      </section>

      <PromoBanner
        src="/banner-2.png"
        alt="até 55% de desconto em mouses!"
      />

      <section>
        <SectionTitle>teclados</SectionTitle>
        <ProductList products={keyboards} />
      </section>

      <PromoBanner
        src="/banner-3.png"
        alt="até 20% de desconto em fones!"
      />

      <section>
        <SectionTitle>mouses</SectionTitle>
        <ProductList products={mouses} />
      </section>
    </div>
  )
}
