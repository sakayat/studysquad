import Checkout from "@/components/Checkout";
import SectionHeader from "@/components/SectionHeader";
import { getCourse } from "@/prisma/course";

const CheckoutPage = async ({ params }) => {
	const course = await getCourse(params.courseId);
	return (
		<div className="py-5">
			<SectionHeader
				span="checkout"
				h2="please provide your details"
				p="fill out the form and continue to checkout"
			/>
			<Checkout course={course}/>
		</div>
	);
};

export default CheckoutPage;
