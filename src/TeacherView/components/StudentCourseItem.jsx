export default function StudentCourseItem({ item, onRemove }) {
  const { id, name, studentId, email } = item;
  return (
    <article>
      <p>
        {name},{studentId},{email}
      </p>
      <button onClick={() => onRemove(id)}>Remove student</button>
    </article>
  );
}
