export default function LinkItem({ link, onRemove }) {
  const { id, URLname, URL } = link;

  return (
    <article>
      <a href={URL}>{URLname}</a>
      <button onClick={() => onRemove(id)}>🗑 </button>
      <button>✍️</button>
    </article>
  );
}
