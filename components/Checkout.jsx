"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { currencyFormatter } from "@/lib/currencyFormatter";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutPage = ({ course }) => {
  const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise;
    const { data } = await axios.post("/api/payment", {
      items: [course],
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      courseTitle: formData.courseTitle,
      courseId: course.id,
    });
     await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="checkout flex justify-center">
      
    </div>
  );
};

export default CheckoutPage;
