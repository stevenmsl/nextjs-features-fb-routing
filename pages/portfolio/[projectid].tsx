import { useRouter } from "next/router";
/*
  Dynamic Routes
  - the filename is enclosed with a pair of square brackets
  

*/
function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
export default PortfolioProjectPage;
