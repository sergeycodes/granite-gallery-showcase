import { useToast } from "@/components/ui/use-toast";

const Map = () => {
  const { toast } = useToast();

  // Los Angeles coordinates (example)
  const lat = 34.0522;
  const lng = -118.2437;

  return (
    <section className="w-full py-12 bg-granite-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-granite-800 mb-8 text-center">Visit Our Showroom</h2>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lng}`}
            style={{ border: 0 }}
            title="Location Map"
            onError={() => {
              toast({
                title: "Error loading map",
                description: "There was a problem loading the map. Please try again later.",
                variant: "destructive"
              });
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Map;