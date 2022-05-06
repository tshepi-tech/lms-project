//NPM Package
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Project files
import CreateLink from "./../components/FormCreateLink";
import LinkItem from "./../components/LinkItem";
import { getCollection, deleteDocument } from "../../scripts/firestore";
import { useModal } from "./../../state/ModalContext";
import { useResources } from "./../../state/ResourceContext";

export default function ManageLinks() {
  const { courseId } = useParams();

  //Global state
  const { setModal } = useModal();
  const { links, setLinks } = useResources();
  // Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  useEffect(() => {
    async function loadData() {
      const data = await getCollection(
        `courses/${courseId}/content/resources/content/`
      );
      setLinks(data);
    }
    loadData();
  }, []);

  async function onRemove(id) {
    await deleteDocument(`courses/${courseId}/content/resources/content/`, id);

    const clonedLinks = [...links];
    const index = clonedLinks.findIndex((link) => link.id === id);

    clonedLinks.splice(index, 1);
    alert("Link removed successfully");
    setLinks(clonedLinks);
  }

  const linkList = links.map((link) => (
    <LinkItem
      key={link.id}
      link={link}
      onRemove={onRemove}
      courseId={courseId}
    />
  ));

  return (
    <div>
      {linkList}
      <button onClick={() => setModal(<CreateLink courseId={courseId} />)}>
        Add New link
      </button>
    </div>
  );
}
