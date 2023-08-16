import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const data = await request.json();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: data.items.map((item) => ({
      price_data: {
        currency: "usd",
        unit_amount: +(item.price * 100).toFixed(2),
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.cover],
        },
      },
      quantity: 1,
    })),
    mode: "payment",
    success_url: `${process.env.BASE_URL}/success`,
    cancel_url: `${process.env.BASE_URL}`,
    metadata: {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      address: data.address,
      courseTitle: data.courseTitle,
      courseId: data.courseId
    },
  });
  return NextResponse.json({ id: session.id });
}
