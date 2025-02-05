interface SecData {
    image: string;
    title: string;
    price: number;
}
// utils/secData.ts
 interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    tags: string[];
    sizes: string[];
    imageUrl:string
    rating: number;
    discountpercentage?:number;
    category?:string;
    isFeaturedProduct?:boolean;
    stockLevel?:number
    // _type: string;
}

interface CardData {
    _id: string;
    imageUrl:string;
    name: string;
    price: number;
    rating: number;
    stockLevel:number;
    isFeaturedProduct?:boolean;
    category?:string;
}
  
  

export type {SecData,  Product, CardData}