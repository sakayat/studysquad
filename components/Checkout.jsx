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
      <form
        onSubmit={handleCheckout}
        className="w-full lg:w-[45rem] flex flex-col gap-8"
      >
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            placeholder="jon"
            readOnly
            value={formData.name}
            className="outline-none bg-inherit border py-3 px-4"
          />
        </div>
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="jon@gmail.com"
            readOnly
            value={formData.email}
            className="outline-none bg-inherit border py-3 px-4"
          />
        </div>
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="number">Phone Number</label>
          <input
            type="number"
            id="number"
            placeholder="017xxxxxxx"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            className="outline-none bg-inherit border py-3 px-4"
            required
          />
        </div>
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="ABC NY 10000"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="outline-none bg-inherit border py-3 px-4"
          />
        </div>
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="title">course title</label>
          <input
            type="text"
            id="title"
            placeholder="Course Title"
            readOnly
            value={formData.courseTitle}
            className="outline-none bg-inherit border py-3 px-4"
          />
        </div>
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder="price"
            readOnly
            value={currencyFormatter(formData.price)}
            className="outline-none bg-inherit border py-3 px-4"
          />
        </div>
        <button
          role="link"
          className="text-black bg-[#90EE90] hover:bg-white py-3"
        >
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
