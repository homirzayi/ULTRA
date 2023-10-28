import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";
import Pricing from "../../components/Pricing/Pricing";

function Home() {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
