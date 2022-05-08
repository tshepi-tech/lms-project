export default function LinkItem({ link }) {
  const { URLname, URL } = link;

  //Global state

  return (
    <article>
      <a href={URL}>{URLname}</a>
    </article>
  );
}
