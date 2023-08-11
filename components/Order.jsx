import Button from "@/components/Button";
const Order = ({ course }) => {
  return (
    <div className="order-course-content">
      <div className="border p-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">{course.courseTitle}</h2>
          <Button
            href={`/coursevideo/${course.id}`}
            placeholder="View Details"
            color="primary"
            size="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
