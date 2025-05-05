
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from 'lucide-react';

const locations = [
  "Mumbai, Maharashtra",
  "Delhi, Delhi",
  "Bangalore, Karnataka",
  "Hyderabad, Telangana",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal",
  "Pune, Maharashtra",
  "Ahmedabad, Gujarat",
  "Jaipur, Rajasthan",
  "Lucknow, Uttar Pradesh",
];

type LocationSelectorProps = {
  className?: string;
  onLocationChange?: (location: string) => void;
}

const LocationSelector = ({ className, onLocationChange }: LocationSelectorProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Select Location');
  
  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    if (onLocationChange) {
      onLocationChange(value);
    }
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <Select onValueChange={handleLocationChange}>
        <SelectTrigger 
          className="border-none focus:ring-0 focus:ring-offset-0 pl-0 flex items-center h-auto"
          aria-label="Select location"
        >
          <MapPin className="h-4 w-4 text-farm-green mr-1.5" />
          <SelectValue placeholder="Select Location">
            {selectedLocation}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationSelector;
