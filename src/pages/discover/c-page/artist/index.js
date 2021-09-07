import React, { memo } from "react";

import YQArtistCategory from "./c-cpns/artist-category";
import YQArtistList from "./c-cpns/artist-list";
import { WrapperArtist, ArtistLeft, ArtistRight } from "./style";

export default memo(function Aritist() {
  return (
    <WrapperArtist className="wrap-v2">
      <ArtistLeft>
        <YQArtistCategory></YQArtistCategory>
      </ArtistLeft>
      <ArtistRight>
        <YQArtistList></YQArtistList>
      </ArtistRight>
    </WrapperArtist>
  );
});
