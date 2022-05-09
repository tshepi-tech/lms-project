//NPM package
import { useEffect, useState } from "react";
//Project files
import FormCreateCourse from "../components/FormCreateCourse";
import EmptyCourse from "../components/EmptyCourse";
import ItemAdminCourse from "../components/ItemAdminCourse";
import { getCollection } from "../../scripts/firestore";
import { useCourses } from "../../state/CourseContext";
import { useModal } from "../../state/ModalContext";
import { Link } from "react-router-dom";

export default function Admin() {
  //Global state
  const { courses, setCourses } = useCourses();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  // Method
  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path).catch(onFail);
      if (data) onSuccess(data);
    }
    loadData("courses");
  }, []);

  function onSuccess(data) {
    setCourses(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the categories. Try again");
    setStatus(2);
  }
  //Components
  const courseList = courses.map((course) => (
    <ItemAdminCourse key={course.id} course={course}></ItemAdminCourse>
  ));

  // Safeguards
  if (status === 0) return <p>Loading ⏱</p>;
  if (status === 2) return <p>Error ❌</p>;

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
