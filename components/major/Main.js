import React from "react";
import { View, Text } from "react-native";
import { MapView, UrlTile } from "expo";

import appStyle from "../../styles/App";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lon: 0
    };
  }

  componentDidMount() {
    this.locationWatcher = navigator.geolocation.watchPosition(position =>
      this.setState({ lat: position.latitude, lon: position.longitude })
    );
  }

  render() {
    return (
      <View style={{ flex: 0.5 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.lat,
            longitude: this.state.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          region={{
            latitude: this.state.lat,
            longitude: this.state.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            coordinate={{ latitude: this.state.lat, longitude: this.state.lon }}
            title={"Current Location"}
            description={""}
          />
        </MapView>
      </View>
    );
  }
}

export default Main;
