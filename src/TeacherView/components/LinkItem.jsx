//Project files
import FormUpdateLink from "./FormUpdateLink";
import { useModal } from "./../../state/ModalContext";

export default function LinkItem({ link, onRemove, courseId }) {
  const { id, URLname, URL } = link;

  //Global state
  const { setModal } = useModal();
  return (
    <article>
      <a href={URL}>{URLname}</a>
      <button onClick={() => onRemove(id)}>🗑 </button>
      <button
        onClick={() =>
          setModal(<FormUpdateLink link={link} courseId={courseId} />)
        }
      >
        ✍️
      </button>
    </article>
  );
}
