//NPM packages
import { Link } from "react-router-dom";

//Project files
import { useModal } from "./../../state/ModalContext";
import DeleteCourse from "./DeleteCourse";

export default function ItemAdminCourse({ course }) {
  //Global state
  const { setModal } = useModal();

  //Properties
  const studentManager = `/admin/${course.id}`;
  const resourcesManager = `/admin/resources/${course.id}`;

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
        <button onClick={() => setModal(<DeleteCourse course={course} />)}>
          🗑
        </button>
      </div>
      <h3>{course.title}</h3>
    </article>
  );
}
