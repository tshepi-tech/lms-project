//Project files
import { deleteDocument } from "../../scripts/firestore";
import { useCourses } from "../../state/CourseContext";
import { useModal } from "../../state/ModalContext";

export default function DeleteCourse({ course }) {
  //Global state
  const { courses, setCourses } = useCourses();
  const { setModal } = useModal();

  function removeCourse(id) {
    deleteDocument("courses", course.id);

    const clonedCourses = [...courses];
    const filteredCourse = clonedCourses.filter((course) => course.id !== id);
    clonedCourses.splice(filteredCourse, 1);
    setCourses(clonedCourses);
    setModal(null);
  }

  function Cancel() {
    setModal(null);
  }
  return (
    <div>
      do you really want to delete {course.id}?<br></br>
      <button onClick={removeCourse}>Yes</button>
      <button onClick={Cancel}>No</button>
    </div>
  );
}
