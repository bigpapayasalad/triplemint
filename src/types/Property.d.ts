export interface PropertyI {
  address: string;
  agents?: (null)[] | null;
  amenities?: (Amenities | null)[] | null;
  display_address: string;
  display_status: string;
  exclusive: boolean;
  id: number;
  listed_date: string;
  listing_id: number;
  listing_type: string;
  open_houses?: OpenHouse[] | null;
  price: number;
  price_change?: null;
  private?: null;
  status: string;
  type: string;
  unit: Unit;
  url_slug: string;
  video_provider?: null;
  video_url?: null;
  virtual_tour_url?: null;
}
export interface Amenities {
  id: number;
  name: string;
}
export interface OpenHouse {
  appointment_only: boolean;
  broker_only: boolean;
  date: string;
  end_time: string;
  listing_id: number;
  start_time: string;
}
export interface Unit {
  bathrooms: number;
  bedrooms: number;
  building: Building;
  dyn_floorplans?: DynFloorplan[] | null;
  dyn_images?: DynImage[] | null;
  id: number;
  number: string;
  surface?: number | null;
}
export interface Building {
  amenities?: (Amenities)[] | null;
  cross_streets?: (string)[] | null;
  dyn_images?: DynImage[] | null;
  full_address: string;
  name?: string | null;
  neighborhood_address: string;
  position: Position;
  region: Region;
  type: string;
}

export interface DynFloorplan {
  description?: null;
  extension: string;
  key: string;
  order: number;
  type: string;
}

export interface DynImage {
  description?: null;
  extension: string;
  key: string;
  order: number;
  type: string;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Region {
  address_parts?: string[] | null;
  locality_scope: string;
  picture: string;
  text: string;
}