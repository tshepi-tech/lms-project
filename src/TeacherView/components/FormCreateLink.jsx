//NPM pacakages
import { useState } from "react";
import { useParams } from "react-router-dom";

//Project files
import InputField from "./../../components/InputField";
import form from "./../../data/linkForm";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./../../scripts/firebase";
import { getDocument } from "./../../scripts/firestore";
import textToURL from "./../../scripts/textToURL";
import { useResources } from "./../../state/ResourceContext";
import { useModal } from "./../../state/ModalContext";

export default function FormCreateLink({ courseId }) {
  //Global state
  const { links, setLinks } = useResources();
  const { setModal } = useModal();

  //Local state
  const [URLname, setURLname] = useState("Intro to web3");
  const [URL, setURL] = useState(
    "https://www.w3schools.com/jsref/met_win_confirm.asp"
  );
  //Methods

  async function onSubmit(event) {
    event.preventDefault();

    const id = textToURL(URLname);
    const existingDocument = await getDocument(
      `courses/${courseId}/content/resources/content/`,
      id
    ).catch(onFail);

    //Safeguard
    if (existingDocument !== undefined) {
      alert(`An item with the name ${URL} already exist`);
      return;
    }
    const link = { URLname: URLname, URL: URL };
    const done = await setDoc(
      doc(
        firestore,
        `courses/${courseId}/content/resources/content/`,
        `${link.URLname}`
      ),
      link
    ).catch(onFail);

    if (done) onSuccess(link, id);
    // if (done) onSuccess(id, link);
  }

  function onSuccess(link, id) {
    link.id = id;
    setModal(null);
    alert(`${link.URLname} added`);
    setLinks([...links, link]);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create link, check that the course does not exist.");
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Create a new course for {courseId}</h2>
      <InputField setup={form.URLname} state={[URLname, setURLname]} />
      <InputField setup={form.URL} state={[URL, setURL]} />
      <button>Submit</button>
    </form>
  );
}
