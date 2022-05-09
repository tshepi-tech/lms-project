//NPM packages
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project files
import DeleteCourse from "./DeleteCourse";
import UpdateCourse from "./FormUpdateCourse";
import {
  faFolderOpen,
  faGraduationCap,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useModal } from "./../../state/ModalContext";

export default function ItemAdminCourse({ course }) {
  //Global state
  const { setModal } = useModal();

  //Properties
  const studentManager = `/admin/${course.id}`;
  const resourcesManager = `/admin/resources/${course.id}`;

  return (
    <article key={course.id}>
      <div className="colour-block">
        <div className="course-admin">
          <Link to={studentManager}>
            <button>
              {" "}
              <FontAwesomeIcon icon={faGraduationCap} />
            </button>
          </Link>
          <Link to={resourcesManager}>
            <button>
              {" "}
              <FontAwesomeIcon icon={faFolderOpen} />
            </button>
          </Link>
          <button onClick={() => setModal(<UpdateCourse course={course} />)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button onClick={() => setModal(<DeleteCourse course={course} />)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <p>{course.title}</p>
        </div>
      </div>
    </article>
  );
}
