//NPM packages
import { useParams } from "react-router-dom";

export default function AdminCourses() {
  const { courseId } = useParams();
  return (
    <div id="admin-courses">
      <h1>Admin Courses</h1>
      <p>ID:@{courseId}@</p>
    </div>
  );
}
