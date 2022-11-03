import React from "react";
import AppleMapContainer from "./AppleMapContainer";
import BingMapContainer from "./BingMapContainer";
import MapContainer from "./GoogleMapContainer";
import MapboxMapContainer from "./MapboxMapContainer";

const Home = () => {
  const [state, setState] = React.useState({
    latitude: String,
    longitude: String,
    showGoogleMap: false,
    showBingMap: false,
    showAppleMap: false,
    showMapboxMap: false,
  });

  const openMap = (map) => {
    if (map === "Google") {
      setState({ ...state, showGoogleMap: true });
    } else if (map === "Apple") {
      setState({ ...state, showAppleMap: true });
    } else if (map === "Mapbox") {
      setState({ ...state, showMapboxMap: true });
    } else {
      setState({ ...state, showBingMap: true });
    }
  };

  const styles = {
    buttonStyles: {
      backgroundColor: "skyblue",
      color: "black",
      padding: "0.5rem",
      borderRadius: "5px",
      minWidth: "10rem",
    },
    butttonContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
    },
  };

  return (
    <div>
      {state.showMapboxMap && (
        <div>
          <div style={{ margin: "1rem" }}>
            <button
              onClick={() => {
                setState({
                  ...state,
                  showGoogleMap: false,
                  showAppleMap: false,
                  showBingMap: false,
                  showMapboxMap: false,
                  latitude: "",
                  longitude: "",
                });
              }}
              style={styles.buttonStyles}
            >
              Go back
            </button>
          </div>
          <MapboxMapContainer />
        </div>
      )}
      {state.showGoogleMap && (
        <div>
          <div style={{ margin: "1rem" }}>
            <button
              onClick={() => {
                setState({
                  ...state,
                  showGoogleMap: false,
                  latitude: "",
                  longitude: "",
                });
              }}
              style={styles.buttonStyles}
            >
              Go back
            </button>
          </div>
          <MapContainer lat={state.latitude} lng={state.longitude} />
        </div>
      )}
      {state.showBingMap && (
        <div>
          <div>
            <button
              onClick={() => {
                setState({
                  ...state,
                  showBingMap: false,
                  latitude: "",
                  longitude: "",
                });
              }}
              style={styles.buttonStyles}
            >
              Go back
            </button>
          </div>
          <BingMapContainer lat={state.latitude} lng={state.longitude} />
        </div>
      )}
      {state.showAppleMap && (
        <div>
          <div>
            <button
              onClick={() => {
                setState({
                  ...state,
                  showAppleMap: false,
                  latitude: "",
                  longitude: "",
                });
              }}
              style={styles.buttonStyles}
            >
              Go back
            </button>
          </div>
          <AppleMapContainer lat={state.latitude} lng={state.longitude} />
        </div>
      )}
      {!state.showBingMap &&
        !state.showAppleMap &&
        !state.showGoogleMap &&
        !state.showMapboxMap && (
          <div>
            <h2>React Map Sample Implementation</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: "3rem",
              }}
            >
              <div style={{ margin: "1rem" }}>
                <label htmlFor="latitude" style={{ margin: "0.5rem" }}>
                  Latitude:{" "}
                </label>
                <input
                  name="latitude"
                  value={state.latitude}
                  onChange={(e) => {
                    setState({ ...state, latitude: e.target.value });
                  }}
                />
              </div>
              <div style={{ margin: "1rem" }}>
                <label htmlFor="longitude" style={{ margin: "0.5rem" }}>
                  Longitude:{" "}
                </label>
                <input
                  name="longitude"
                  value={state.longitude}
                  onChange={(e) => {
                    setState({ ...state, longitude: e.target.value });
                  }}
                />
              </div>
            </div>
            <div style={styles.butttonContainer}>
              <button
                onClick={() => {
                  openMap("Google");
                }}
                style={styles.buttonStyles}
              >
                Take me to Google Map
              </button>
              <button
                onClick={() => {
                  openMap("Mapbox");
                }}
                style={styles.buttonStyles}
              >
                Take me to Mapbox Map
              </button>
              <button
                onClick={() => {
                  openMap("Bing");
                }}
                style={styles.buttonStyles}
              >
                Take me to Bing Map
              </button>
              <button
                onClick={() => {
                  openMap("Apple");
                }}
                style={styles.buttonStyles}
              >
                Take me to Apple Map
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Home;

// Dummy Data:
// Latitude - 28.704060
// Longitude - 77.102493
