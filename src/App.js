import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "netflix";

// const FavS = () => {
//   if (favSeries === "netflix") {
//     return <Netflix />;
//   } else {
//     return <Amazon />;
//   }
// };

const App = () => (
  <>
    <h1 className="heading_style">List of Top 5 Series 2021</h1>
    {/* <FavS /> */}
    {favSeries === "netflix" ? <Netflix /> : <Amazon />}
  </>
);

export default App;
