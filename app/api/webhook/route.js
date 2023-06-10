import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { headers } from "next/headers";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET_KEY;

const fullfillOrder = async (session) => {
  let user = await prisma.user.findUnique({
    where: { email: session.metadata.email },
  });
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: session.metadata.email,
      },
    });
  }
  await prisma.order.create({
    data: {
      transactionId: session.id,
      name: session.metadata.name,
      mobile: session.metadata.mobile,
      address: session.metadata.address,
      courseTitle: session.metadata.courseTitle,
      courseId: session.metadata.courseId,
      user: {
        connect: {id: user.id}
      }
    },
  });
};

export async function POST(request) {
  const body = await request.text();
  const sig = headers().get("Stripe-Signature");
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (error) {
    return NextResponse.json({ error: "Webhook Error" });
  }
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    try {
      await fullfillOrder(session);
    } catch (error) {
      return NextResponse.json({ error: "DB Error" });
    }
    return NextResponse.json({ error: "Data Uploaded" });
  }
  return NextResponse.json({ received: true });
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
