import React, { memo } from "react";

import YQListAlpha from "./c-cpns/list-alpha";
import YQListItem from "./c-cpns/list-item";
export default memo(function YQArtistList() {
  return (
    <div>
      <YQListAlpha></YQListAlpha>
      <YQListItem></YQListItem>
    </div>
  );
});
