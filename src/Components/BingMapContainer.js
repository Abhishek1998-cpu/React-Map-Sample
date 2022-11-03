// Microsoft Bing Map - bingmaps-react 

import React from "react";
import BingMapsReact from "bingmaps-react";

function BingMapContainer(props) {
  console.log("New 1 = " + JSON.stringify(props))
  return (
    <BingMapsReact
      bingMapsKey="Ag6AedsNHm9PISHenmQYnZjMLhgwZv1tFhvOsWX6Ws9duu1rUpQyHSPeeK-hvJQS"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    />
  );
}

export default BingMapContainer;
