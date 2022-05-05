//Project files
import Links from "./ManageLinks";
import Files from "./ManageFiles";

export default function ManageResources() {
  return (
    <div>
      <p>Course reading list & media</p>
      <p>Links to resources</p>
      <Links />
      <Files />
    </div>
  );
}
