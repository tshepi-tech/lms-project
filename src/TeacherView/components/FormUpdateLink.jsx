//NPM pacakages
import { useState } from "react";

//Project files
import InputField from "./../../components/InputField";
import form from "./../../data/linkForm";
import { updateDocument } from "./../../scripts/firestore";
import { useResources } from "./../../state/ResourceContext";
import { useModal } from "./../../state/ModalContext";

export default function FormUpdateLink({ link, courseId }) {
  //Global state
  const { links, setLinks } = useResources();
  const { setModal } = useModal();

  //Local state
  const [URLname, setURLname] = useState(link.URLname);
  const [URL, setURL] = useState(link.URL);

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const editedItem = {
      id: link.id,
      URLname: URLname,
      URL: URL,
    };
    const isDone = updateDocument(
      `courses/${courseId}/content/resources/content/`,
      editedItem
    ).catch(onFail);

    if (isDone) onSucess(editedItem);
  }

  function onSucess(editedItem) {
    const clonedLinks = [...links];
    const index = clonedLinks.findIndex((link) => link.id === editedItem.id);

    clonedLinks[index] = editedItem;
    setLinks(clonedLinks);
    setModal(null);
    resetForm();
  }

  function onFail(error) {
    console.error(error);
    alert("Could not update the link. Try again");
  }
  function resetForm() {
    setURLname("");
    setURL("");
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>Edit link for {courseId}</h2>
      <InputField setup={form.URLname} state={[URLname, setURLname]} />
      <InputField setup={form.URL} state={[URL, setURL]} />
      <button>Submit changes</button>
    </form>
  );
}
