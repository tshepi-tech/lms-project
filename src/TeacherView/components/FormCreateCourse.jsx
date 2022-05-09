//NPM pacakages
import { useState } from "react";

//Project files
import InputField from "./../../components/InputField";
import form from "./../../data/courseForm";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./../../scripts/firebase";
import { getDocument } from "./../../scripts/firestore";
import textToURL from "./../../scripts/textToURL";
import { useCourses } from "./../../state/CourseContext";
import { useModal } from "./../../state/ModalContext";

export default function FormCreateCourse() {
  //Global state
  const { courses, setCourses } = useCourses();
  const { setModal } = useModal();

  //Local state
  const [title, setTitle] = useState("Web3");
  const [text, setText] = useState("discover the new age of the internet");
  const [term, setTerm] = useState("Spring 2022");

  //Methods

  async function onSubmit(event) {
    event.preventDefault();

    const id = textToURL(title);
    const existingDocument = await getDocument("courses", id).catch(onFail);

    //Safeguard
    if (existingDocument !== undefined) {
      alert(`An item with the name ${title} already exist`);
      return;
    }
    const course = { title: title, text: text, term: term };
    const done = await setDoc(
      doc(firestore, "courses", `${course.title}`),
      course
    ).catch(onFail);

    if (done) onSuccess(course, id);
  }

  function onSuccess(course, id) {
    course.id = id;
    setCourses([...courses, course]);
    setModal(null);
    alert(`${course.title} added`);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create a course, check that the course does not exist.");
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Create a new course</h2>
      <div className="form-admin">
        <InputField setup={form.title} state={[title, setTitle]} />
        <InputField setup={form.text} state={[text, setText]} />
        <InputField setup={form.term} state={[term, setTerm]} />
        <button>Submit</button>
      </div>
    </form>
  );
}
