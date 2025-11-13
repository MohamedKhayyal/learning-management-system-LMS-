import CourseCard from "./CourseCard";
import courses from "./CourseData";

export default function CourseSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Learn from the best
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-5 py-2 border rounded-md text-sm">
            Show all courses
          </button>
        </div>
      </div>
    </section>
  );
}
