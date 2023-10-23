import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Link href={`/categoria/${category.slug}`} className="flex flex-col rounded-lg overflow-hidden hover:scale-[1.01] transition">
      <div className="w-full h-[150px] flex items-center justify-center bg-gradient-to-tr from-[#5033C3] to-[#5033C3]/20 from-10%">
        <Image
          src={category.image_url}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="bg-accent py-2 text-center">
        <strong className="text-sm">{category.name}</strong>
      </div>
    </Link>
  )
}
