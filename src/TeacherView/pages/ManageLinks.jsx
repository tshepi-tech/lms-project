//NPM Package
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Project files
import CreateLink from "./../components/FormCreateLink";
import { getCollection } from "../../scripts/firestore";
import { useModal } from "./../../state/ModalContext";

export default function ManageLinks() {
  const { courseId } = useParams();

  //Global state
  const { setModal } = useModal();
  // Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  return (
    <div>
      <button onClick={() => setModal(<CreateLink courseId={courseId} />)}>
        Add New link
      </button>
    </div>
  );
}
