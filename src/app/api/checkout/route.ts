import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.NEXT_STRIPE_SECRET_KEY);

export const POST = async (request: any) => {
  try {
    const { products } = await request.json();

    // Debugging log: check received products
    console.log("Received products:", products);

    // Get active products from Stripe
    let activeProducts = await stripe.products.list({ active: true });
    console.log("Active products from Stripe:", activeProducts);

    // Step 1: Loop through products and ensure they exist in Stripe
    for (const product of products) {
      const matchedProduct = activeProducts.data.find((stripeProduct: any) =>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      // If the product doesn't exist in Stripe, create it
      if (!matchedProduct) {
        const newProduct = await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: 'usd',
            unit_amount: product.price,
          },
        });

        console.log("Created new product in Stripe:", newProduct);
      }
    }

    // Step 2: Fetch updated product list
    activeProducts = await stripe.products.list({ active: true });
    let stripeProducts = [];

    for (const product of products) {
      const stripeProduct = activeProducts.data.find((stripeProduct: any) =>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      if (stripeProduct) {
        stripeProducts.push({
          price: stripeProduct.default_price,
          quantity: product.quantity,
        });
      }
    }

    // Step 3: Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: stripeProducts,
      mode: 'payment',
      success_url: `https://website-ochre-two-55.vercel.app/success`,
      cancel_url: `https://website-ochre-two-55.vercel.app/`,
    });

    console.log("Stripe session created:", session);

    return NextResponse.json({
      id: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Error during checkout session creation:", error);
    return NextResponse.json({
      error: 'Something went wrong during checkout.',
    });
  }
};
