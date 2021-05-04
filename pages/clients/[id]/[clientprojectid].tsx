import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  /* 
     - nested dynamic routes
     - the query looks like this: 
       {id: "2", clientprojectid: "1"}
  */
  console.log("project", router.query);

  return (
    <div>
      <h1>Project XXX for Client YYY</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
