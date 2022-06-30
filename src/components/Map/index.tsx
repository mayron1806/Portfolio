import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useRef } from "react";
import * as C from "./style";
type props ={
    location: {lat: number, lng: number}
    initialZoom?: number 
}
const Map = ({location, initialZoom = 17} : props) => {
    const mapRef = useRef<any>(null);
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })
    const render = () => {
        if(loadError){
            return(
                <C.Container>
                    <C.MapErrorIcon/>
                    <C.MapErrorMessage>Erro ao carregar o mapa.</C.MapErrorMessage>
                </C.Container>
            )
        }
        if(isLoaded){
            return(
                <GoogleMap ref={mapRef} 
                    mapContainerStyle={{width: "100%", height: "100%"}}
                    center={location}
                    zoom={initialZoom}
                >
                    <Marker position={location}/>
                    
                </GoogleMap>
            ) 
        }
    }
    return(
        <C.Container>
        { render() }
        </C.Container>
    )
}
export default Map;