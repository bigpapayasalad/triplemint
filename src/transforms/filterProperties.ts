import type { FilterI, PropertyI } from "../types";

export const filterProperties = (
  properties: PropertyI[],
  filter: FilterI
): PropertyI[] => {
  return properties
    ?.filter((p) => {
      if (filter.minPrice !== undefined && p.price < filter.minPrice) {
        return false;
      } else if (filter.maxPrice !== undefined && p.price > filter.maxPrice) {
        return false;
      } else if (
        filter.minBedrooms !== undefined &&
        p.unit.bedrooms < filter.minBedrooms
      ) {
        return false;
      }
      if (
        filter.maxBedrooms !== undefined &&
        p.unit.bedrooms > filter.maxBedrooms
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      const direction = filter.sort === "asc" ? 1 : -1;
      if (a.price < b.price) {
        return -1 * direction;
      } else {
        return 1 * direction;
      }
    });
};
