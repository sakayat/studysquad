import { currencyFormatter } from "@/lib/currencyFormatter";
import Image from "next/image";
import Link from "next/link";

const CourseItem = ({ course }) => {
  return (
    <div className="bg-white text-black">
      <Image
        src={course.cover}
        alt={course.title}
        width={400}
        height={400}
        priority
        className="w-full h-72"
      />
      <div className="flex flex-col justify-between gap-3 py-3 px-4">
        <h2 className="font-semibold">{course.title}</h2>
        <div className="flex items-center justify-between">
          <span>{course.instructor}</span>
          <span>
            Duration: <span className="font-bold">{course.duration}</span> hours
          </span>
        </div>
        <span>
          Enrolled Students: <span className="font-bold">{course.student}</span>
        </span>
        <span>
          Rating: <span className="font-bold">{course.rating}</span>
        </span>
        <p className="text-gray-500">
          {course.description.substring(0, 100)}
        </p>
        <span className="font-bold">{currencyFormatter(course.price)}</span>
        <Link href={`course/${course.id}`} className="font-bold">View Details</Link>
      </div>
    </div>
  );
};

export default CourseItem;
