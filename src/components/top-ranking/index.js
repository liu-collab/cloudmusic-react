import React, { memo } from "react";
import { WarpperTopRanking } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import { getSongDetailAction } from "@/pages/player/store/actionsCreators";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default memo(function YQTopRanking(props) {
  const { info } = props;
  const dispatch = useDispatch();
  console.log(info);

  if (!info) return <></>;
  const { tracks = [] } = info;

  //other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };
  return (
    <WarpperTopRanking>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover">
            {" "}
          </a>
        </div>
        <div className="info">
          <a href="todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    onClick={(e) => playMusic(item)}
                  ></button>

                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <Link to="/discover/ranking">查看全部 &gt;</Link>
      </div>
    </WarpperTopRanking>
  );
});
