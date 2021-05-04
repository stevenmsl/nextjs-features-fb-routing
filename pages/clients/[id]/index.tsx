import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  /*
    - how to navigate programmatically
  */
  const loadProject = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "arlo", clientprojectid: "newtoy" },
    });
  };

  return (
    <div>
      <h1>The projects for client xxxx</h1>
      <button onClick={loadProject}>Load Project</button>
    </div>
  );
}

export default ClientProjectsPage;
