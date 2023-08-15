"use client";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SingleCourse = ({ course }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const handleEnroll = () => {
    if (session) {
      router.replace(`/checkout/${course.id}`);
    }
  };

  return (
    <div className="course pt-20">
      <div
        style={{ backgroundImage: `url(${course.cover})` }}
        className="w-full h-96 bg-no-repeat bg-cover"
      ></div>
      <div className="max-w-7xl mx-auto lg:flex lg:justify-between gap-5 py-5 mt-5">
        <div className="lg:w-3/5 flex flex-col gap-5">
          <h2 className="text-4xl">{course.title}</h2>
          <div className="flex gap-3">
            <span>Instructor:</span>
            <span>{course.instructor}</span>
          </div>
          <div className="flex gap-3">
            <span>Enrolled Students:</span>
            <span>{course.student}</span>
          </div>
          <p>{course.description}</p>
        </div>
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="flex gap-3">
            <span>Duration:</span>
            <span>{course.duration} hours</span>
          </div>
          <div className="flex gap-3">
            <span>Rating:</span>
            <span>{course.rating}</span>
          </div>

          <div className="flex lg:flex-col justify-between items-center lg:items-stretch gap-2">
            <div className="flex gap-3">
              <span>Price:</span>
              <span>{currencyFormatter(course.price)}</span>
            </div>
            <button
              onClick={handleEnroll}
              className=" text-black bg-[#90EE90] hover:bg-white py-3 px-4"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
