import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class MapCity extends Component {
    render() {
        let data = this.props.data || []
        const Map = withScriptjs(withGoogleMap((props) =>
                <GoogleMap defaultZoom={4} defaultCenter={{ lat: 53.648209, lng: 20.711185 }}>
                    {
                        this.props.data.map((city, i) => {
                            return <Marker key={i} title={city.cityName} position={{ lat: city.geoLocation.lat, lng: city.geoLocation.lang }} /> 
                        })
                    }
                </GoogleMap>
            ))    
        
        if (this.props.data && this.props.data.length > 0 && (this.props.selectedQuery === "2" || this.props.selectedQuery === "3")){
            return (
                <Map
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ width: '100%', height: `900px`, position: 'relative'}} />}
                    mapElement={<div style={{ height: `90%` }} />}
                />
            )
        } 
        return <span></span>
    }
}




export default MapCity