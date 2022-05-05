import StudentItem from "./StudentCourseItem";

export default function StudentCourseList({ students, onRemove }) {
  const studentList = students.map((item) => (
    <StudentItem key={item.id} item={item} onRemove={onRemove} />
  ));
  return <div>{studentList}</div>;
}
