import { useToast } from "@/components/ui/use-toast";

const Map = () => {
  const { toast } = useToast();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 34.0522, // Default to Los Angeles - replace with actual company coordinates
    lng: -118.2437
  };

  if (!apiKey) {
    return (
      <section className="w-full py-12 bg-granite-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display text-granite-800 mb-8 text-center">Visit Our Showroom</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
            <p className="text-center">Please configure your Google Maps API key in the .env file to display the map.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 bg-granite-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-granite-800 mb-8 text-center">Visit Our Showroom</h2>
        <LoadScript 
          googleMapsApiKey={apiKey}
          onError={() => {
            toast({
              title: "Error loading map",
              description: "There was a problem loading Google Maps. Please check your API key.",
              variant: "destructive"
            });
          }}
        >
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
