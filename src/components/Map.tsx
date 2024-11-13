import React from 'react';
import './Map.css';
import { useToast } from "@/components/ui/use-toast";

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <section id="contact" className="w-full py-12 bg-granite-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-granite-800 mb-8 text-center">Visit Our Showroom</h2>
        <iframe 
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.14950176659136!2d-122.14373094156157!3d47.31050910676812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490f608dcbb49d9%3A0xac35f0e519e1f79c!2s148th%20Ave%20SE%2C%20Auburn%2C%20WA%2098092!5e0!3m2!1sen!2sus!4v1731476864145!5m2!1sen!2sus" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  );
};

export default Map;