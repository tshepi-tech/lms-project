//NPM pacakages
import { useState } from "react";
//Project files
import InputField from "./../../components/InputField";
import form from "./../../data/courseForm";
import { updateDocument } from "./../../scripts/firestore";
import { useCourses } from "./../../state/CourseContext";
import { useModal } from "./../../state/ModalContext";

export default function FormUpdateCourse({ course }) {
  //Global state
  const { courses, setCourses } = useCourses();
  const { setModal } = useModal();
  //Local state
  const [title, setTitle] = useState(course.title);
  const [text, setText] = useState(course.text);
  const [term, setTerm] = useState(course.term);

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const editedItem = {
      id: course.id,
      title: title,
      text: text,
      term: term,
    };
    const isDone = updateDocument("courses", editedItem).catch(onFail);

    if (isDone) onSucess(editedItem);
  }
  function onSucess(editedItem) {
    const clonedCourses = [...courses];
    const index = clonedCourses.findIndex(
      (course) => course.id === editedItem.id
    );

    clonedCourses[index] = editedItem;
    setCourses(clonedCourses);
    setModal(null);
  }
  function onFail(error) {
    console.error(error);
    alert("Could not update the item. Try again");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Edit course</h2>
        <InputField setup={form.title} state={[title, setTitle]} />
        <InputField setup={form.text} state={[text, setText]} />
        <InputField setup={form.term} state={[term, setTerm]} />
        <button>Submit changes</button>
      </form>
    </div>
  );
}
