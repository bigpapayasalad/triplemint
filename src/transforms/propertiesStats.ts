import type { PropertiesStatsI, PropertyI } from "../types";
import { formatPriceAsCurrency } from "./currency";

export const getPropertyStats = (properties: PropertyI[]): PropertiesStatsI => {
  const prices = properties.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const minPriceString = formatPriceAsCurrency(minPrice);
  const maxPriceString = formatPriceAsCurrency(maxPrice);

  const bedrooms = properties.map((p) => p.unit.bedrooms);
  const minBedrooms = Math.min(...bedrooms);
  const maxBedrooms = Math.max(...bedrooms);

  return {
    minPrice,
    maxPrice,
    minPriceString,
    maxPriceString,
    minBedrooms,
    maxBedrooms,
  };
};
