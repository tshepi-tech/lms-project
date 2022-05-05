export default function ItemAdminCourse({ item }) {
  return (
    <article key={item.id}>
      <div className="content">
        <button>✍️</button>
        <button>🗑</button>
        <div className="colour_block"></div>
      </div>
      <h3>{item.title}</h3>
    </article>
  );
}
