import React  from 'react'; 
import './branches.css'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

class Branches extends React.Component{

    render(){
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
              <Marker
                position={{ lat: -34.397, lng: 150.644 }}
                onClick={props.onMarkerClick}


              />
                      <Marker
                position={{ lat: -35.397, lng: 150.644 }}
                onClick={props.onMarkerClick}


              />
                      <Marker
                position={{ lat: -36.397, lng: 150.644 }}
                onClick={props.onMarkerClick}


              />
            </GoogleMap>
          ));
        return (
            <div id="brances-container">
              <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
            </div>
        )
    }
}
export default Branches