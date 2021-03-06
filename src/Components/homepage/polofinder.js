import React, { useState } from "react";
import PoloFinderOne from "./polofinderOne";
import PolofinderTwo from "./poloFinderSecond";

function PoloFinder() {

  const [pageone_Open, setPageone_Open] = useState(true);
  const [pagetwo_Open, setPagetwo_Open] = useState(false);
  

  const page_showHandler = () => {
    setPageone_Open(!pageone_Open);
    setPagetwo_Open(!pagetwo_Open);
  };

  return (
    <div className="Shopping_Container">
      <div className="Shopping_Box">
        <h2>Online food shop</h2>
        <div className="Shopping_Page_Container">
          <PoloFinderOne showOne={pageone_Open} next_ClickHandler={page_showHandler}/>
          <PolofinderTwo showTwo={pagetwo_Open} Reset_Data={page_showHandler}/>
        </div>
      </div>
    </div>
  );
}

export default PoloFinder;
