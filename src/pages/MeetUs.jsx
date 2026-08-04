import { useLayoutEffect } from "react";

import MeetOurTeam from "../components/MeetOurTeam";

function MeetUs() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <MeetOurTeam />
    </>
  );
}

export default MeetUs;
     

