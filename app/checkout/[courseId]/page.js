import Checkout from "@/components/Checkout";
import SectionTitle from "@/components/SectionTitle";
import { getCourse } from "@/prisma/course";

const CheckOutPage = async ({ params }) => {
  const course = await getCourse(params.courseId);
  return (
    <div className="py-20">
      <SectionTitle
        span="checkout"
        h2="please provide your details"
        p="fill out the form and continue to checkout"
      />
      <div className="container mx-auto px-8">
        <Checkout course={course}/>
      </div>
    </div>
  );
};

export default CheckOutPage;
