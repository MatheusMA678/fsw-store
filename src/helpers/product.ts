import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  total_price: number;
}

export const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
  if (product.discount_percentage === 0) {
    return {
      ...product,
      total_price: Number(product.base_price)
    }
  }

  const total_price = Number(product.base_price) - (Number(product.base_price) * product.discount_percentage / 100)

  return {
    ...product,
    total_price
  }
}