//NPM packages
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Project files
import { getCollection } from "../../scripts/firestore";
import StudentList from "../components/StudentCourseList";
import { deleteDocument } from "../../scripts/firestore";

export default function MangageStudent() {
  const [students, setStudents] = useState([]);
  const { courseId } = useParams();

  useEffect(() => {
    async function loadData() {
      const data = await getCollection(
        `courses/${courseId}/content/students/content/`
      );
      setStudents(data);
    }
    loadData();
  }, []);

  async function onRemove(id) {
    await deleteDocument(`courses/${courseId}/content/students/content/`, id);

    const clonedStudents = [...students];
    const index = clonedStudents.findIndex((item) => item.id === id);

    clonedStudents.splice(index, 1);
    alert("student removed successfully");
    setStudents(clonedStudents);
  }

  return (
    <div>
      <h1>{courseId}</h1>
      <p>Student List</p>
      <StudentList onRemove={onRemove} students={students} />
    </div>
  );
}
