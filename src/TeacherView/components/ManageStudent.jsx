//NPM packages
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Project files
import { addDocument, getCollection } from "./../../scripts/firestore";
import StudentList from "./StudentCourseList";
import { deleteDocument } from "./../../scripts/firestore";
import { removeUser } from "./../../scripts/firebaseAuth";
import { createFile } from "./../../scripts/cloudStorage";
import readFile from "./../../scripts/readFile";

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
      {courseId}
      <StudentList onRemove={onRemove} students={students} />
    </div>
  );
}
