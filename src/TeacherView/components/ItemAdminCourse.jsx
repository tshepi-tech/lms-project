export default function ItemAdminCourse({ item }) {
  return (
    <article key={item.id}>
      <div className="content">
        <div className="colour_block"></div>
        <button>✍️</button>
        <button>🗑</button>
      </div>
      <h3>{item.title}</h3>
    </article>
  );
}
