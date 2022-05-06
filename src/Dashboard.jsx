//NPM packages
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Project files
import { logoutUser } from "./scripts/firebaseAuth";
import { getCollection, addDocument } from "./scripts/firestore";

export default function Dashboard({ uidState, adminState }) {
  const navigation = useNavigate();
  const [uid, setUID] = uidState;
  const [uidAdmin, setUIDadmin] = adminState;

  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  // Method

  //load courses
  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);

      setCourses(data);
    }

    loadData("courses");
  }, []);

  async function onEnroll(id) {
    const newEnroll = {
      name: "Jennifer",
      student_number: 58,
    };

    const documentId = await addDocument(
      `courses/${id}/content/students/content/`,
      newEnroll
    );
    alert(`Enrolled into ${id} successfully`);
    //alert not working well dynamically.
    newEnroll.id = documentId;
  }
  //need to get user's information (how to pass items, wait for lecture or make form)
  //create new student for the course
  //useEffect hook to enroll
  //update state (do we have to thought?)
  const courseList = courses.map((item) => (
    <li key={item.id}>
      <Link to={`/admin/${item.id}`}>{item.title}</Link>
      <button onClick={() => onEnroll(item.id)}>Enroll</button>
    </li>
  ));

  async function onLogout(event) {
    event.preventDefault();
    await logoutUser();

    setUID(null);
    localStorage.clear();
    navigation("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {courseList}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
