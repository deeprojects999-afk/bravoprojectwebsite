import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { MapPin, Phone, Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom gold marker
const goldIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

type Location = {
  city: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
  zoom: number;
};

const locations: Location[] = [
  {
    city: "Roodepoort",
    address: "7 Luttig Str, Berlut House, Office No.4",
    phone: "+27 61 510 2322",
    lat: -26.1625,
    lng: 27.8725,
    zoom: 15
  },
  {
    city: "Johannesburg",
    address: "Kariba House, 164 Commissioner Str",
    phone: "+27 78 485 3547",
    lat: -26.2041,
    lng: 28.0473,
    zoom: 15
  },
  {
    city: "Germiston",
    address: "16 High Road",
    phone: "+27 64 549 0585",
    lat: -26.2178,
    lng: 28.1675,
    zoom: 15
  },
  {
    city: "Polokwane",
    address: "11 Devenish Str, Opp. Taxi Rank",
    phone: "+27 61 535 1426",
    lat: -23.9045,
    lng: 29.4688,
    zoom: 15
  }
];

// Component to handle map zoom changes
function MapController({ selectedLocation }: { selectedLocation: Location | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedLocation) {
      map.flyTo([selectedLocation.lat, selectedLocation.lng], selectedLocation.zoom, {
        duration: 1.5
      });
    } else {
      // Default view showing all South Africa
      map.flyTo([-25.5, 28.0], 6, {
        duration: 1.5
      });
    }
  }, [selectedLocation, map]);
  
  return null;
}

export default function LocationMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const defaultCenter: [number, number] = [-25.5, 28.0];
  const defaultZoom = 6;

  return (
    <div className="bg-[#0a1628] rounded-2xl overflow-hidden border border-white/10">
      {/* Location Selector Tabs */}
      <div className="p-4 border-b border-white/10">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedLocation(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !selectedLocation 
                ? 'bg-[#D4A017] text-[#0a1628]' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            All Locations
          </button>
          {locations.map((location) => (
            <button
              key={location.city}
              onClick={() => setSelectedLocation(location)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedLocation?.city === location.city 
                  ? 'bg-[#D4A017] text-[#0a1628]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {location.city}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="h-64 relative isolate z-0">
        <MapContainer
          center={defaultCenter}
          zoom={defaultZoom}
          className="h-full w-full"
          style={{ background: '#0a1628' }}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <MapController selectedLocation={selectedLocation} />
          
          {locations.map((location) => (
            <Marker 
              key={location.city} 
              position={[location.lat, location.lng]}
              icon={goldIcon}
              eventHandlers={{
                click: () => setSelectedLocation(location)
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-bold text-[#0a1628] text-lg">{location.city}</h3>
                  <p className="text-gray-600 text-sm mt-1">{location.address}</p>
                  <div className="mt-3 space-y-2">
                    <a 
                      href={`tel:${location.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-[#0a1628] font-medium hover:text-[#D4A017]"
                    >
                      <Phone className="w-4 h-4" />
                      {location.phone}
                    </a>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Selected Location Info */}
      {selectedLocation && (
        <div className="p-4 bg-[#D4A017]/10 border-t border-[#D4A017]/20">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#D4A017] mt-0.5" />
            <div>
              <h4 className="text-white font-bold">{selectedLocation.city}</h4>
              <p className="text-gray-400 text-sm">{selectedLocation.address}</p>
              <a 
                href={`tel:${selectedLocation.phone.replace(/\s/g, '')}`}
                className="text-[#D4A017] font-medium text-sm hover:underline"
              >
                {selectedLocation.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}