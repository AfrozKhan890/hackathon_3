import Image from 'next/image';

interface BreadcrumbsProps {
  productTitle: string;
}

export default function Breadcrumbs({ productTitle }: BreadcrumbsProps) {
  return (
    <nav className="bg-[#F9F1E7] h-24 mt-20 flex items-center gap-8 pl-20">
      <ul className="flex items-center gap-2 list-none">
        <li><a href="/" className="text-[#333333]">Home</a></li>
        <li><Image src="/images/black-arr.png" alt="" width={20} height={20} /></li>
        <li><a href="/shop" className="text-[#333333]">Shop</a></li>
        <li><Image src="/images/black-arr.png" alt="" width={20} height={20} /></li>
        <li><span className="text-[#333333]">{productTitle}</span></li>
      </ul>
    </nav>
  );
}
