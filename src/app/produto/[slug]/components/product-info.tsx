'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductWithTotalPrice } from '@/helpers/product'
import { currencyFormatter } from '@/utils/currency-formatter'
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, TruckIcon } from 'lucide-react'
import { useState } from 'react'

interface ProductInfoProps {
  product: Pick<ProductWithTotalPrice, 'base_price' | 'description' | 'discount_percentage' | 'name' | 'total_price'>
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  const handleAddQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  return (
    <div className="flex flex-col gap-8 px-5">
      <section className='flex flex-col'>
        <span className="uppercase text-sm opacity-75">novo</span>
        <h2 className="text-lg">{product.name}</h2>

        <div className="flex items-center gap-2">
          <strong className="text-xl">{currencyFormatter(product.total_price)}</strong>
          {product.discount_percentage > 0 && (
            <Badge className="px-2 py-0.5">
              <ArrowDownIcon size={14} /> {product.discount_percentage}%
            </Badge>
          )}
        </div>

        {product.discount_percentage > 0 && <span className='opacity-75 text-sm line-through'>De: {currencyFormatter(Number(product.base_price))}</span>}

        <div className="flex items-center gap-2 mt-4">
          <Button size={'icon'} variant={'outline'} onClick={handleRemoveQuantity} disabled={quantity === 1}>
            <ChevronLeftIcon size={18} />
          </Button>

          <span className='w-10 text-center'>{quantity}</span>

          <Button size={'icon'} variant={'outline'} onClick={handleAddQuantity}>
            <ChevronRightIcon size={18} />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className='font-bold'>Descrição</h3>

        <p className='text-sm opacity-60 text-justify'>{product.description}</p>
      </section>

      <section className='flex flex-col gap-5'>
        <Button className='uppercase font-bold'>Adicionar ao carrinho</Button>

        <div className="bg-accent flex items-center px-5 py-2 justify-between gap-3 rounded-lg">
          <TruckIcon />

          <div className='flex flex-col mr-auto text-xs'>
            <span>Entrega via <em className='font-bold'>FSPacket&copy;</em></span>
            <span className='text-[#8162FF]'>Envio para <strong>todo Brasil</strong></span>
          </div>

          <strong className='text-xs'>Frete grátis</strong>
        </div>
      </section>
    </div>
  )
}
