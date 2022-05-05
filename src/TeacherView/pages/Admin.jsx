//Project files
import FormCreateCourse from "../components/FormCreateCourse";
import EmptyCourse from "../components/EmptyCourse";
import { useCourses } from "./../../state/CourseContext";
import { useModal } from "./../../state/ModalContext";

export default function Admin() {
  const { courses, setCourses } = useCourses();
  const { setModal } = useModal();

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
        <button onClick={() => setModal(<FormCreateCourse />)}>
          Add new course
        </button>
      </div>
    </div>
  );
}
