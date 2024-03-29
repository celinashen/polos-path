import React from "react";
import YouTube from "react-youtube";

import ReactPlayer from "react-player";

function Artifact({ link }) {

  // Example link: https://www.youtube.com/embed/67M1c8cpbvg?autoplay=1&controls=0&mute=1

  return <iframe type="text/html" width = "100%" height = "100%" src={link} frameborder="0" allow="autoplay"></iframe>
}

export default Artifact;