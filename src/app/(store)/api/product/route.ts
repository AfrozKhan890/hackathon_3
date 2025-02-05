// src/app/(store)/api/product/route.ts
import { getAllProducts } from "@/sanity/queries/FetchProduct";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}
