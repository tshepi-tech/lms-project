//NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project files
import FormUpdateLink from "./FormUpdateLink";
import { useModal } from "./../../state/ModalContext";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function LinkItem({ link, onRemove, courseId }) {
  const { id, URLname, URL } = link;

  //Global state
  const { setModal } = useModal();
  return (
    <article>
      <a href={URL}>{URLname}</a>
      <button onClick={() => onRemove(id)}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <button
        onClick={() =>
          setModal(<FormUpdateLink link={link} courseId={courseId} />)
        }
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </article>
  );
}
