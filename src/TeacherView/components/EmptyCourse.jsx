//Project files
import emptyWhiteboard from "../../assets/images/emptyWhiteboard.png";

export default function EmptyCourse() {
  return (
    <article>
      <img src={emptyWhiteboard} alt="an empty white board with plans behind" />
      <p>There are no courses yet. Be the first to add a new course!</p>
    </article>
  );
}
