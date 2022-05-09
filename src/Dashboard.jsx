//NPM packages
import Enroll from "./Enroll";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Project files
import { logoutUser } from "./scripts/firebaseAuth";
import { getCollection, addDocument } from "./scripts/firestore";
import { useCourses } from "./state/CourseContext";
import { useUID } from "./state/UIDContext";

export default function Dashboard() {
  const navigation = useNavigate();

  //Globa state
  const { uid, setUID } = useUID();
  const { courses, setCourses } = useCourses();

  // Method

  //load courses
  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);

      setCourses(data);
    }

    loadData("courses");
  }, []);

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
      <Enroll courses={courses} uid={uid} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
