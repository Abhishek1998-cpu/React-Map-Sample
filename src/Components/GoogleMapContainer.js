// Google Map - google-maps-react package

import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return <Map google={this.props.google} style={{ width: "100%", height: "100%" }} zoom = {10} initialCenter = {
        {
            lat: this.props.lat, 
            lng:  this.props.lng
        }
    } />;
  }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAw9-V5fDmXIP5omTt0OCB3XuRExc6-xs0"
})(MapContainer)
