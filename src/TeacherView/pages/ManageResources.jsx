//Project files
import Links from "./ManageLinks";
import Files from "./ManageFiles";

export default function ManageResources() {
  return (
    <div>
      <p>Links to resources</p>
      <Links />
      <p>Course reading list & media</p>
      <Files />
    </div>
  );
}
