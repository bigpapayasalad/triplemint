export interface FilterI {
  sort: "asc" | "desc";
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
}
