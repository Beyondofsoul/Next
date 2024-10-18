import React from 'react';
import { Title } from '@/components/shared/title';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/shared/product-card';

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, className, listClassName }) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item, i) => (
          <ProductCard
            id={item.id}
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}

          />
        ))}
      </div>
    </div>
  );
};