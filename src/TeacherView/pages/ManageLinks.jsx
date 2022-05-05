//NPM Package
import { useParams } from "react-router-dom";
//Project files
import CreateLink from "./../components/FormCreateLink";
import { useModal } from "./../../state/ModalContext";

export default function ManageLinks() {
  const { courseId } = useParams();

  //Global state
  const { setModal } = useModal();

  return (
    <div>
      <button onClick={() => setModal(<CreateLink courseId={courseId} />)}>
        Add New link
      </button>
    </div>
  );
}
