import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 34.0522, // Default to Los Angeles - replace with actual company coordinates
    lng: -118.2437
  };

  return (
    <section className="w-full py-12 bg-granite-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-granite-800 mb-8 text-center">Visit Our Showroom</h2>
        <LoadScript googleMapsApiKey={process.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default Map;