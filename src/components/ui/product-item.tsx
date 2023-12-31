import { ProductWithTotalPrice } from "@/helpers/product"
import { currencyFormatter } from "@/utils/currency-formatter"
import Image from "next/image"
import { Badge } from "./badge"
import { ArrowDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ProductItemProps {
  product: ProductWithTotalPrice
  className?: string
}

export function ProductItem({ product, className }: ProductItemProps) {
  return (
    <Link href={`/produto/${product.slug}`} className={cn("flex flex-col gap-4", className)}>
      <div className="bg-accent rounded-lg h-[170px] min-w-[170px] flex items-center justify-center relative">
        <Image
          src={product.image_urls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%] object-contain"
        />

        {product.discount_percentage > 0 && (
          <Badge className="absolute top-3 left-3 px-2 py-0.5">
            <ArrowDownIcon size={14} /> {product.discount_percentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <strong className="truncate text-sm">{product.name}</strong>
        <div className="flex items-center gap-2">
          {product.discount_percentage > 0 ? (
            <>
              <strong className="font-semibold">
                {currencyFormatter(product.total_price)}
              </strong>
              <span className="opacity-75 line-through text-xs">
                {currencyFormatter(Number(product.base_price))}
              </span>
            </>
          ) : (
            <strong className="font-semibold">
              {currencyFormatter(Number(product.base_price))}
            </strong>
          )}
        </div>
      </div>
    </Link>
  )
}
