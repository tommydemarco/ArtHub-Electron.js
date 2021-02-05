import React from "react";

import BackgroundVideo from "../../static/assets/videos/bg.mp4";

import css from "./VideoBackground.module.scss";

const VideoBackground = (): JSX.Element => {
  return (
    <div className={css.VideoBackground__container}>
      <video autoPlay muted loop className={css.VideoBackground}>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
