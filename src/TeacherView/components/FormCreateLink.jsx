//NPM pacakages
import { useState } from "react";
//Project files
import InputField from "./../../components/InputField";
import form from "./../../data/linkForm";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./../../scripts/firebase";
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
    const link = { URLname: URLname, URL: URL };
    await setDoc(
      doc(firestore, `courses/${courseId}/content/resources/content/`, id),
      link
    );
    setModal(null);
    alert(`${id} added`);
    setLinks([...links, link]);
  }

  return (
    <div>
      <h2>Add a link for {courseId}</h2>
      <form className="form-admin" onSubmit={onSubmit}>
        <InputField setup={form.URLname} state={[URLname, setURLname]} />
        <InputField setup={form.URL} state={[URL, setURL]} />
        <button>Submit</button>
      </form>
    </div>
  );
}
