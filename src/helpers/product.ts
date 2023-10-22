import { Product } from "@prisma/client";

interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
  if (product.discount_percentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.base_price)
    }
  }

  const totalPrice = Number(product.base_price) * (product.discount_percentage / 100)

  return {
    ...product,
    totalPrice
  }
}