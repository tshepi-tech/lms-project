//NPM packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Project files
import { getCollection } from "./scripts/firestore";
import { useResources } from "./state/ResourceContext";
import CourseLinks from "./components/CourseLinks";

export default function CoursePage() {
  const { courseId } = useParams();

  //Global state
  const { links, setLinks } = useResources();

  useEffect(() => {
    async function loadData() {
      const data = await getCollection(
        `courses/${courseId}/content/resources/content/`
      );
      setLinks(data);
    }
    loadData();
  }, []);

  const linkList = links.map((link) => (
    <CourseLinks key={link.id} link={link} />
  ));

  return (
    <div>
      {courseId}
      {linkList}
    </div>
  );
}
