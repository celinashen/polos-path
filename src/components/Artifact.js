import React from "react";
import YouTube from "react-youtube";

import ReactPlayer from "react-player";


// export default function App() {
//   const videoOptions = {
//     playerVars: {
//       autoplay: 1,
//       controls: 0,
//       rel: 0,
//       showinfo: 0,
//       mute: 1,
//       loop: 1
//     }
//   };
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <YouTube videoId="YL1mCanx2lY" opts={videoOptions} />
//     </div>
//   );
// }

function Artifact({ link }) {

  // Example link: https://www.youtube.com/embed/67M1c8cpbvg?autoplay=1&controls=0&mute=1

  return <iframe type="text/html" width = "100%" height = "100%" src={link} frameborder="0" allow="autoplay"></iframe>
}

export default Artifact;