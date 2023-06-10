"use client";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Course = ({ course }) => {
	const router = useRouter();
	const { data: session } = useSession();
	const handleEnroll = () => {
		if (session) {
			router.replace(`/checkout/${course.id}`);
		} else {
			router.replace(`/user/login?redirect=/checkout/${course.id}`);
		}
	};

	return (
		<div className="course">
			<div
				style={{ backgroundImage: `url(${course.cover})` }}
				className="w-full lg:h-72 h-96 bg-no-repeat bg-cover"></div>
			<div className="max-w-7xl mx-auto lg:flex lg:justify-between gap-5 py-5 mt-5">
				<div className="lg:w-3/5 flex flex-col gap-2">
					<h2 className="text-4xl">{course.title}</h2>
					<span>Instructor: {course.instructor}</span>
					<span>
						Enrolled Students: <span className="font-bold">{course.student}</span>
					</span>
					<p>{course.description}</p>
				</div>
				<div className="lg:w-2/5 flex flex-col gap-2">
					<span>
						Duration: <span className="font-bold">{course.duration}</span> hours
					</span>
					<span>
						Rating: <span className="font-bold">{course.rating}</span>
					</span>
					<div className="flex lg:flex-col justify-between items-center lg:items-stretch gap-2">
						<span>
							Price: <span className="font-bold"> {currencyFormatter(course.price)}</span>
						</span>
						<button onClick={handleEnroll} className="uppercase text-center bg-[#8fb4ff] hover:bg-[#ff8f94] rounded-lg py-3">enroll now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
