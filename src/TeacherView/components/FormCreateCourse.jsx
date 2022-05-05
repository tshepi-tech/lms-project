//NPM pacakages
import { useState } from "react";

//Project files
import InputField from "./../../components/InputField";
import form from "./../../data/courseForm";
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

  return (
    <form>
      <h2>Create a new course</h2>
      <InputField setup={form.title} state={[title, setTitle]} />
      <InputField setup={form.text} state={[text, setText]} />
      <InputField setup={form.term} state={[term, setTerm]} />
      <button>Submit</button>
    </form>
  );
}
