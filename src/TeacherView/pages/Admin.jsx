//Project files
import EmptyCourse from "./../../TeacherView/components/EmptyCourse";
import { useCourses } from "./../../state/CourseContext";

export default function Admin() {
  const { courses, setCourses } = useCourses();

  //Components
  //load list of courses
  const courseList = courses.map((item, index) => (
    <article key={index}>list of courses</article>
  ));
  return (
    <div id="admin">
      <h1>Admin</h1>
      <h2>Here is a list of courses</h2>
      <div className="grid">
        {courses.length === 0 && <EmptyCourse />}
        {courses.length > 0 && courseList}
        <button>Add new course</button>
      </div>
    </div>
  );
}
