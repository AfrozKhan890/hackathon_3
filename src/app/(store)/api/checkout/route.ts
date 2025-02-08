import { CartItem } from "@/context/CartContext";
// import { Product } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});


export async function POST(req: NextRequest) {
  try {
    const { addCart, billingDetails, paymentMethod } = await req.json();
    console.log("addCart", addCart);
    console.log("billingDetails", billingDetails);
    console.log("paymentMethod", paymentMethod);
    if (!addCart || !Array.isArray(addCart)) {
      return NextResponse.json({ error: "Invalid cart data" }, { status: 400 });
    }

    if (!billingDetails || typeof billingDetails !== "object") {
      return NextResponse.json({ error: "Invalid billing details" }, { status: 400 });
    }

    if(!paymentMethod || typeof paymentMethod !== "string"){
      return NextResponse.json({ error: "Invalid payment method" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: [ "card"],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      customer_email: billingDetails.email,
      line_items: addCart.map((item: CartItem) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // Convert to cents
        },
        quantity: item.quantity,
      })),
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "unknown error" }, { status: 500 });
  }
}
