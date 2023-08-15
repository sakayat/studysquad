import SingleCourse from "@/components/SingleCourse"
import { getCourse } from "@/prisma/course"


const CoursePage = async ({params}) => {
  const course = await getCourse(params.courseId)
  return (
    <div className="py-20">
      <div className="container mx-auto px-8">
        <SingleCourse course={course}/>
      </div>
    </div>
  )
}

export default CoursePage