import type { PropertiesStatsI, PropertyI } from "../types";
import { formatPriceAsCurrency } from "./currency";

export const getPropertyStats = (properties: PropertyI[]): PropertiesStatsI => {
  const reducer = (
    stats: PropertiesStatsI,
    property: PropertyI
  ): PropertiesStatsI => {
    if (stats.minPrice === null || property.price < stats.minPrice) {
      stats.minPrice = property.price;
    }

    if (
      stats.minBedrooms === null ||
      property.unit.bedrooms < stats.minBedrooms
    ) {
      stats.minBedrooms = property.unit.bedrooms;
    }

    if (stats.maxPrice === null || property.price > stats.maxPrice) {
      stats.maxPrice = property.price;
    }

    if (
      stats.maxBedrooms === null ||
      property.unit.bedrooms > stats.maxBedrooms
    ) {
      stats.maxBedrooms = property.unit.bedrooms;
    }

    return stats;
  };

  const initial: PropertiesStatsI = {
    minPrice: null,
    maxPrice: null,
    minBedrooms: null,
    maxBedrooms: null,
  };

  return properties.reduce<PropertiesStatsI>(reducer, initial);
};
