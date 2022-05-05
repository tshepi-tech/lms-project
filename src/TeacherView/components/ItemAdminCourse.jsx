//NPM packages
import { Link } from "react-router-dom";

//Project files
import { useModal } from "./../../state/ModalContext";

export default function ItemAdminCourse({ course }) {
  //Global state
  const { setModal } = useModal();

  //Properties
  const studentManager = `/admin/${course.id}`;
  const resourcesManager = `/admin/${course.id}/files`;

  return (
    <article key={course.id}>
      <div className="content">
        <div className="colour_block"></div>
        <Link to={studentManager}>
          <button>👩‍🎓</button>
        </Link>
        <Link to={resourcesManager}>
          <button> 📁 </button>
        </Link>
        <button>✍️</button>
        <button>🗑</button>
      </div>
      <h3>{course.title}</h3>
    </article>
  );
}
