import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjFour } from "./Data";
import Pricing from "../../components/Pricing/Pricing";

function Home() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
