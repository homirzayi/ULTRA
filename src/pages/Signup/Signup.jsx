import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Home;
