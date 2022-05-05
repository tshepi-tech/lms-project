//NPM packages
import { Link } from "react-router-dom";

//Project files
import { useModal } from "./../../state/ModalContext";

export default function ItemAdminCourse({ course }) {
  //Global state
  const { setModal } = useModal();

  //Properties
  const linkPath = `/admin/${course.id}`;

  return (
    <article key={course.id}>
      <div className="content">
        <div className="colour_block"></div>
        <Link to={linkPath}>
          <button>👩‍🎓</button>
        </Link>
        <button>✍️</button>
        <button>🗑</button>
      </div>
      <h3>{course.title}</h3>
    </article>
  );
}
