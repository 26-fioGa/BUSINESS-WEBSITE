import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

function Map() {
    return (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{ lat: -11.9419441 , lng: -77.0858002}}
        >
            <Marker
                    key={ 1 }
                    position={{ lat: -11.9419441, lng: -77.0858002}}
            />
        </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map))