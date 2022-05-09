//NPM packages
import { useEffect } from "react";
import { Link } from "react-router-dom";

//Project files
import { addDocument } from "./scripts/firestore";
import { getCollection } from "./scripts/firestore";
import { useUserRole } from "./state/UserRolesContext";
import { useUID } from "./state/UIDContext";

export default function Enroll({ courses }) {
  //Global state
  const { students, setStudents } = useUserRole();
  const { uid } = useUID();

  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);
      setStudents(data);
    }
    loadData("users");
  }, []);

  const student = students.find((item) => item.id === uid);
  const enrollingName = student.name;
  const enrollingEmail = student.email;
  const entollingStudentId = student.studentId;

  const newEnroll = {
    name: enrollingName,
    email: enrollingEmail,
    studentId: entollingStudentId,
  };

  async function onEnroll(id) {
    const documentId = await addDocument(
      `courses/${id}/content/students/content/`,
      newEnroll
    );
    alert(`Enrolled into ${id} successfully`);
    newEnroll.id = documentId;
  }

  const courseList = courses.map((item) => (
    <li className="list" key={item.id}>
      <div className="thumbnail"></div>
      <div className="course-text">
        <Link className="course-item" to={`/course/${item.id}`}>
          <p>{item.title}</p> <p>{item.term}</p>
        </Link>
        <button className="enroll-button" onClick={() => onEnroll(item.id)}>
          Enroll
        </button>
      </div>
    </li>
  ));

  return <div className="courses">{courseList}</div>;
}
